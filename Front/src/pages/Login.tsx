import { useState } from 'react';
import { IonPage, IonContent, IonInput, IonButton, IonIcon } from '@ionic/react';
import '../styles/Login.scss'
import { personCircleOutline, keyOutline } from 'ionicons/icons';
import buskkoLogo from '../assets/img/BUSKKO.png'
import { useHistory } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleLogin = () => {
        window.location.href = '/tienda';
    };

    const handleNavigate = () => {
        history.push('/registro'); // Cambia '/otra-pagina' a la ruta de la otra página
    };

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
                                    value={email}
                                    onIonChange={(e) => setEmail(e.detail.value!)}

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