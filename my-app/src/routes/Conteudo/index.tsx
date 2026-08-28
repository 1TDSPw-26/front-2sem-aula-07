import churrosLindos from "../../img/churros.jpg"

export default function Conteudo(){

    return(
        <main>
            <h2>Conteúdo Aleatório</h2> 
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, vel. Quidem ullam reprehenderit debitis rerum corrupti laborum sint eos veniam nemo. Eaque ratione reiciendis laborum iste dolorum illum esse omnis!</p>
            <figure>
                <img className="w-50 mx-auto border-2 rounded-2xl border-amber-950" src={churrosLindos} alt="churros maravilindos"></img>
                <figcaption>Churros maravilindos</figcaption>
            </figure>
        </main>
    );
}