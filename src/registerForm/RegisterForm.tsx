import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from './RegisterForm.module.css'
import logo from '../assets/img/Kodigo_Music.png'
import { FormData } from '../shared/interfaces/RegisterForm.interfaces';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const navigate = useNavigate();

    // Función que se ejecuta cuando el formulario es válido
    const onSubmit = async (data: FormData) => {
        console.log(data);

        const userData = {
            name: data.name,
            email: data.email,
            password: data.password
        };

        console.log(userData);

        try {
            const response = await fetch('http://localhost:8000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            });
            const data = await response.json();
            console.log(data);

            if (response.ok) {

                console.log('Usuario registrado correctamente');
                Swal.fire({
                    toast: true,
                    position: 'top',
                    icon: 'success',
                    iconColor: 'white',
                    title: 'User registered successfully',
                    text: 'Something went wrong!',
                    showConfirmButton: false,
                    timer: 3000,
                    background: 'green',
                    timerProgressBar: true,
                    color: 'white',
                });

                // Redirigir al login
                navigate('/login');

            } else {
                Swal.fire({
                    toast: true,
                    position: 'top',
                    icon: 'error',
                    iconColor: 'white',
                    title: 'Error',
                    text: 'Something went wrong!',
                    showConfirmButton: false,
                    timer: 3000,
                    background: '#ff0000',
                    timerProgressBar: true,
                    color: 'white',
                });
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                toast: true,
                position: 'top',
                icon: 'error',
                iconColor: 'red',
                title: 'Oops... Error when register',
                text: 'Something went wrong!',
                showConfirmButton: false,
                timer: 3000,
                background: 'gray',
                timerProgressBar: true,
                color: 'white',
            });
        }

    };

    return (
        <>

            <div className={styles.loginContainer}>
                {/* <h1>Register</h1> */}

                <section className={styles.headerLogo}>
                    <img src={logo} alt="Logo KodigoMusic" />
                    <h2>Kodigo Music</h2>
                    <p>Do you already have an account? <Link to='/login' >Log in</Link></p>
                </section>

                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* Nombre de usuario */}
                    <div className={styles.formGroup}>
                        <label>Name:</label>
                        <input
                            type="text"
                            placeholder='Enter your name'
                            {...register('name', {
                                required: true,
                            })}
                        />
                        {
                            errors.name?.type === "required" && <p className={styles.errorMessage}>Username is required</p>
                        }

                    </div>

                    {/* Correo electrónico */}
                    <div className={styles.formGroup}>
                        <label>Email:</label>
                        <input
                            type="email"
                            placeholder='Enter your email must be a valid @gmail.com address'
                            {...register('email', {
                                required: true,
                                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            })}
                        />
                        {
                            errors.email?.type === "required" && <p className={styles.errorMessage}>Email is required</p> ||
                            errors.email?.type === "pattern" && <p className={styles.errorMessage}>Email must be valid</p>
                        }
                    </div>

                    {/* Contraseña */}
                    <div className={styles.formGroup}>
                        <label >Password:</label>
                        <input
                            type="password"
                            placeholder='Enter your password'
                            {...register('password', {
                                required: true,
                                minLength: 8

                            })}
                        />
                        {
                            errors.password?.type === "required" && <p className={styles.errorMessage}>Password is required</p> ||
                            errors.password?.type === "minLength" && <p className={styles.errorMessage}>Password must be at least 8 characters long</p>
                        }
                    </div>

                    <div className={styles.btn}>
                        <button type="submit">Register</button>

                    </div>
                </form>
            </div>

        </>
    );
};

export default RegisterForm;
