import { useEffect, useState } from "react";
import axios from "axios";
import "./graficoGlobal.scss";

export default function CardsResumo() {
  const [totalInscritos, setTotalInscritos] = useState(0);
  const [totalAgendamentos, setTotalAgendamentos] = useState(0);

  useEffect(() => {
    async function carregarDados() {
      try {
        const resInscritos = await axios.get(
          "https://api.vestibular-insf.com.br/api/enrollments/count-by-course-period?password=r%26p0rts"
        );
        const total = resInscritos.data.reduce(
          (acc, item) => acc + item.totalInscritos,
          0
        );
        setTotalInscritos(total);

        const resAgendamentos = await axios.get(
          "https://api.vestibular-insf.com.br/api/appointments/count-by-date?password=r%26p0rts"
        );
        const totalAg = resAgendamentos.data.reduce(
          (acc, item) => acc + item.totalAgendamentos,
          0
        );
        setTotalAgendamentos(totalAg);
      } catch (err) {
        console.error("Erro ao carregar dados:", err);
      }
    }

    carregarDados();
  }, []);

  return (
    <div className="cards-resumo">
      <div className="card-info inscritos">
        <h4>Total de Inscritos</h4>
        <p>{totalInscritos.toLocaleString("pt-BR")}</p>
      </div>

      <div className="card-info agendamentos">
        <h4>Total de Agendamentos</h4>
        <p>{totalAgendamentos.toLocaleString("pt-BR")}</p>
      </div>
    </div>
  );
}