import { useState } from 'react'
import GraficoCursos from './components/Graficocoluna'
import GraficoAgendamentos from './components/Graficolinha'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <div>
        <GraficoCursos />
      </div>
      <div>
        <GraficoAgendamentos />
      </div>
    </div>
  )
}

export default App
