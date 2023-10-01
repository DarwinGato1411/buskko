import { useState } from 'react';
import { IonPage, IonContent, IonInput, IonButton, IonIcon } from '@ionic/react';
import '../styles/Login.scss'
import { personCircleOutline, keyOutline } from 'ionicons/icons';
import buskkoLogo from '../assets/img/1.png'
import { Redirect, useHistory } from 'react-router-dom';
import { loginCliente } from '../api/Usuario'
import Swal from 'sweetalert2';

interface UserCredentials {
    usuLogin: string;
    usuPassword: string;
}

interface ApiResponse {
    status: number;
    message: string;
    data: UserData | null;
}

interface UserData {
    usuWhatsapp: string,
    usuActivaMovil: string,
    usuFechaRegMov: string,
    usuFechaCaduca: string,
    usuDireccion: string,
    idUsuario: string,
    usuNombre: string,
    usuLogin: string,
    usuPassword: string,
    usuCorreo: string,
    usuNivel: number,
    usuRuc: string,
    usuFechaRegistro: Date
}
const LoginPage: React.FC = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const history = useHistory();

    const handleLogin = async () => {
        const userCredentials: UserCredentials = { usuLogin: userName, usuPassword: password };
        try {
            const respuesta = await loginCliente(userCredentials);
            if (respuesta.status === 200) {
                if (respuesta.data && respuesta.data.usuRuc != null) {
                    localStorage.setItem('usuario', JSON.stringify(respuesta.data));
                    setLoggedIn(true);
                    Swal.fire(
                        'Login exitoso',
                        'Usuario logeado con exito',
                        'success'
                    )
                } else {
                    Swal.fire(
                        'Atención',
                        'El usuario no está registrado',
                        'error'
                    )
                }

            } else {
                console.error('Error en la solicitud:', respuesta.status);
                Swal.fire(
                    'Atención',
                    'El usuario no está registrado'+ respuesta.status,
                    'error'
                )
            }
        } catch (error: any) {
            console.error('Error al iniciar sesión:', error.message);
            Swal.fire(
                'Atención',
                'El usuario no está registrado'+ error.message,
                'error'
            )
            
        }
    };

    const handleNavigate = () => {
        history.push('/registro'); // Cambia '/otra-pagina' a la ruta de la otra página
    };

    if (loggedIn) {
        return <Redirect to="/tienda" />;
    }

    return (
        <IonPage>
            <IonContent className='paginaContenido'>

                <div className='fondoLogo'>
                    <div className='contenidoLogo'>

                        <div className='fondoLogo'>
                            {/* <img className='img' src="https://tutiendaecuador.com/wp-content/uploads/2021/05/paradas-neuromarketing-supermercados.jpg" alt="Tu imagen" /> */}

                        </div>
                        <div className='centrar'>
                            <div className='logo'>
                                <div className='contenidoLogo'>
                                    <img src={buskkoLogo} alt="" />
                                    <span>Bienvenido de vuelta</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='contenedorLogin'>
                    <div className='as'>
                        <div className='formulario'>
                            <div className='contenedorInputs'>
                                <div className='contenidoInput'>
                                    <IonIcon icon={personCircleOutline} className='icon' />
                                    <IonInput
                                        type="email"
                                        placeholder="Correo Electrónico"
                                        value={userName}
                                        onIonChange={(e) => setUserName(e.detail.value!)}

                                    ></IonInput>
                                </div>
                                <div className='contenidoInput'>
                                    <IonIcon icon={keyOutline} className='icon' />
                                    <IonInput
                                        type="password"
                                        placeholder="Contraseña"
                                        value={password}
                                        onIonChange={(e) => setPassword(e.detail.value!)}
                                    ></IonInput>
                                </div>
                            </div>
                            <div className='botonera'>

                                <button className='btn login' onClick={handleLogin}>
                                    Iniciar Sesión
                                </button>
                                <p className="registro">
                                    No estas Registrado? <a onClick={handleNavigate} >Registrate ahora</a>
                                </p>

                            </div>
                        </div>
                    </div>

                </div>
            </IonContent>
        </IonPage >
    );
};

export default LoginPage;