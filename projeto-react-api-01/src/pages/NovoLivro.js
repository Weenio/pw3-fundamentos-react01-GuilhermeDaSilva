import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from '../components/form/Input.js';
import Select from '../components/form/Select.js';

import styles from './NovoLivro.module.css';

export default function NovoLivro(){

    const [categorias, setCategorias] = useState([]);
    const [livro, setLivro] = useState({})
    const navigate = useNavigate();

    // useEffect(() => {

    //     fetch(
    //         'http://localhost:5000/categories',
    //         {
    //             method: 'GET',
    //             headers:{
    //                 'Content-Type' : 'application/json'
    //             }
    //     }).then(
    //         (resp) => resp.json()
    //     ).then(
    //         (data) => {
    //             setCategorias(data)
    //             console.log(data)
    //         }
    //     ).catch(
    //         (err) => {
    //             console.log(err)
    //         }
    //     )
    // }, [])

    function handlerChangeBook(event){
        setLivro({...livro, [event.target.name] : event.target.value});
        // console.log(livro)
    }

    function handlerChangeCategory(event){

        setLivro({...livro, category : {
            id: event.target.name,
            category: event.target.options[event.target.selectedIndex].text
        }});
    }

    function CreateLivro(livro){

        console.log('CREATE:' + JSON.stringify(livro));

        fetch(
            'http://localhost:5000/inserirLivro',
            {
                method:'POST',
                mode:'cors',
                headers:{
                    'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Headers':'*'
                },
            body:JSON.stringify(livro)
        }).then(
            (resp) => resp.json()
        ).then(
            (data) => {
                console.log(data)
                navigate('/livros', {state:'Livro cadastrado!'})
            }
        ).catch(
            (err) => {
                console.log(err)
            }
        )

    }

    function submit(event){
        event.preventDefault();
        CreateLivro(livro);
    }

    console.log(livro)

    return(
        <section className={styles.livrosCad_container}>
            <h1>Cadastro de <span>Livros</span>.</h1>

            <form onSubmit={submit}>
                <p>
                    <Input
                        type="text"
                        text="Nome do Livro"
                        name="nome_livro"
                        id="nome_livro"
                        placeholder="Digite aqui o nome do livro"
                        handlerOnChange={handlerChangeBook}
                    />
                </p>

                <p>
                    <Input
                        type="text"
                        text="Nome do Autor"
                        name="autor_livro"
                        id="autor_livro"
                        placeholder="Digite aqui o nome do Autor"
                        handlerOnChange={handlerChangeBook}
                    />
                </p>

                <p>
                    <Input
                        type="text"
                        text="Descrição"
                        name="descricao_livro"
                        id="descricao_livro"
                        placeholder="Digite aqui a Descrição"
                        handlerOnChange={handlerChangeBook}
                    />
                </p>

                <p>
                    <Select 
                        name="catecoriaID"
                        text="Selecione a categoria do livro"
                        options={categorias}
                        handlerOnChange={handlerChangeCategory}
                    />
                </p>

                <p>
                    <Input
                        type="submit"
                        value="Cadastrar"
                    />
                </p>
            </form>
        </section>
    )
}