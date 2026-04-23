import ContactForm from '../components/ContactForm'
import ContactInfo from '../components/ContactInfo'
import SubmissionModal from '../components/SubmissionModal'
import { useState } from 'react'

export interface Submission {
  sender: string
  message: string
}

export default function Contact() {
  const [submission, setSubmission] = useState<Submission | null>(null)

  const handleFormSubmit = (data: Submission) => {
    setSubmission(data)
  }

  return (
    <div className="page contact-page">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>I'd love to hear from you</p>
      </div>
      <div className="contact-container">
        <ContactForm onSubmit={handleFormSubmit} />
        <ContactInfo />
      </div>
      {submission && (
        <SubmissionModal
          submission={submission}
          onClose={() => setSubmission(null)}
        />
      )}
    </div>
  )
}
