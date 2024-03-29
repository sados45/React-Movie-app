import React, { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../auth/firebase-config';
import { useNavigate } from 'react-router-dom';

export default function Register() {

    const navigate = useNavigate();
    const { credentials, handleCredentials } = useContext(AuthContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alertClass, setAlertClass] = useState('alert alert-success d-none')

    const handleSubmit = async (e) => {
        e.preventDefault();
        let displayName = firstName + ' ' + lastName;
        try {
            let user = await createUserWithEmailAndPassword(auth, email, password);
            // console.log(user);
            await updateProfile(auth.currentUser, { displayName: displayName })
            // console.log(auth.currentUser)
            navigate('/');
        } catch (err) {
            alert(err);
        }

    }

    return (
        <div className="register">
            <div className="form-image">
                <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
            </div>
            <div className="register-form">
                <div className={alertClass} role="alert">
                    You have registered successfully!!!
                </div>
                <h1 className="form-title display-3">Register</h1>
                <form id="register" onSubmit={(e) => handleSubmit(e)}>
                    <div className="mb-3">
                        <label for="first-name" className="form-label display-4">First Name</label>
                        <input type="text" className="form-control" id="first-name" placeholder="Enter your first name..."
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label for="last-name" className="form-label display-4">Last Name</label>
                        <input type="text" className="form-control" id="last-name" placeholder="Enter your last name..."
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label display-4">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email address..."
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label display-4">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter your password..."
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                    </div>
                    <input type="submit" className="btn btn-primary form-control" value="Register"
                    />
                </form>
            </div>
        </div>
    );
}