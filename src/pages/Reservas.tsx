import { useState, useEffect } from "react";
import axios from "axios";

interface IReservaFormProps {
    laboratorios: { id: string; nome: string; qtdComputadores: string }[];
    onAddReserva: (p: { data: string; laboratorio: string; email: string }) => void;
}

interface Laboratorio {
    id: number;
    nome: string;
    qtdComputadores: number;
}

const ReservaForm = ({ onAddReserva }: IReservaFormProps) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [data, setData] = useState('');
    const [selectedLaboratorio, setSelectedLaboratorio] = useState<number | string>('0');
    const [laboratorios, setLaboratorios] = useState<Laboratorio[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3001/laboratorios')
            .then((response) => setLaboratorios(response.data))
            .catch((error) => console.error('Error fetching laboratorios:', error));
    }, []);

    const handleAddReserva = () => {
        axios.post('http://localhost:3001/reservas', { email, data, laboratorio: Number(selectedLaboratorio) })
            .then((response) => {
                onAddReserva(response.data);

                // Salvar automaticamente o agendamento
                const agendamentoData = {
                    nome,
                    email,
                    nomelaboratorio: selectedLaboratorio.toString(),
                    data
                };

                axios.post('http://localhost:3001/agendamentos', agendamentoData)
                    .then((agendamentoResponse) => {
                        console.log('Agendamento adicionado:', agendamentoResponse.data);
                    })
                    .catch((agendamentoError) => console.error('Error adding agendamento:', agendamentoError));

                setNome('');
                setEmail('');
                setData('');
                setSelectedLaboratorio('0');
            })
            .catch((error) => console.error('Error adding reserva:', error));
    };


    return (
        <div className={"container flex items-center w-full h-full"}>
            <h2 className={"fs-3 mt-4 mb-5 text-center text-uppercase fw-bold"}>Reservar Laboratório</h2>

            <form>
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome Laboratório:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        aria-describedby="nomeLaboratorio"
                    />
                        <div id="nomeLaboratorio" className="form-text">Informe o nome do laborátorio</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="data" className="form-label">Data da Reserva:</label>
                    <input
                        type="date"
                        className="form-control"
                        id="data"
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <select
                        value={selectedLaboratorio.toString()}
                        onChange={(e) => setSelectedLaboratorio(e.target.value)}
                        className="form-select"
                        aria-label="Default select example"
                    >
                        <option value="0">Selecione um laboratório</option>
                        {laboratorios.map((lab) => (
                            <option key={lab.id} value={(lab.id !== null && lab.id !== undefined) ? lab.id.toString() : '0'}>
                                {lab.nome}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="button" onClick={handleAddReserva} className="btn btn-primary">Reservar</button>
            </form>
        </div>
    );
};

export default ReservaForm;
