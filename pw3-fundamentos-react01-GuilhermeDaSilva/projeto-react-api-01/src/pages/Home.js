import styles from './Home.module.css';

export default function Home(){
    return(
        <section className={styles.home_container}>
            <h1>Bem ao web APP <span>Libre</span></h1>
            <p>Começe a gerenciar seus livros agora mesmo!</p>
        </section>
    )
}