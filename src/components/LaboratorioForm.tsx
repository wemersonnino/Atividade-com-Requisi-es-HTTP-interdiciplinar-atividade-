import { useState } from 'react';

interface ILaboratorioProps {
    onAddLaboratorio: (p: { nome: string; qtdComputadores: string }) => void;
}
const LaboratorioForm = ({ onAddLaboratorio }: ILaboratorioProps) => {
    const [nome, setNome] = useState('');
    const [qtdComputadores, setQtdComputadores] = useState('');

    const handleAddLaboratorio = () => {
        onAddLaboratorio({ nome, qtdComputadores });
        setNome('');
        setQtdComputadores('');
    };

    return (
        <div className={"d-flex flex-column p-2 container"}>
            <div className={"row"}>
                <h2 className={"fs-3 mt-4 mb-5 text-center text-uppercase fw-bold"}>Cadastrar Laboratório</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor={nome} className="form-label">Nome Laboratorio</label>
                        <input
                            type="text"
                            className="form-control"
                            id={nome}
                            placeholder={"Nome do Laborátorio"}
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            aria-describedby="nome laboratorio"
                        />
                        <div id="nomeLaboratorio" className="form-text">Nome do Laborátorio.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="qtdComputadores" className="form-label">Quantidade de Computadores</label>
                        <input
                            type="number"
                            className="form-control"
                            id="qtdComputadores"
                            placeholder={"Quantidade de computadores"}
                            value={qtdComputadores}
                            onChange={(e) => setQtdComputadores(e.target.value)}
                        />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={handleAddLaboratorio}>Cadastrar</button>
                </form>
            </div>
        </div>
    );
};

export default LaboratorioForm;
