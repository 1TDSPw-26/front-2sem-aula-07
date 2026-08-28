import churrosLindos from "../../img/churros.jpg";


export default function Conteudo() {
  return (
    <main>
        <h2>Conteúdo Aleatório</h2>        
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur voluptates rem, blanditiis eius doloremque a vitae provident labore eligendi nobis magnam perspiciatis minima cumque rerum aliquam soluta voluptate. Aspernatur, provident.</p>
        <figure>
          <img className="w-50 mx-auto border-2 rounded-2xl border-amber-950" src={churrosLindos} alt="churros maravilhindo" />
          <figcaption>Churros maravilhindos</figcaption>
        </figure>
    </main>
  )
}

