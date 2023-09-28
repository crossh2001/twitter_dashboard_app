import { useState } from 'react'
import Dashboard1 from './components/dashboard1'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dashboard1/>
    </>
  )
}

export default App
