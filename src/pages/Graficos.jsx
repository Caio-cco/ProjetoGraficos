import Graficolinha from '../components/Graficolinha';
import Graficocoluna from '../components/Graficocoluna';
import Cards from '../components/cards'
import '../components/graficoGlobal.scss';

export default function Graficos() {
  return (
    <div className="bloco">
      <header>
        <h2>Dashboard Frei</h2>
      </header>

      <main>
        <div className="grafico-container">
          <h1 className="titulo">Dashboard de Matrículas</h1>
          
          <p className="subtitulo">
            Visualização dos dados de matrícula da instituição por curso e período
          </p>
          <Cards />
          <div>
            <Graficolinha />
            <Graficocoluna />
          </div>
        </div>
      </main>
    </div>
  );
}
