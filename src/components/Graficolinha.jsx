import { LineChart, Line, XAxis, YAxis, Tooltip,CartesianGrid,ResponsiveContainer,} from "recharts";
import './graficoGlobal.scss';

export const dadosAgendamentos = [
  { _id: "08/10/2025", totalAgendamentos: 1 },
  { _id: "09/10/2025", totalAgendamentos: 3 },
  { _id: "10/10/2025", totalAgendamentos: 7 },
  { _id: "13/10/2025", totalAgendamentos: 28 },
  { _id: "14/10/2025", totalAgendamentos: 55 },
  { _id: "15/10/2025", totalAgendamentos: 120 },
  { _id: "16/10/2025", totalAgendamentos: 54 },
  { _id: "17/10/2025", totalAgendamentos: 70 },
  { _id: "20/10/2025", totalAgendamentos: 53 },
  { _id: "21/10/2025", totalAgendamentos: 37 },
  { _id: "22/10/2025", totalAgendamentos: 28 },
  { _id: "23/10/2025", totalAgendamentos: 29 },
  { _id: "24/10/2025", totalAgendamentos: 43 },
];

export default function GraficoAgendamentos() {
  const chartData = dadosAgendamentos.map(({ _id, totalAgendamentos }) => ({
    data: _id,
    totalAgendamentos
  }));

  return (
    <div className="grafico-container2">
      <div className="grafico-header">
        <h3>Agendamentos por Data - Gráfico de Linha</h3>
        <p>Comparação dos agendamentos ao longo do tempo</p>
      </div>

      <div className="grafico-container">
        <ResponsiveContainer width="100%" height={600}>
          <LineChart data={chartData}>
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
    </div>
  );
}
