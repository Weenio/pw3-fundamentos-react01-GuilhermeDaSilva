import { Link } from 'react-router-dom';
import styles from './BookCard.module.css';

export default function Cardbook({id, livro, autor, category, handlerRemove}) {

    const remove = (e) =>{
        e.preventDefault();
        handlerRemove(id)
    }
    return(
        <div className={styles.book_card}>
            <h4>{livro}</h4>
            <p>Autor: {autor}</p>
            <p className={styles.category_text}><spam></spam>{category}</p>

            <div className={styles.book_card_actions}>
                <Link to={`/editarLivro/${id}`}>
                    Editar
                </Link>
                <button onClick={remove}>
                    Excluir
                </button>
            </div>
        </div>
    )
}