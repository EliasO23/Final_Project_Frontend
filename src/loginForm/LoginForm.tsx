import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.css'
import logo from '../assets/img/Kodigo_Music.png'
import { FormData } from '../shared/interfaces/LoginForm.interfaces';


const LoginForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const navigate = useNavigate();

    // Función que se ejecuta cuando el formulario es válido
    const onSubmit = (data: FormData) => {
        alert('Cuenta creada');
        console.log(data);
        
        // Redirigir a la página principal (HomePage) cuando todo es correcto
        navigate('/')
    };

    return (
        <>
            <div className={styles.welcome}>
                <h1>Bienvenidos</h1>
                <p>El sonido de tu vida, en cada momento y lugar.</p>
            </div>

            <div className={styles.loginContainer}>

                <section className={styles.headerLogo}>
                    <img src={logo} alt="Logo KodigoMusic" />
                    <h2>Kodigo Music</h2>
                </section>

                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* Nombre de usuario */}
                    <div className={styles.formGroup}>
                        <label>Username</label>
                        <input
                            type="text"
                            {...register('username', {
                                required: true,
                                validate: (value) => !/\s/.test(value),
                            })}
                        />
                        {
                            errors.username?.type === "required" &&<p className={styles.errorMessage}>Username is required</p> || 
                            errors.username?.type === "validate" && <p className={styles.errorMessage}>Username cannot contain spaces</p>
                        }
                        
                    </div>

                    {/* Correo electrónico */}
                    <div className={styles.formGroup}>
                        <label>Email</label>
                        <input
                            type="email"
                            {...register('email', {
                                required: true,
                                pattern: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                            })}
                        />
                        {
                            errors.email?.type === "required" && <p className={styles.errorMessage}>Email is required</p> ||
                            errors.email?.type === "pattern" && <p className={styles.errorMessage}>Email must be a valid @gmail.com address</p>
                        }
                    </div>

                    {/* Contraseña */}
                    <div className={styles.formGroup}>
                        <label >Password</label>
                        <input
                            type="password"
                            {...register('password', {
                                required: true,
                                minLength:8,
                                pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,

                            })}
                        />
                        {
                            errors.password?.type === "required" && <p className={styles.errorMessage}>Password is required</p> ||
                            errors.password?.type === "minLength" && <p className={styles.errorMessage}>Password must be at least 8 characters long</p> ||
                            errors.password?.type === "pattern" && <p className={styles.errorMessage}>Pastword must contain at least one letter (uppercase or lowercase), one number, and one special character (@$!%*?&). </p>
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

export default LoginForm;
