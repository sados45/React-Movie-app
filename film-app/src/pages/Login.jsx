import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
 import AuthContext from '../context/AuthContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../auth/firebase-config';

export default function Login() {

    const navigate = useNavigate();
    const { handleLogin, loginError } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [alertClass, setAlertClass] = useState('alert alert-danger d-none')
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let user = await signInWithEmailAndPassword(auth, email, password);
            // console.log(user);
            navigate('/');
        } catch (err) {
            alert(err)
        }
    }
    return (
        <div className='login'>
            <div>
                <img src='https://picsum.photos/800/800' alt='photo' /> 
                {/*  resim lorem pisum web sayfasindan adres koyaladik.  */}
            </div>
            <div className='login-form'>
                <div className={loginError ? 'alert alert-danger' : 'alert alert-danger d-none'} role="alert">
                    Please check your credentials!!!
                </div>
                <h1 className='form-title display-3'>Login</h1>
                <form id='login' onSubmit={(e) => handleSubmit(e)}>
                    <div className='mb-4'>
                        <label for='email' className='form-label display-4'>
                            Email
                        </label>
                        <input  //login de email kismi. 
                            type='email'
                            className='form-control'
                            id='email'
                            placeholder='Enter your email adress...'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required //please fill out this field otomatik bosluk icin cikiyor.
                        />
                    </div>
                    <div className='mt-3'>   
                    {/* login de password kismi */}
                        <label for='password' className='form-label display-4'>
                            Password
                        </label>
                        <input
                            type='password'
                            className='form-control'
                            id='password'
                            placeholder='Enter your password...'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                    </div>
                    <input
                        type='submit' //login yazan buton. mavi yazili. 
                        className='btn btn-primary form-control'
                        value='Login'
                    />
                </form>
            </div>
        </div>
    );
}
// Footer
