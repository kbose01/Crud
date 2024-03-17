import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getStudDetailsById } from "../Services/StudentService"
const ReadProcess=()=>
{
    const[Id,setId]=useState("");
    const[Name,setName]=useState("");
    const[Age,setAge]=useState("");
    const[Gender,setGender]=useState("");

    const {id}=useParams();
    const nav=useNavigate();
    useEffect(()=>
    {
        getStudDetailsById(id).then((responce)=>{
            console.log(responce.data);
            setId(responce.data.id);
            setGender(responce.data.gender);
            setAge(responce.data.age);
            setName(responce.data.name);
        }).catch((error)=>{
            console.log(error);
            nav("/error");
        })
    })

return(
    <>
    <h1>{id}</h1>
    <table className="table table-bordered">
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>GENDER</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{Id}</td>
                <td>{Name}</td>
                <td>{Age}</td>
                <td>{Gender}</td>
                {/* <td><button onClick={()=>nav(`/update/${Id}`)}>Edit</button></td>
                <td><button onClick={()=>nav(`/delete/${Id}`)}>Delete</button></td> */}
            </tr>
        </tbody>
    </table>
    </>
)
}
export default ReadProcess;