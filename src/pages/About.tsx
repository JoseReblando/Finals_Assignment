import SkillsSection from '../components/SkillsSection'
import ExperienceSection from '../components/ExperienceSection'
import PersonalStatement from '../components/PersonalStatement'

export default function About() {
  return (
    <div className="page about-page">
      <div className="about-header">
        <h1>About Me</h1>
        <p>Discover my journey and expertise</p>
      </div>
      <PersonalStatement />
      <SkillsSection />
      <ExperienceSection />
    </div>
  )
}
