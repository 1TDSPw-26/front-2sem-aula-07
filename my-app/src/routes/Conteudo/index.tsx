import churrosLindos from "../../img/churros.jpg"

export default function Conteudo(){

    return(
        <main>
            <h2>Conteúdo Aleatório </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem harum rerum ducimus! Illo, iusto! Ratione in iste vero tempora corrupti odio magnam enim quidem ex. Ab fuga aspernatur eveniet impedit.</p>
            <figure>
                <img className="w-50 mx-auto border-2 border-amber-500" src={churrosLindos} alt="Churros Maravilhoso" />
                <figcaption>Churros maravilhindos</figcaption>
            </figure>
        </main>


    );


}