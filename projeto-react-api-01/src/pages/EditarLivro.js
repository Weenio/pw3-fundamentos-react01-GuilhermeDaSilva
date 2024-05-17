import styles from './EditarLivro.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Input from '../components/form/Input';
import Select from '../components/form/Select';

export default function EditarLivro(params){

    const {id} = useParams()
    console.log(id)

    const[livro, setLivro] = useState({})
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        fetch(
            `http://localhost:5000/books/${id}`,
            {
                method: 'GET',
                headers:{
                    'Content-Type' : 'application/json'
                },
        })
        .then((resp) => resp.json())
        .then((data) => {setLivro(data)})
        .catch((err) => {console.log(err)})

        fetch(
            'http://localhost:5000/categories',
            {
                method: 'GET',
                headers:{
                    'Content-Type' : 'application/json'
                }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategorias(data)
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    function handlerChangeBook(event){

        setLivro({...livro, [event.target.name] : [event.target.value]});

    }

    function handlerChangeCategory(event){

        setLivro({...livro, category : {
            id: event.target.name,
            category: event.target.options[event.target.selectedIndex].text
        }});
    }

    return(
        <div className={styles.editarLivro_container}>
            <h1>EDITAR LIVROOO</h1>

            <form>
                <p>
                    <Input
                        type="text"
                        text="Nome do Livro"
                        name="livroNome"
                        placeholder="Digite aqui o nome do livro"
                        value={livro.livroNome}
                        handlerOnChange={handlerChangeBook}
                    />
                </p>

                <p>
                    <Input
                        type="text"
                        text="Nome do Autor"
                        name="autorNome"
                        placeholder="Digite aqui o nome do Autor"
                        value={livro.autorNome}
                        handlerOnChange={handlerChangeBook}
                    />
                </p>

                <p>
                    <Input
                        type="text"
                        text="Descrição"
                        name="descricao"
                        placeholder="Digite aqui a Descrição"
                        value={livro.descricao}
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
                        //type="submit"
                        //value="Cadastrar"
                    />
                </p>
            </form>
        </div>
    )
}