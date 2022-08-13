import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'

import { FormInputs } from '../../ts/types'
import { ErrorMessage } from './ErrorMessage'
import { Line } from '../../composables'
import { useAppSelector } from '../../redux/hook'

export const Form = () => {
  const { control, register, handleSubmit, reset, formState: { errors }} = useForm<FormInputs>({ mode: 'onBlur' })

  const totalPrice = useAppSelector(state => state.cart.totalPrice)

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    alert(JSON.stringify(data))
    reset()
  }

  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <h2 className='form__title'>Доставка</h2>
      <Line />
      <label className='form__label'>
        E-mail
        <input
          className='form__input'
          {...register('email', {
            required: 'Please fill out all required fields',
            pattern: {
              message: 'Please enter valid email',
              value:
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            },
          })}
        />
      </label>
      <ErrorMessage obj={errors.email} />

      <label className='form__label'>
        <Controller
          name='phone'
          control={control}
          rules={{
            minLength: {
              value: 12,
              message: 'Недостаточно символов',
            },
          }}
          render={({ field: { onChange, value } }) => (
            <PhoneInput
              masks={{ kg: '(...) ... - ... - ...' }}
              inputClass='form__input'
              country={'kg'}
              value={value}
              onChange={onChange}
              specialLabel='Phone number'
            />
          )}
        />
      </label>
      <ErrorMessage obj={errors.phone} />

      <label className='form__label'>
        City
        <input
          className='form__input'
          {...register('city', {
            required: 'Please fill out all required fields',
          })}
        />
      </label>
      <ErrorMessage obj={errors.city} />

      <label className='form__label'>
        Full name
        <input
          className='form__input'
          {...register('name', {
            required: 'Please fill out all required fields',
          })}
        />
      </label>
      <ErrorMessage obj={errors.name} />

      <label className='form__label'>
        Adress
        <input
          className='form__input'
          {...register('address', {
            required: 'Please fill out all required fields',
          })}
        />
      </label>
      <ErrorMessage obj={errors.address} />

      <label className='form__label'>
        Индекс - Postal
        <input
          className='form__input'
          {...register('postal', {
            required: 'Please fill out all required fields',
          })}
        />
      </label>
      <ErrorMessage obj={errors.postal} />

      <p className='form__info'>Subtotal: {totalPrice ? `${totalPrice} RUB` : ''} </p>
      <p className='form__info'>Международная доставка — Worldwide Shipping:1 700RUB</p>

      <p className='cartList__total'>Total: {totalPrice ? `${totalPrice + 1700} RUB` : '' }</p>

      <input type='submit' className='btn btn__form' value='ЗАКАЗАТЬ' />
    </form>
  )
}
