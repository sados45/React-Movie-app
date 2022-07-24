import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../auth/firebase-config';


// const navigate = useNavigate();
const AuthContext = React.createContext();

export const AuthContextProvider = (props) => {

const [currentUser, setCurrentUser] = useState();

useEffect (() => { 

    onAuthStateChanged (auth,(user) => {

        setCurrentUser (user);


    } )
}, [])
    // const [credentials, setCredentials] = useState({

    //     firstName:'',
    //     lastName:'',
    //     email: '',
    //     password: ''

    // })

        // const [loginError, setLoginError] = useState(false);

        // const [login, setLogin] = useState(false);
    //     const handleCredentials= (firstName, lastName, email, password) =>{

    //         setCredentials({
               

    //         })
    //     }

    //     const handleLogin =(email, password) =>{
    //         if (credentials.email==email&&credentials.password==password){
    //             setLogin(true);
    //             setLoginError(false);
    //             navigate('/');

    //         }else{

    //             setLoginError(true)
    //         }

    //     }

    //     const handleLogOut = () => {

    //         setCredentials({

    //             firstName: firstName,
    //             lastName: lastName,
    //             email: email,
    //             password: password

    //         })
    //         setLogin (false);
    //     }

    // const [currentUser, setCurrentUser] = useState();
    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         setCurrentUser(user);
    //     })
    // }, [])

    return (
        <AuthContext.Provider value={{

            currentUser
            // credentials: credentials, 
            // handleCredentials: handleCredentials,
            // handleLogin: handleLogin,
            // loginError: loginError,
            // login: login,
            // handleLogOut: handleLogOut
            }}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContext;