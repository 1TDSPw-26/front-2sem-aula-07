import { Link } from "react-router";

export default function Cabecalho() {

    return (
        <header className="bg-amber-900">
            <h1>Meu Boiler Plate</h1>
            <nav>
                <ul>
                    <li><Link  to="/editar-produtos/:id">Editar Produtos</Link></li>
                    <li><Link  to="/produtos">Produtos</Link></li>
                    <li><Link  to="/conteudo">Churros</Link></li>
                </ul>
            </nav>
        </header>
    );
}