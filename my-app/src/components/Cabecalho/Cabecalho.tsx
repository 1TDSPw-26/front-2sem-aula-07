import { Link } from "react-router"

export default function Cabecalho(){

    return(
        <header className="bg-amber-900">
            <h1>Meu boiler plate</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/produtos">Produtos</Link></li>
                    <li><Link to="churros">Churros</Link></li>
                </ul>
            </nav>
        </header>
    );
}