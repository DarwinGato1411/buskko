import { useState } from 'react';
import { IonPage, IonContent, IonInput, IonButton, IonIcon } from '@ionic/react';
import '../styles/Login.scss'
import { personCircleOutline, keyOutline } from 'ionicons/icons';
import buskkoLogo from '../assets/img/BUSKKO.png'
import { Redirect, useHistory } from 'react-router-dom';
import { loginCliente } from '../api/login'
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
            }
        } catch (error: any) {
            console.error('Error al iniciar sesión:', error.message);
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
                <div className='contenedorLogin'>
                    <div className='as'>
                        <div className='contenidoLogo'>
                            <img className='logo' src={buskkoLogo} alt="" />
                            {/* <div>
                                <p>Buskko</p>
                                <p>Todo en un solo lugar</p>
                            </div> */}
                        </div>
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
                        <IonButton expand="full" onClick={handleLogin}>
                            Iniciar Sesión
                        </IonButton>
                        <br />
                        <p className="text--center">
                            No estas Registrado? <a onClick={handleNavigate} >Registrate ahora</a>

                        </p>
                    </div>

                </div>
            </IonContent>
        </IonPage >
    );
};

export default LoginPage;