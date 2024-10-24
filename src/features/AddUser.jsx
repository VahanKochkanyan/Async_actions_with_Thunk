import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addUser } from "./users/users.api";

export const AddUser = () => {

    const [name, setName] = useState("");

    const [salary, setSalary] = useState('')

    const [error, setError] = useState("");

    const dispatch = useDispatch();

    const navigate = useNavigate();


    const handleSubmit = async(e) => {
        e.preventDefault();
        if(!name.trim() || !salary.trim()) {
            setError("All fields must be filled")
            return;
        }

        setError("")
        await dispatch(addUser({ name, salary }))
        .unwrap()
        .then(() => {
            navigate("/");
        })
    }

    return <>
            <h2>Add</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            placeholder='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            placeholder='Salary'
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                        />
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button type="submit">Add</button>
                </form>
      </>
    
}