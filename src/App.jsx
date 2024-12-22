import Gallery from "./Components/Gallery"
import ServiceCard from "./Components/ServiceCard"
import TopNavbar from "./Components/TopNavbar"

function App() {
  return (
    <>
    <TopNavbar/>
      <h1 className="text-5xl font-semibold text-center my-6 font-ubuntu text-defaultColor">Amar Sonar Bangla Ami Tomay Valobashi</h1>
      <ServiceCard/>
      <Gallery/>
    </>
  )
}

export default App