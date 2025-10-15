import { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import './graficoGlobal.scss';

export default function GraficoAgendamentos() {
  const [Dados, setDados] = useState([]);
  const [erro, setErro] = useState(false); 

  useEffect(() => {
    axios.get('https://api.vestibular-insf.com.br/api/appointments/count-by-date', {
    })
    
    .then(res => {
      const dadosFormatados = res.data.map(item => ({
        data: item._id,
        totalAgendamentos: item.totalAgendamentos
      }));
      setDados(dadosFormatados);
      setErro(false);
    })

    .catch(err => {
      console.error('Erro ao carregar dados da API:', err);
      setErro(true);
    });
  }, []);

  if (erro) {
    return (
      <div className="grafico-container2">
        <h3>Erro ao carregar os dados da API</h3>
      </div>
    );
  }

  return (
    <div className="grafico-container2">
      <div className="grafico-header">
        <h3>Agendamentos por Data - Gráfico de Linha</h3>
        <p>Comparação dos agendamentos ao longo do tempo</p>
      </div>

      <ResponsiveContainer width="100%" height={600}>
        <LineChart data={Dados}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis
            dataKey="data"
            angle={-52}
            textAnchor="end"
            height={120}
            fontSize={12}
            tick={{ fill: '#555555' }}
          />
          <YAxis tick={{ fill: '#555555' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#ffffff',
              border: '1px solid #cccccc',
              borderRadius: '8px',
              color: '#111111'
            }}
          />
          <Line
            type="monotone"
            dataKey="totalAgendamentos"
            strokeWidth={3}
            dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
            activeDot={{ r: 8, stroke: '#3b82f6', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
