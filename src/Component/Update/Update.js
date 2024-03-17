import { useEffect, useState } from "react"
import {useNavigate, useParams} from "react-router-dom"

import { UpdateStudDetailsById, getStudDetailsById } from "../../Services/StudentService";
const Update=()=>
{
    const[Name,setName]=useState("");
    const[Age,setAge]=useState("");
    const[Gender,setGender]=useState("");

    const{id}=useParams();

    const nav=useNavigate();

    const UpdateProcess=(e)=>
    {
        e.preventDefault();
        const student={name:Name,age:Age,gender:Gender};
        
        UpdateStudDetailsById(id,student).then((response)=>
        {
            console.log(response.data);
            nav("/success");
        }).catch(error=>{
            console.error(error);
            nav("/error");
        })
    }
useEffect(()=>
{
    console.log("update Running!!!!")
    getStudDetailsById(id).then((response)=>
    {
        console.log(response.data);
        setName(response.data.name);
        setAge(response.data.age);
        setGender(response.data.gender);
    }).catch(error=>{
        console.error(error);
        nav("/error");
    })
},[])
return(
    <div>
        <form>
            <label>Name:</label>
            <br></br>
            <input type="text" name="name" value={Name} onChange={(e)=>setName(e.target.value)}/>
            <br></br>
            <br></br>
            <label>Age:</label>
            <br></br>
            <input type="text" name="age" value={Age} onChange={(e)=>setAge(e.target.value)}/>
            <br></br>
            <br></br>
            <label>Gender:</label>
            <br></br>
            <input type="text" name="gender" value={Gender} onChange={(e)=>setGender(e.target.value)}/>
            <br></br>
            <br></br>
            <button onClick={UpdateProcess}>Submit</button>
            
        </form>
    </div>
)
}
export default Update;