import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Read = () => {
    const [Id, setId] = useState("");
    const navigate = useNavigate();

    const ReadNav = () => {
        navigate(`/readProcess/${Id}`);
    }

    return (
        <div>
            <form>
                <label>Id:</label>
                <br />
                <input type="text" name="id" onChange={(e) => setId(e.target.value)} />
                <br />
                <button type="button" onClick={ReadNav}>Submit</button>
            </form>
        </div>
    );
}

export default Read;
