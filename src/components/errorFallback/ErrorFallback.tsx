import { FallbackProps } from 'react-error-boundary'
import { ErrorMessage } from '../errorMessage/ErrorMessage'

export const ErrorFallback: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div role='alert' className='container errorBoundary' style={{ width: '250px' }}>
      <ErrorMessage message={error.message} />
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}
