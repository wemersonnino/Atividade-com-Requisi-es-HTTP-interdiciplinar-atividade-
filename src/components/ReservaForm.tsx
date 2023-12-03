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

                // Aqui, você pode chamar a função de atualização do agendamento
                handleUpdateAgendamento(response.data);

                setNome('');
                setEmail('');
                setData('');
                setSelectedLaboratorio('0');
            })
            .catch((error) => console.error('Error adding reserva:', error));
    };

    const handleUpdateAgendamento = (reserva: { data: string; nome: string; nomelaboratorio: string; email: string }) => {
        // Crie o objeto de agendamento com base nos dados da reserva
        const agendamentoData = {
            nome: reserva.nome,
            email: reserva.email,
            nomelaboratorio: reserva.nomelaboratorio,
            data: reserva.data
        };

        // Chame a função de atualização do agendamento
        axios.post('http://localhost:3001/agendamentos', agendamentoData)
            .then((response) => {
                console.log('Agendamento adicionado:', response.data);
            })
            .catch((error) => console.error('Error adding agendamento:', error));
    };

    return (
        <div>
            <h2>Reservar Laboratório</h2>
            <label>Nome:</label>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Data:</label>
            <input type="date" value={data} onChange={(e) => setData(e.target.value)} />
            <label>Laboratório:</label>
            <select
                value={selectedLaboratorio.toString()}
                onChange={(e) => setSelectedLaboratorio(e.target.value)}
            >
                <option value="0">Selecione um laboratório</option>
                {laboratorios.map((lab) => (
                    <option key={lab.id} value={(lab.id !== null && lab.id !== undefined) ? lab.id.toString() : '0'}>
                        {lab.nome}
                    </option>
                ))}
            </select>
            <button onClick={handleAddReserva}>Reservar</button>
        </div>
    );
};

export default ReservaForm;
