export default function ExperienceSection() {
  const experiences = [
    {
      role: 'Junior Developer',
      company: 'Tech Startup',
      duration: '2023 - 2024',
      description: 'Developed responsive web applications using React and TypeScript'
    },
    {
      role: 'Full Stack Developer',
      company: 'Web Solutions Inc',
      duration: '2024 - Present',
      description: 'Built and maintained enterprise-level applications with React and .NET Core'
    }
  ]

  return (
    <section className="experience-section">
      <div className="experience-container">
        <h2>Experience</h2>
        <div className="experience-list">
          {experiences.map((exp, idx) => (
            <div key={idx} className="experience-item">
              <h3>{exp.role}</h3>
              <p className="company">{exp.company}</p>
              <p className="duration">{exp.duration}</p>
              <p className="description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
