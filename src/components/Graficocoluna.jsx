import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const rawData = [
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


const data = Object.values(
  rawData.reduce((acc, item) => {
    const { courseName, periodName } = item._id;
    if (!acc[courseName]) acc[courseName] = { courseName };
    acc[courseName][periodName.trim()] = item.totalInscritos;
    return acc;
  }, {})
);

export default function GraficoCursos() {
  return (
    <div style={{ width: "100%", height: 450 }}>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
        Inscrições por Curso e Período
      </h2>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 20, right: 40, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="courseName" tick={{ fontSize: 10 }} interval={0} angle={-20} textAnchor="end" />
          <YAxis />
          <Tooltip />
          <Legend />
          
         
          {Object.keys(data[0])
            .filter((key) => key !== "courseName")
            .map((period, i) => (
              <Bar
                key={period}
                dataKey={period}
                fill={`hsl(${(i * 60) % 360}, 70%, 60%)`}
                barSize={40}
              />
            ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}