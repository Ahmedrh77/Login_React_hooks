
import React, { useState, useEffect } from 'react'


export const AuthContext = React.createContext()



export function AuthProvider(props) {


    const [Auth, setAuth] = useState({
        username: ""
    })

    useEffect(() => {
        let user = localStorage.getItem('username')
        if (user) {
            setAuth({
                username: user
            })
        }
    }, [])
    return (
        <AuthContext.Provider value={{ Auth, setAuth }}>
            {props.children}
        </AuthContext.Provider>
    )
}







































// import React,{useState,useContext,useEffect} from 'react'
//  export const AuthContext=React.createContext()


// export  function AuthProvider(Props) {
//     const [auth,setAuth]=useState({

//     })  
//     useEffect(()=>{
//         const username=localStorage.getItem('username')
//         const token=localStorage.getItem('token')
//         if(username) {
//             setAuth({username,token})
//         }

//     },[])
//     return (
//         <AuthContext.Provider value={{auth,setAuth}}>
//             {Props.children}
//         </AuthContext.Provider>
//     )
// }
