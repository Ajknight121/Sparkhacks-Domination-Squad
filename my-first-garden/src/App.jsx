import { useState } from 'react'
import spaceBackground from "./images/space-background.gif"
import './App.css'

function App() {
  const [step, setStep] = useState(0)

  return (
    <>
      <div className='container w-full h-screen relative'>
        <img src={spaceBackground} className="background-img absolute top-0 left-0 w-full h-full object-cover"/>
      </div>
    </>
  )
}

export default App
