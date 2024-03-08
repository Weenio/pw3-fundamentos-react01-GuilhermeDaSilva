import { useEffect, useState } from "react"
import axios from "axios";
import '../App.css';

function Users(){
    const [users,setUsers] = useState([]);
    
    useEffect(()=>{
        axios.get(
        'https://reqres.in/api/users?page=2'
        )
        .then((response)=>{
            setUsers(response.data.data)
            console.log(response)
        }
        )

        .catch((error)=>{
            console.log(error)
        })
    },[]);

    return(
        <div>
            {
                users.map((user)=>(
                        <div className='cardUser'>
                            <img src={user.avatar} alt='Imagem'></img>
                            <h3> {user.first_name} </h3>
                            <p>{user.email}</p>
                        </div>
                    )
                )
            }
        </div>
    );  
}

export default Users