import styles from './Livros.module.css';

export default function Livro(){
    return(
        <section className={styles.livros_container}>
            <h1>Começe a pedir seus <span>Livros</span> aqui.</h1>
            <p>Começe a gerenciar seus livros agora mesmo!</p>
        </section>
    )
}