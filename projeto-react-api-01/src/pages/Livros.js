import { useState, useEffect } from 'react';
import styles from './Livros.module.css';
import Message from '../components/message/Message';
import { useLocation } from 'react-router-dom';

import Container from '../components/Container';
import Cardbook from '../components/cardbook/Cardbook';

export default function Livro(){

    const[livros, setLivros] = useState([]);
    const{alert, setAlert} = useState("");

    useEffect(() => {
        fetch(
            'http://localhost:5000/listagemLivros',
            {
                method: 'GET',
                mode: 'cors',
                headers:{
                    'Content-Type' : 'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Headers':'**'
                },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setLivros(data.data)
            setAlert("Livro cadastrado com sucesso!")})
        .catch((err) => {console.log(err)})
    }, [])

    function removeBooks(id){
        fetch(
            `http://localhost:5000/excluirLivro/${id}`,
            {
                method: 'DELETE',
                mode: 'cors',
                headers:{
                    'Content-Type' : 'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Headers':'**'
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
                        id={livro.cod_livro}
                        livro={livro.nome_livro}
                        autor={livro.autor_livro}
                        // category={livro.category.category}
                        key={livro.cod_livro}
                        handlerRemove={removeBooks}/>
                ))
            }
        </section>
    )
}