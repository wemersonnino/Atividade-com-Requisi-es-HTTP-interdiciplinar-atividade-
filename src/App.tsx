import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Laboratorios from './pages/Laboratorios';
import Reservas from './pages/Reservas';
import Agendamentos from './pages/Agendamentos';
import './App.css';
import Main from "./components/Main.tsx";
interface Reserva {
    data: string;
    laboratorio: string;
    email: string;
}
function App() {
    // Defina os valores para laboratorios e onAddReserva conforme necessário
    const laboratorios: { id: string; nome: string; qtdComputadores: string; }[] = []; // Substitua isso com os valores reais
    const onAddReserva = (novaReserva: Reserva) => {
        // Lógica para adicionar uma nova reserva
        console.log('Adicionando reserva:', novaReserva);
    };

    return (
        <Router>
            <div className={"container-fluid flex items-center w-full px-0 md:px-5"}>
                <Menu />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/laboratorios" element={<Laboratorios />} />
                    {/* Passe os valores reais para laboratorios e onAddReserva */}
                    <Route path="/reservas" element={<Reservas laboratorios={laboratorios} onAddReserva={onAddReserva} />} />
                    <Route path="/agendamentos" element={<Agendamentos />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
