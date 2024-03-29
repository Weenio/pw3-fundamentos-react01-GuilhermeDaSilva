import Input from '../components/form/Input.js';
import styles from './NovoLivro.module.css';

export default function NovoLivro(){
    return(
        <section className={styles.livrosCad_container}>
            <h1>Cadastro de <span>Livros</span>.</h1>

            <Input
                type="text"
                text="Nome do Livro"
                name="Nome do Livro"
                placeholder="Digite aqui o nome do livro"
                OnChange=''
                value=""
            />

            {/* <form>
                <p>
                    <input type="text" placeholder='Nome do livro'/>
                </p>

                <p>
                    <input type="text" placeholder='Nome do autor'/>
                </p>

                <p>
                    <input type="text" placeholder='Descrição'/>
                </p>

                <p>
                    <input type="submit" value='Cadastre o livro'/>
                </p>
            </form> */}
        </section>
    )
}