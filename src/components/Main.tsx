import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

interface IAgendamento {
    id: number;
    nome: string;
    email: string;
    nomelaboratorio: string;
    data: string;
}

const Main = () => {
    const [agendamentos, setAgendamentos] = useState<IAgendamento[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3001/agendamentos', { headers: { 'Cache-Control': 'no-cache' } })
            .then((response: AxiosResponse<IAgendamento[]>) => {
                console.log(response.data);
                const sortedAgendamentos = response.data.sort((a, b) => new Date(a.data).getTime() - new Date(b.data).getTime());
                setAgendamentos(sortedAgendamentos);
            })
            .catch((error) => console.error('Error fetching agendamentos:', error));
    }, []);

    const formatDate = (dateString: string) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;
        return new Date(dateString).toLocaleDateString('pt-BR', options);
    };
  return(
      <main className={"container-fluid flex items-center w-full h-full"}>
        <h2 className={"fs-3 mt-4 mb-5 text-center text-uppercase fw-bold"}>Atividade com Requisições HTTP (Atividade Interdiciplinar)</h2>
          <h4 className={"fs-6 text-center mb-3 fw-bold"}>Dupla: <span className={"fw-light text-amber-900"}>Wemerson & Yasmin</span></h4>
          <ul className="list-group">
              {agendamentos.map((agendamento) => (
                  <li key={agendamento.id} className="list-group-item d-flex align-items-cente p-2">
                      <div className={"d-flex justify-content-evenly align-items-center align-self-center align-content-between flex-wrap p-2  center-data w-100"}>
                          <span className={"p-2 fw-bold"}>{agendamento.nome}</span>
                          <span className={"p-2 fst-italic"}>({agendamento.email})</span>
                          <span className={"p-1 fw-light"}>agendou o laboratório</span>
                          <span className={"p-2 fw-bold"}>{agendamento.nomelaboratorio}</span>
                          <span className={"p-2 fw-light"}>para o dia</span>
                          <span className={"p-2 fw-bold"}>{formatDate(agendamento.data)}</span>
                      </div>
                  </li>
              ))}
          </ul>
      </main>
  );
}

export default Main;