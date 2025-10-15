import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
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
  return (
    <div style={{ width: "100%", height: 400 }}>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
        Agendamentos por Data
      </h2>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 20, right: 40, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="_id" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="totalAgendamentos"
            stroke="#8884d8"
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}