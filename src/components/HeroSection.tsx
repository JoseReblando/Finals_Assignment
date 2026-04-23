import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p>Full-stack developer passionate about building modern web applications</p>
          <Link to="/contact" className="btn-primary">
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  )
}
