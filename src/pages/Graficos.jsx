import GraficoLinha from '../components/Graficolinha';
import GraficoColuna from '../components/Graficocoluna';
import '../components/Graficoglobal.scss'
export default function Graficos() {

const dadosMatriculas = [
  {
    _id: { courseName: "Administração", periodName: "Manhã" },
    totalInscritos: 32,
  },
  {
    _id: { courseName: "Administração", periodName: "Tarde " },
    totalInscritos: 49,
  },
  {
    _id: { courseName: "Automação Residencial e Robótica", periodName: "Manhã" },
    totalInscritos: 4,
  },
  {
    _id: { courseName: "Automação Residencial e Robótica", periodName: "Tarde " },
    totalInscritos: 5,
  },
  {
    _id: { courseName: "Informática", periodName: "Manhã" },
    totalInscritos: 31,
  },
  {
    _id: { courseName: "Informática", periodName: "Tarde " },
    totalInscritos: 49,
  },
  {
    _id: {
      courseName: "Inglês Básico - Pré Intermediário (Diurno)",
      periodName: "Manhã 1",
    },
    totalInscritos: 30,
  },
  {
    _id: {
      courseName: "Inglês Básico - Pré Intermediário (Diurno)",
      periodName: "Manhã 2",
    },
    totalInscritos: 20,
  },
  {
    _id: {
      courseName: "Inglês Básico - Pré Intermediário (Diurno)",
      periodName: "Tarde 1",
    },
    totalInscritos: 51,
  },
  {
    _id: {
      courseName: "Inglês Básico - Pré Intermediário (Diurno)",
      periodName: "Tarde 2 ",
    },
    totalInscritos: 24,
  },
  {
    _id: { courseName: "Inglês Intermediário (Sábados)", periodName: "Manhã" },
    totalInscritos: 93,
  },
  {
    _id: { courseName: "Inglês Pré Intermediário (Noturno)", periodName: "Noite" },
    totalInscritos: 14,
  },
];

  return (
    <div className="bloco">
      <header>
        <img src="src/components/frei.png" alt="" />
        <h2>Dashboard Frei</h2>
      </header>
      <main>
        <div className="grafico-container">
          <h1 className="titulo">Dashboard de Matrículas</h1>
          <p className="subtitulo">
            Visualização dos dados de matrícula da instituição por curso e período
          </p>

          <div>
            <GraficoLinha data={dadosMatriculas} />
            <GraficoColuna data={dadosMatriculas} />
          </div>
        </div>
      </main>
    </div>
  );
}
