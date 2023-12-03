import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-success p-2 --bs-bg-opacity: .5;">
            <div className={"container-fluid"}>
                <a className={"navbar-brand"} href={"/"}>
                    <h1>Table</h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={"collapse navbar-collapse"} id={"navbarSupportedContent"}>
                    <ul className={"navbar-nav me-auto mb-2 mb-lg-0"}>
                        <li className={"nav-item"}>
                            <Link to={"/"} aria-current={"page"} className={"nav-link hover:bg-gray-600 px-2 py-1 rounded"} aria-description="page">
                                Home
                            </Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link to="/laboratorios" className="nav-link hover:bg-gray-600 px-2 py-1 rounded">
                                Laboratórios
                            </Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link to="/reservas" className="nav-link hover:bg-gray-600 px-2 py-1 rounded">
                                Reservas
                            </Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link to="/agendamentos" className="nav-link hover:bg-gray-600 px-2 py-1 rounded">
                                Agendamentos
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Menu;
