import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

interface IAgendamento {
    id: number;
    nome: string;
    email: string;
    nomelaboratorio: string;
    data: string;
}

const Agendamentos = () => {
    const [agendamentos, setAgendamentos] = useState<IAgendamento[]>([]);
    const [editingAgendamentoId, setEditingAgendamentoId] = useState<number | null>(null);
    const [formData, setFormData] = useState<IAgendamento | null>(null);

    useEffect(() => {
        axios.get('http://localhost:3001/agendamentos', { headers: { 'Cache-Control': 'no-cache' } })
            .then((response: AxiosResponse<IAgendamento[]>) => {
                console.log(response.data);
                const sortedAgendamentos = response.data.sort((a, b) => new Date(a.data).getTime() - new Date(b.data).getTime());
                setAgendamentos(sortedAgendamentos);
            })
            .catch((error) => console.error('Error fetching agendamentos:', error));
    }, []);

    const handleEditAgendamento = (agendamentoId: number) => {
        setEditingAgendamentoId(agendamentoId);
        const agendamentoToEdit = agendamentos.find((a) => a.id === agendamentoId);
        setFormData(agendamentoToEdit || null);
    };

    const handleUpdateAgendamento = () => {
        if (formData) {
            axios.put(`http://localhost:3001/agendamentos/${formData.id}`, formData)
                .then(() => {
                    const updatedAgendamentos = agendamentos.map((agendamento) => (agendamento.id === formData.id ? formData : agendamento));
                    const sortedAgendamentos = updatedAgendamentos.sort((a, b) => new Date(a.data).getTime() - new Date(b.data).getTime());
                    setAgendamentos(sortedAgendamentos);
                    setEditingAgendamentoId(null);
                    setFormData(null); // Limpa o estado de formData após a conclusão da edição
                })
                .catch((error) => console.error('Error updating agendamento:', error));
        }
    };

    const handleDeleteAgendamento = (agendamentoId: number) => {
        axios.delete(`http://localhost:3001/agendamentos/${agendamentoId}`)
            .then(() => {
                const updatedAgendamentos = agendamentos.filter((agendamento) => agendamento.id !== agendamentoId);
                const sortedAgendamentos = updatedAgendamentos.sort((a, b) => new Date(a.data).getTime() - new Date(b.data).getTime());
                setAgendamentos(sortedAgendamentos);
            })
            .catch((error) => console.error('Error deleting agendamento:', error));
    };

    const formatDate = (dateString: string) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;
        return new Date(dateString).toLocaleDateString('pt-BR', options);
    };

    return (
        <div className={"d-flex flex-column justify-content-center align-items-center flex-nowrap ms-1 w-100"}>
            <h2 className={"fs-2 mb-5"}>Lista de Agendamentos</h2>

            <ul className="list-group">
                {agendamentos.map((agendamento) => (
                    <li key={agendamento.id} className="list-group-item d-flex align-items-cente  p-2">
                        {editingAgendamentoId === agendamento.id ? (
                            <div className="d-flex justify-content-center align-items-center align-self-center align-content-between flex-wrap">

                                <input
                                    type="text"
                                    value={formData?.nome || ''}
                                    onChange={(e) => setFormData({ ...formData!, nome: e.target.value })}
                                    className={"form-control"}
                                />
                                <input
                                    type="email"
                                    value={formData?.email || ''}
                                    onChange={(e) => setFormData({ ...formData!, email: e.target.value })}
                                />
                                <input
                                    type="text"
                                    value={formData?.nomelaboratorio || ''}
                                    onChange={(e) => setFormData({ ...formData!, nomelaboratorio: e.target.value })}
                                />
                                <input
                                    type="date"
                                    value={formData?.data || ''}
                                    onChange={(e) => setFormData({ ...formData!, data: e.target.value })}
                                />
                                <button type={"button"} className="btn btn-primary p-2 m-2" onClick={() => handleUpdateAgendamento()}>Salvar</button>
                                <button type={"button"} className="btn btn-primary p-2" onClick={() => setEditingAgendamentoId(null)}>Cancelar</button>
                            </div>
                        ) : (
                            <div className={"d-flex justify-content-between align-items-center align-self-center align-content-between flex-wrap p-2"}>
                                <span className={"p-2 fw-bold"}>{agendamento.nome}</span>
                                <span className={"p-2 fst-italic"}>({agendamento.email})</span>
                                <span className={"p-1 fw-light"}>agendou o laboratório</span>
                                <span className={"p-2 fw-bold"}>{agendamento.nomelaboratorio}</span>
                                <span className={"p-2 fw-light"}>para o dia</span>
                                <span className={"p-2 fw-bold"}>{formatDate(agendamento.data)}</span>
                                <button className="btn btn-primary p-2 m-2" onClick={() => handleEditAgendamento(agendamento.id)}>Editar</button>
                                <button className="btn btn-primary p-2" onClick={() => handleDeleteAgendamento(agendamento.id)}>Excluir</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Agendamentos;
