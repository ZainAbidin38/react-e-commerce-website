import NavBar from "./Components/Header/NavBar"
import '../src/Components/Header/NavBar.Module.css'
import '../src/Components/Hero/Hero.Module.css'
import '../src/Pages/Home/Home.Module.css'

// Pages
import Home from "./Pages/Home/Home"

function App() {

  return (
    <>
      <NavBar />
      <Home />
    </>
  )
}

export default App
