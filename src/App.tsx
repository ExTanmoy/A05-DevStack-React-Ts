import { Suspense } from "react"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import type  { ITechnology } from "./types/ITechnology"
import Technologies from "./components/Technologies"
import Footer from "./components/Footer"



const technologiesDataFetch = async (): Promise<ITechnology[]> =>{
    const res = await fetch('/technologies.json')
    const data = await res.json()
    return data
}
function App() {
  const technologiesDataPromise = technologiesDataFetch()
  
  return (
    <>
      
      <Navbar></Navbar>
      <Hero></Hero>
      <Suspense fallback={<h2>Loading......</h2>}>
        <Technologies technologiesDataPromise = {technologiesDataPromise}></Technologies>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App;
