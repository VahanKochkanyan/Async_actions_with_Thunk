import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "./users.api"
import { Link } from "react-router-dom"

export const Users = () => {

    const users = useSelector(state => state.accounts)

    const status = useSelector(state => state.status)

    const dispatch = useDispatch()

    
    useEffect(() => {
        dispatch(getUsers())
    },[])
    

    return <>
        <h3>Users: {users.length}</h3>
        <p>Status: {status}</p>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.salary}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <Link to="/add">Add User</Link>
    </>
}