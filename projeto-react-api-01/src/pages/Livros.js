import styles from './Livros.module.css';
import Message from '../components/message/Message';
import { useLocation } from 'react-router-dom';

export default function Livro(){

    const location = useLocation();
    let message = '';

    if(location.state){
        message = location.state;
    }

    console.log('LOCATION STATE : ' + location.state);

    return(
        <section className={styles.livros_container}>
            <h1>Começe a pedir seus <span>Livros</span> aqui.</h1>
            <p>Começe a gerenciar seus livros agora mesmo!</p>

            {
                message && (
                    <Message
                        msg="TESTE DE MENSAGEM"
                        type="error"
                    />
                )
            }
        </section>
    )
}