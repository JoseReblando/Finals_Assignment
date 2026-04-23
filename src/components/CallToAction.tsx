import { Link } from 'react-router-dom'

export default function CallToAction() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2>Ready to Start a Project?</h2>
        <p>Let's collaborate and create something amazing together</p>
        <Link to="/contact" className="btn-primary">
          Contact Me Today
        </Link>
      </div>
    </section>
  )
}
