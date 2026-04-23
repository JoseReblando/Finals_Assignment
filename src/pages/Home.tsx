import HeroSection from '../components/HeroSection'
import BioContent from '../components/BioContent'
import CallToAction from '../components/CallToAction'

export default function Home() {
  return (
    <div className="page home-page">
      <HeroSection />
      <BioContent />
      <CallToAction />
    </div>
  )
}
