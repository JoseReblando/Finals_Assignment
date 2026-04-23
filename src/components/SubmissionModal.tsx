import { Submission } from '../pages/Contact'
import { useTheme } from '../hooks/useTheme'

interface SubmissionModalProps {
  submission: Submission
  onClose: () => void
}

export default function SubmissionModal({ submission, onClose }: SubmissionModalProps) {
  const { theme } = useTheme()

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className={`modal-content theme-${theme}`} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>✓ Message Received!</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <div className="submission-detail">
            <label>From:</label>
            <p className="sender-name">{submission.sender}</p>
          </div>
          <div className="submission-detail">
            <label>Message:</label>
            <p className="message-content">{submission.message}</p>
          </div>
          <p className="thank-you-msg">Thank you for reaching out! I'll get back to you soon.</p>
        </div>
        <div className="modal-footer">
          <button className="btn-close" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
