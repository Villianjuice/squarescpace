import errorGif from './004error.gif'

export const ErrorMessage = () => {
  return (
    <div>
      <img
        src={errorGif}
        style={{
          display: 'block',
          width: '250px',
          height: '250px',
          objectFit: 'contain',
          margin: '0 auto',
        }}
        alt="errorGif"
    />
    </div>
  )
}
