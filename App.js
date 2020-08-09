import React, { useContext } from 'react'
import Header from './Header'
import Login from './Login'
import { AuthContext, AuthProvider } from './AuthContext'


function App() {

    let authcontext = useContext(AuthContext)
    return (
        <div className="container">
            <Header />
            {authcontext.Auth.username ? ' Welcom' : <Login />}
        </div>
    )
}



export default function AppWithStore() {
    return (
        <AuthProvider>
            <App />
        </AuthProvider>
    )
}
