import errorGif from './004error.gif'

interface ErrorMessageProps {
  message: string
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className='errorBoundary'>
      <img
        src={errorGif}
        style={{
          display: 'block',
          width: '250px',
          height: '250px',
          objectFit: 'contain',
          margin: '0 auto',
        }}
        alt='errorGif'
      />
      <pre>{message}</pre>
    </div>
  )
}
