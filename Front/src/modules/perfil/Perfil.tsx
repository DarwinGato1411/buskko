
import { IonPage, IonContent, IonInput, IonButton, IonModal, IonDatetime } from '@ionic/react';
import '../../styles/Login.scss'
import { useState } from 'react';
import { useHistory } from 'react-router';
import buskkoLogo from '../../assets/img/BUSKKO.png'
import './styles/Perfil.scss'

const PerfilPage: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [currentLocation, setCurrentLocation] = useState<string>('');
    const history = useHistory();

    const handleLogin = () => {
        window.location.href = '/';
    };

    const handleGetLocation = () => {
        if ("geolocation" in navigator) {
            // Solicitar la geolocalización actual al navegador
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    console.log(position)
                    setCurrentLocation(`Latitud: ${latitude}, Longitud: ${longitude}`);
                },
                (error) => {
                    console.error("Error al obtener la ubicación:", error.message);
                }
            );
        } else {
            console.error("La geolocalización no es compatible con este navegador.");
        }
    };

    const handleNavigate = () => {
        history.push('/otra-pagina'); // Cambia '/otra-pagina' a la ruta de la otra página
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };
    return (
        <IonPage className='registroPage'>
            <IonContent className='paginaContenido'>
                <div className='contenedorRegistro'>
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
                                <span>CI/RUC:</span>
                                <IonInput
                                    type="email"
                                    placeholder="Escriba su cédula o RUC"
                                    value={email}
                                    onIonChange={(e) => setEmail(e.detail.value!)}

                                ></IonInput>
                            </div>
                            <div className='contenidoInput'>
                                <span>Nombres:</span>
                                <IonInput
                                    type="email"
                                    placeholder="Nombres completos"
                                    value={email}
                                    onIonChange={(e) => setEmail(e.detail.value!)}

                                ></IonInput>
                            </div>
                            <div className='contenidoInput'>
                                <span>Apellidos:</span>
                                <IonInput
                                    type="email"
                                    placeholder="Apellidos completos"
                                    value={email}
                                    onIonChange={(e) => setEmail(e.detail.value!)}

                                ></IonInput>
                            </div>
                            <div className='contenidoInput'>
                                <span>Celular:</span>
                                <IonInput
                                    type="email"
                                    placeholder="Numero celular"
                                    value={email}
                                    onIonChange={(e) => setEmail(e.detail.value!)}

                                ></IonInput>
                            </div>
                            <div className='contenidoInput'>
                                <span>Usuario:</span>
                                <IonInput
                                    type="email"
                                    placeholder="Escriba su usuario"
                                    value={email}
                                    onIonChange={(e) => setEmail(e.detail.value!)}

                                ></IonInput>
                            </div>
                            <div className='contenidoInput'>
                                <span>Contraseña:</span>
                                <IonInput
                                    type="password"
                                    placeholder="****"
                                    value={email}
                                    onIonChange={(e) => setEmail(e.detail.value!)}

                                ></IonInput>
                            </div>
                            <div className='contenidoInput'>
                                <span>Confirmar:</span>
                                <IonInput
                                    type="password"
                                    placeholder="****"
                                    value={email}
                                    onIonChange={(e) => setEmail(e.detail.value!)}
                                ></IonInput>
                            </div>
                            {/* <div className='contenidoInput'>
                                <span>Fecha nacimiento:</span>
                                <IonButton expand="full" onClick={openModal}>
                                    Abrir Modal
                                </IonButton>

                                <IonModal isOpen={showModal} onDidDismiss={closeModal}>
                                    <IonContent>
                                        <IonDatetime
                                            placeholder="Seleccione una fecha"

                                        ></IonDatetime>
                                        <IonButton onClick={closeModal}>
                                            Cerrar Modal
                                        </IonButton>
                                    </IonContent>
                                </IonModal>


                            </div> */}
                            <div className='contenidoInput1'>
                                <span>Area de trabajo:</span>
                                <IonInput
                                    type="text"
                                    placeholder="Fumigacion/Contabilidad/Mecanica"
                                    value={email}
                                    onIonChange={(e) => setEmail(e.detail.value!)}
                                ></IonInput>
                            </div>
                            <div className='contenidoInput1'>
                                <IonButton expand="full" onClick={handleGetLocation}>
                                    Obtener Ubicación Actual
                                </IonButton>

                                {currentLocation && <p>Ubicación actual: {currentLocation}</p>}
                            </div>

                        </div>
                        <IonButton expand="full" onClick={handleLogin}>
                            Registrarse
                        </IonButton>
                        <br />

                    </div>

                </div>
            </IonContent>
        </IonPage >
    );
};

export default PerfilPage;