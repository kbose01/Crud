import { useNavigate, useParams } from "react-router-dom"
import { DeleteStudDetailsById } from "../../Services/StudentService";

const Delete=()=>
{
    const {id}=useParams();
    const nav=useNavigate();
    const DeleteProcess=()=>
    {
      DeleteStudDetailsById(id).then((responce)=>{
        console.log(responce.data);
        nav("/success");
    }).catch((error)=>{
        console.log(error);
        nav("/error");
    })
    }
return(
    <center>
        <h1>"do you really want to execute"</h1>
        <span><a href="#" onClick={DeleteProcess}>Confirm</a></span>
    </center>
)
}
export default Delete;