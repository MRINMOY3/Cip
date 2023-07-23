import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Load from './components/loadingbar'

function App() {
  const [count, setCount] = useState(0)

  return (

      <div className="App">
          <Header/>
          <Load/>cd Ciph
      </div>

  )
}

export default App
