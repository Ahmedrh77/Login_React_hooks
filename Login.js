import React,{useRef,useState,useContext} from 'react'
import {AuthContext} from './AuthContext'




export default function Login() {

    let authcontext= useContext(AuthContext)

    //alertState
    const [StyleAlert,setAlert]=useState({
        Style:'',
        Alert:''
    })

    //define the state for onChange
    const [username,setUser]=useState('')
    const [password,setPass]=useState('')
    //define our Ref
    const userRef=useRef()
    const passRef=useRef()

    //login function
    function login(e){

        e.preventDefault()
        let user=userRef.current.value
        let pass=passRef.current.value

        //send http request
        if(pass==='123') {
            let token='abc'
            localStorage.setItem('token',token)
            localStorage.setItem('username',user)

            authcontext.setAuth({username:user})
           
        }  else {
            setAlert({
                Style:'alert alert-danger',
                Alert:"wrong password"
            })
        }
    }

    return (
        <div className="container">
             <form>
                 <h2>Login</h2>
                 <br/>
                 <input ref={userRef} onChange={(e)=>setUser(e.target.value)} value={username} className="form-control" type="text" placeholder="username"/>
                 <br/>
                 <input ref={passRef} onChange={(e)=>setPass(e.target.value)} value={password} className="form-control" type="password" placeholder="password"/>
                 <br/>
                 <button onClick={login} className="btn btn-primary">Login</button>
             </form>
             <br/>
             <div className={StyleAlert.Style}>
                 {StyleAlert.Alert}
             </div>
        </div>
    )
}
