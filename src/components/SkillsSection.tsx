export default function SkillsSection() {
  const skills = [
    'React',
    'TypeScript',
    '.NET Core',
    'SQL',
    'REST APIs',
    'Git',
    'CSS',
    'JavaScript'
  ]

  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill} className="skill-item">
              <span className="skill-badge">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
