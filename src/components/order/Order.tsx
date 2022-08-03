// @ts-ignore
import { useState } from "react"
import PhoneInput from 'react-phone-input-2'

import 'react-phone-input-2/lib/style.css'



export const Order = () => {
  const [number, setNumber] = useState()
  
  // const onChange: React.ChangeEventHandler<HTMLInputElement> = (e)  => setNumber(e.target.value)

  return (
    <form className="order">
      <label className='order__label'>
        e-mail
        <input className='order__input' type="text" />
      </label>
      <PhoneInput
        country={'kg'}
        value={number}
        // onChange={e => setNumber(e.target.value)}
      />
    </form>
  )
}
