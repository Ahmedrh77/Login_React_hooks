import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'






export default function Header() {
    let authcontext = useContext(AuthContext)

    function logout() {
        localStorage.removeItem('username')
        localStorage.removeItem('token')

        authcontext.setAuth({
            username: ''
        })


    }
    return (
        <div className="container">
            <nav className="navbar navbar-light  bg-light mt-2">
                <h2 className="navbar navbar-brand">React</h2>
                {authcontext.Auth.username ? <button onClick={logout} className="btn btn-danger">Logout</button> :
                    <div>you need to login</div>}
            </nav>
        </div>
    )
}
