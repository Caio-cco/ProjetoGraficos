import { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import './graficoGlobal.scss';

const cores = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16', '#f43f5e', '#0ea5e9', '#a78bfa', '#22c55e', '#eab308'];

export default function GraficoColuna() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    axios.get('https://api.vestibular-insf.com.br/api/enrollments/count-by-course-period?password=r%26p0rts')
    
      .then(res => {
        const dadosFormatados = res.data.map(item => ({
          nome: `${item.courseName} - ${item.periodName}`,
          curso: item.courseName,
          totalInscritos: item.totalInscritos
        }));
        setDados(dadosFormatados);
      })
      .catch(err => console.error('Erro ao carregar dados da API:', err));
  }, []);

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
