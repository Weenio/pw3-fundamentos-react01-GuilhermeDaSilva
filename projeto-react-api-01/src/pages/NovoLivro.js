import { useEffect, useState } from "react";

import Input from '../components/form/Input.js';
import Select from '../components/form/Select.js';

import styles from './NovoLivro.module.css';

export default function NovoLivro(){

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {

        fetch(
            'http://localhost:5000/categories',
            {
                method: 'GET',
                headers:{
                    'Content-Type' : 'application/json'
                }
        }).then(
            (resp) => resp.json()
        ).then(
            (data) => {
                setCategorias(data)
                console.log(data)
            }
        ).catch(
            (err) => {
                console.log(err)
            }
        )
    }, [])

    return(
        <section className={styles.livrosCad_container}>
            <h1>Cadastro de <span>Livros</span>.</h1>

            <p>
                <Input
                    type="text"
                    text="Nome do Livro"
                    name="Nome do Livro"
                    placeholder="Digite aqui o nome do livro"
                    value=""
                />
            </p>

            <p>
                <Input
                    type="text"
                    text="Nome do Livro"
                    name="Nome do Livro"
                    placeholder="Digite aqui o nome do livro"
                    value=""
                />
            </p>

            <p>
                <Input
                    type="text"
                    text="Nome do Livro"
                    name="Nome do Livro"
                    placeholder="Digite aqui o nome do livro"
                    value=""
                />
            </p>

            <p>
                <Select 
                    name="catecoriaID"
                    text="Selecione a categoria do livro"
                    options={categorias}
                />
            </p>
        </section>
    )
}