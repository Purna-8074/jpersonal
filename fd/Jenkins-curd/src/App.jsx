import { useState } from 'react'
 
import './App.css'
import Registar from './Components/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Registar/>
    </>
  )
}

export default App
