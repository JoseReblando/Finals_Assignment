import { useForm, SubmitHandler } from 'react-hook-form'
import { Submission } from '../pages/Contact'
import { useTheme } from '../hooks/useTheme'

interface ContactFormProps {
  onSubmit: (data: Submission) => void
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Submission>()
  const { theme } = useTheme()

  const handleFormSubmit: SubmitHandler<Submission> = (data) => {
    onSubmit(data)
    reset()
  }

  return (
    <form className={`contact-form theme-${theme}`} onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="form-group">
        <label htmlFor="sender">Your Name</label>
        <input
          id="sender"
          type="text"
          placeholder="Enter your name"
          {...register('sender', {
            required: 'Name is required',
            minLength: {
              value: 2,
              message: 'Name must be at least 2 characters'
            }
          })}
          className={`form-input ${errors.sender ? 'error' : ''}`}
        />
        {errors.sender && (
          <span className="error-message">{errors.sender.message}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="Enter your message"
          {...register('message', {
            required: 'Message is required',
            minLength: {
              value: 10,
              message: 'Message must be at least 10 characters'
            }
          })}
          className={`form-textarea ${errors.message ? 'error' : ''}`}
          rows={5}
        />
        {errors.message && (
          <span className="error-message">{errors.message.message}</span>
        )}
      </div>

      <button type="submit" className="btn-submit">
        Send Message
      </button>
    </form>
  )
}
