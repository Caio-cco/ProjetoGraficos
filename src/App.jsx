import { useState } from 'react'
import GraficoCursos from './components/Graficocoluna'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <GraficoCursos />
   </div>
  )
}

export default App
