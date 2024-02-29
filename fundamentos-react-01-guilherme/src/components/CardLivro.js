import '../App.css';

function CardLivro({dadosJSON}) {
  return (
    <>
        {dadosJSON.map((livro) => (
          <div className="cardBook">
            <h3>{livro.titulo}</h3>
            <p>{livro.autor}</p>
            <img src={livro.imagem} alt='capa do livro' className="miniatura"></img>
            <p className="resumoLivro">
              {livro.descricao}
            </p>
          </div>
        ))}
    </>
  );
}

export default CardLivro;