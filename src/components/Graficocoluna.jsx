import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import './Graficoglobal.scss';

const dadosMatriculas = [
  { _id: { courseName: "Administração", periodName: "Manhã" }, totalInscritos: 32 },
  { _id: { courseName: "Administração", periodName: "Tarde " }, totalInscritos: 49 },
  { _id: { courseName: "Automação Residencial e Robótica", periodName: "Manhã" }, totalInscritos: 4 },
  { _id: { courseName: "Automação Residencial e Robótica", periodName: "Tarde " }, totalInscritos: 5 },
  { _id: { courseName: "Informática", periodName: "Manhã" }, totalInscritos: 31 },
  { _id: { courseName: "Informática", periodName: "Tarde " }, totalInscritos: 49 },
  { _id: { courseName: "Inglês Básico - Pré Intermediário (Diurno)", periodName: "Manhã 1" }, totalInscritos: 30 },
  { _id: { courseName: "Inglês Básico - Pré Intermediário (Diurno)", periodName: "Manhã 2" }, totalInscritos: 20 },
  { _id: { courseName: "Inglês Básico - Pré Intermediário (Diurno)", periodName: "Tarde 1" }, totalInscritos: 51 },
  { _id: { courseName: "Inglês Básico - Pré Intermediário (Diurno)", periodName: "Tarde 2 " }, totalInscritos: 24 },
  { _id: { courseName: "Inglês Intermediário (Sábados)", periodName: "Manhã" }, totalInscritos: 93 },
  { _id: { courseName: "Inglês Pré Intermediário (Noturno)", periodName: "Noite" }, totalInscritos: 14 },
];

const cores = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16', '#f43f5e', '#0ea5e9', '#a78bfa', '#22c55e', '#eab308'];

export default function GraficoColuna() {

  const dados = dadosMatriculas.map(({ _id, totalInscritos }) => ({
    nome: `${_id.courseName} - ${_id.periodName}`,
    curso: _id.courseName,
    totalInscritos
  }));

  const cursosUnicos = [...new Set(dados.map(d => d.curso))];

  return (
    <div className="grafico-container2">
      <div className="grafico-header">
        <h3>Matriculas por Curso e Período - Gráfico de Coluna</h3>
        <p>Comparação das matrículas entre cursos e períodos</p>
      </div>

      <ResponsiveContainer width="100%" height={600}>
        <BarChart data={dados}>

          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />

          <XAxis dataKey="nome" angle={-34} textAnchor="end" height={190} fontSize={12} tick={{ fill: '#555' }} />

          <YAxis tick={{ fill: '#555' }} />

          <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: 8, color: '#111' }} />

          <Bar dataKey="totalInscritos" radius={[4, 4, 0, 0]}>

            {dados.map((d, i) => (
              <Cell key={i} fill={cores[cursosUnicos.indexOf(d.curso) % cores.length]} />
            ))}

          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div className="legenda-cor">
        
        {cursosUnicos.map((curso, i) => (
          <div key={i} className="item">
            <span className="cor" style={{ backgroundColor: cores[i % cores.length] }} />
            <span className="legenda">{curso}</span>
          </div>
        ))}

      </div>
    </div>
  );
}
