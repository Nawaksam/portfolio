import { useState } from "react"

import Navbar from "./components/Navbar/Navbar"
import Accueil from "./components/Accueil"
import Experiences from "./components/Experiences"
import Realisations from "./components/Realisations"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="relative bg-gradient-to-r from-primary to-secondary flex flex-col min-h-screen max-w-7xl w-full shadow-xl">
      <Navbar />
      <div className="flex-grow p-4 flex flex-col gap-4">
        <Accueil />
        <Experiences />
        <Realisations />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
