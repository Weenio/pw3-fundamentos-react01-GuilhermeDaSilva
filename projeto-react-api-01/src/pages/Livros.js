import { useState, useEffect } from 'react';
import styles from './Livros.module.css';
import Message from '../components/message/Message';
import { useLocation } from 'react-router-dom';

import Container from '../components/Container';
import Cardbook from '../components/cardbook/Cardbook';

export default function Livro(){

    const[livros, setLivros] = useState([]);
    const{alert, setAlert} = useState('');

    useEffect(() => {
        fetch(
            'http://localhost:5000/books',
            {
                method: 'GET',
                headers:{
                    'Content-Type' : 'application/json'
                },
        })
        .then((resp) => resp.json())
        .then((data) => {setLivros(data)})
        .catch((err) => {console.log(err)})
    }, [])

    function removeBooks(id){
        fetch(
            `http://localhost:5000/books/${id}`,
            {
                method: 'DELETE',
                headers:{
                    'Content-Type' : 'application/json'
                },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setLivros(livros.filter((book_data) => book_data.id != id))
        setAlert("LIVRO EXCLUIDO COM SUCESSO!!")})
        .catch((err) => {console.log(err)})
    }

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
                        msg={alert}
                        type="success"
                    />
                )
            }

            {
                livros.map((livro) => (
                    <Cardbook
                        id={livro.id}
                        livro={livro.livroNome}
                        autor={livro.autorNome}
                        category={livro.category.category}
                        key={livro.id}
                        handlerRemove={removeBooks}/>
                ))
            }
        </section>
    )
}