
import styles from './BookCard.module.css';

export default function Cardbook({id, livro, autor, category}) {

    return(
        <div className={styles.book_card}>
            <h4>{livro}</h4>
            <p>Autor: {autor}</p>
            <p className={styles.category_text}><spam></spam>Categoria: {category}</p>
        </div>
    )
}