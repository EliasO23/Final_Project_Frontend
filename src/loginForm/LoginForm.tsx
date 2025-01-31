
import { useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.css'
import logo from '../assets/img/Kodigo_Music.png'
import { useState } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);

                localStorage.setItem('token', data.token);
                navigate('/');

            } else {
                Swal.fire({
                    toast: true,
                    position: 'top',
                    icon: 'error',
                    iconColor: 'white',
                    title: 'Oops... Email or Password incorrect',
                    text: 'Something went wrong!',
                    showConfirmButton: false,
                    timer: 3000,
                    background: '#ff0000',
                    timerProgressBar: true,
                    color: 'white',
                })
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                toast: true,
                position: 'top',
                icon: 'error',
                iconColor: 'red',
                title: 'Oops... Error when logging in',
                text: 'Something went wrong!',
                showConfirmButton: false,
                timer: 3000,
                background: 'gray',
                timerProgressBar: true,
                color: 'white',
            });
        }
    }

    return (
        <>

            <div className={styles.loginContainer}>

                <section className={styles.headerLogo}>
                    <img src={logo} alt="Logo KodigoMusic" />
                    <h2>Kodigo Music</h2>
                    <p>You still don't have an account? <Link to='/register' >Register now</Link></p>
                </section>

                <form onSubmit={handleLogin}>

                    {/* Correo electrónico */}
                    <div className={styles.formGroup}>
                        <label>Email:</label>
                        <input
                            type="email"
                            placeholder='Enter your email'
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Contraseña */}
                    <div className={styles.formGroup}>
                        <label >Password:</label>
                        <input
                            type="password"
                            placeholder='Enter your password'
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.btn}>
                        <button type="submit">Log In</button>

                    </div>
                </form>
            </div>

        </>
    );
};

export default LoginForm;
