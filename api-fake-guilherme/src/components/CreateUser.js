import { useState } from "react";
import axios from "axios";

export default function CreateUser(){
    const[name, setName] = useState();
    const[job, setJob] = useState();

    function createUser(){
        let user = JSON.stringify({name:name, job:job})
        alert(user)

        axios.post('https://regres.in/api/users')
            .then((response) => {
                console.log(response)
                alert(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return(
        <div className="App">
            <form onSubmit={createUser} className="form">
            <h1>FORMULÁRIO DE CADÁSTRO</h1>

            <input type="text"
            placeholder="Digite seu Nome aqui"
            required
            value={name}
            onChange={(event) => {setName(event.target.value)}}/>

            <input type="text"
            placeholder="Digite seu trabalho aqui"
            required
            value={job}
            onChange={(event) => {setJob(event.target.value)}}/>

            <input type="submit"
            required />

            </form>
        </div>
    )
}