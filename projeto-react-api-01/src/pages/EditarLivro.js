import styles from './EditarLivro.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Input from '../components/form/Input';
import Select from '../components/form/Select';

export default function EditarLivro(params){

    const {id} = useParams()
    console.log(id)

    const[livro, setLivro] = useState({})
    const [categorias, setCategorias] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        fetch(
            `http://localhost:5000/listagemLivro/${id}`,
            {
                method : 'GET',
                mode:'cors',
                headers: {
                    'content-type':'application/json',
                    'Acess-Control-Allow-Origin': '*',
                    'Acess-Control-Allow-Headers': '*'
            },
        })
        .then((resp) => resp.json())
        .then((data) => {setLivro(data)})
        .catch((err) => {console.log(err)})

        // fetch(
        //     'http://localhost:5000/categories',
        //     {
        //         method: 'GET',
        //         headers:{
        //             'Content-Type' : 'application/json'
        //         }
        // })
        // .then((resp) => resp.json())
        // .then((data) => {
        //     setCategorias(data)
        //     console.log(data)
        // })
        // .catch((err) => {
        //     console.log(err)
        // })
    }, [])
    
    function handlerChangeLivro(event){

        setLivro({...livro, [event.target.name] : [event.target.value]});

    }

    // function handlerChangeCategory(event){

    //     setLivro({...livro, category : {
    //         id: event.target.name,
    //         category: event.target.options[event.target.selectedIndex].text
    //     }});
    // }

    function editarLivro(livro){
        fetch(`http://localhost:5000/alterarLivro/`,
        {
            method:'PUT',
            mode:'cors',
            headers:{
                'Content-Type' : 'application/json',
                'Acess-Control-Allow-Origin': '*',
                'Acess-Control-Allow-Headers': '*'
            }
        ,
        body: JSON.stringify(livro)
    })
        .then(
            (resp)=>resp.json()
        )
        .then(
            (data) => {
                console.log(data)
                navigate('/book',{state:"Livro editado com sucesso "})
            })

        .catch(
            (error) => {
                console.log(error)
            }
        )
    }

    function handlerSubmit(e){
        e.preventDefault();
        editarLivro(livro)
        
    }

    return(
        <div className={styles.editarLivro_container}>
            <h1>EDITAR LIVROOO</h1>

            <form onSubmit={handlerSubmit}>
            <Input 
                    type="text"
                    id="nome_livro"
                    name="nome_livro"
                    placeholder="Titulo do Livro:"
                    text=""
                    value={livro.nome_livro}
                    handlerOnChange={handlerChangeLivro}
                />

                <Input 
                    type="text"
                    name="autor_livro"
                    id="autor_livro"
                    placeholder="digite o titulo do autor"
                    text=""
                    value={livro.autor_livro}                    
                    handlerOnChange={handlerChangeLivro}
                />

                <Input 
                    type="text"
                    name="descricao_livro"
                    id="descricao_livro"
                    placeholder="digite a descricao do livro"
                    text="digite a descricao do livro"
                    value={livro.descricao_livro}
                    handlerOnChange={handlerChangeLivro}
                /> 

                {/* 
                <Select
                    handlerOnChange={handlerChangerCategory}
                    name="categoria_id"
                    text="selecione a categoria do livro"
                    options={categories}
                    // value={book.category.category}
                /> 
                */}

                <input type='submit' value="Editar Livro" />
            </form>
        </div>
    )
}