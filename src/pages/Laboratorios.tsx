// Importe os tipos necessários
import { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';
import LaboratorioForm from '../components/LaboratorioForm';

// Defina a interface para o objeto Laboratorio
interface Laboratorio {
    id: number;
    nome: string;
    qtdComputadores: number;
}

const Laboratorios = () => {
    const [laboratorios, setLaboratorios] = useState<Laboratorio[]>([]);
    const [editingLabId, setEditingLabId] = useState<number | null>(null);

    useEffect(() => {
        axios.get('http://localhost:3001/laboratorios')
            .then((response) => setLaboratorios(response.data))
            .catch((error) => console.error('Error fetching laboratorios:', error));
    }, []);

    const handleAddLaboratorio = (newLaboratorio: { nome: string; qtdComputadores: string }) => {
        axios.post('http://localhost:3001/laboratorios', newLaboratorio)
            .then((response) => setLaboratorios([...laboratorios, response.data]))
            .catch((error) => console.error('Error adding laboratorio:', error));
    };

    const handleEditLaboratorio = (labId: number) => {
        setEditingLabId(labId);
    };

    const handleUpdateLaboratorio = (updatedLaboratorio: Laboratorio) => {
        axios.put(`http://localhost:3001/laboratorios/${updatedLaboratorio.id}`, updatedLaboratorio)
            .then(() => {
                setLaboratorios(laboratorios.map((lab) => (lab.id === updatedLaboratorio.id ? updatedLaboratorio : lab)));
                setEditingLabId(null);
            })
            .catch((error) => console.error('Error updating laboratorio:', error));
    };

    const handleDeleteLaboratorio = (labId: number) => {
        axios.delete(`http://localhost:3001/laboratorios/${labId}`)
            .then(() => setLaboratorios(laboratorios.filter((lab) => lab.id !== labId)))
            .catch((error) => console.error('Error deleting laboratorio:', error));
    };

    return (
        <div className={"container flex items-center w-full h-full"}>
            <LaboratorioForm onAddLaboratorio={handleAddLaboratorio} />
            <h2 className={"fs-3 mt-4 mb-5 text-center text-uppercase fw-bold"}>Lista de Laboratórios Cadastrados</h2>
            <ul className="list-group">
                {laboratorios.map((lab) => (
                    <li key={lab.id} className="list-group-item d-flex align-items-cente p-2">
                        {editingLabId === lab.id ? (
                            <div className={"d-flex justify-content-evenly align-items-center align-self-center align-content-between flex-wrap p-2  center-data w-100"}>
                                <input
                                    type="text"
                                    value={lab.nome}
                                    onChange={
                                        (e: ChangeEvent<HTMLInputElement>) => setLaboratorios(
                                            laboratorios.map((l) => (
                                                l.id === lab.id ? { ...l, nome: e.target.value } : l
                                            )))
                                    }
                                />
                                <input
                                    type="number"
                                    value={lab.qtdComputadores}
                                    placeholder={"numero"}
                                    onChange={
                                        (e: ChangeEvent<HTMLInputElement>) => setLaboratorios(
                                            laboratorios.map((l) => (
                                                l.id === lab.id ? { ...l, qtdComputadores: +e.target.value } : l
                                            )))}
                                />
                                <button onClick={() => handleUpdateLaboratorio(lab)}>Salvar</button>
                                <button onClick={() => setEditingLabId(null)}>Cancelar</button>
                            </div>
                        ) : (
                            <div>
                                {lab.nome} - {lab.qtdComputadores} computadores
                                <button onClick={() => handleEditLaboratorio(lab.id)}>Editar</button>
                                <button onClick={() => handleDeleteLaboratorio(lab.id)}>Excluir</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Laboratorios;
