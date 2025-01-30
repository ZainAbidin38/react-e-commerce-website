import NavBar from "./Components/Header/NavBar"
import '../src/Components/Header/NavBar.Module.css'
import '../src/Components/Hero/Hero.Module.css'
import Hero from "./Components/Hero/Hero"
import ProductsSection from "./Components/ProductsSection/ProductsSection"

function App() {

  return (
    <>
      <header>
        <NavBar />
        <Hero />
      </header>
      <section className="ProductsSection">
        <ProductsSection />
      </section>
    </>
  )
}

export default App
