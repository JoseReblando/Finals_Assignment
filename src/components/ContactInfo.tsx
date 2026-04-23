export default function ContactInfo() {
  return (
    <div className="contact-info">
      <h2>Contact Information</h2>
      <div className="info-item">
        <h3>Email</h3>
        <p>student@example.com</p>
      </div>
      <div className="info-item">
        <h3>Phone</h3>
        <p>(555) 123-4567</p>
      </div>
      <div className="info-item">
        <h3>Location</h3>
        <p>San Francisco, CA</p>
      </div>
      <div className="info-item">
        <h3>Follow Me</h3>
        <div className="social-links">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
        </div>
      </div>
    </div>
  )
}
