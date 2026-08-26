export default function Cabecalho(){

    return(
        <header>
            <h1>Meu Boiler Plate</h1>
            <nav>
                <ul>
                    <li><Link to="/editar-produtos">Editar Produtos</Link></li>
                    <li><Link to="/produtos">Produdos</Link></li>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>
        </header>
    );
}