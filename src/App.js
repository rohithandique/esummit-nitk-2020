import "./App.css"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Hero from "components/hero/Hero"
import Speakers from "components/features/Speakers"
import Pitch from "components/pitch/Pitch"
import Workshops from "components/features/Workshops"
import Events from "components/events/Events"
import Footer from "components/footers/Footer"
import Sponsors from "components/sponsors/Sponsors"
import Panel from "components/panel/Panel"


function App() {
  return (
    <AnimationRevealPage disabled>
      <Hero />
      <Speakers />
      <Pitch />
      <Events />
      <Workshops />
      <Panel />
      <Sponsors />
      <Footer />
    </AnimationRevealPage>
  )
}

export default App