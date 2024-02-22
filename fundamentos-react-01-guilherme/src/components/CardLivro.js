import '../App.css';

function CardLivro(titulo, autor, img, descrincao) {
  return (
    <>
        <div className="cardBook">
            <h3>{titulo}</h3>
            <p>{autor}</p>
            <img src={img} alt='capa do livro' className="miniatura"></img>
            <p className="resumoLivro">{descrincao}</p>
        </div>
    </>
  );
}

export default CardLivro;