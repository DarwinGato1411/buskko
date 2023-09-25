import { useState } from 'react';
import { IonPage, IonContent, IonInput, IonButton, IonDatetime, IonModal } from '@ionic/react';
import '../styles/Registro.scss';
import buskkoLogo from '../assets/img/BUSKKO.png';
import { useHistory } from 'react-router-dom';
import { crearUsuario } from '../api/Usuario';

interface Usuario {
    idUsuario: number | null;
    usuActivaMovil: boolean;
    usuCorreo: string;
    usuDireccion: string;
    usuFechaCaduca: Date;
    usuFechaRegMov: Date;
    usuFechaRegistro: Date;
    usuLogin: string;
    usuNivel: 2;
    usuNombre: string;
    usuPassword: string;
    usuRuc: string;
    usuWhatsapp: string;
}

const Registro: React.FC = () => {
    const [cedulaRuc, setCedulaRuc] = useState('');
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [celular, setCelular] = useState('');
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [confirmContrasena, setConfirmContrasena] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState<string | undefined>(undefined);
    const [areaTrabajo, setAreaTrabajo] = useState('');
    const [direccion, setDireccion] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [currentLocation, setCurrentLocation] = useState<string>('');

    const history = useHistory();

    const handleLogin = () => {

        const usuarioNuevo: Usuario = {
            usuActivaMovil: true,
            usuCorreo: "",
            usuDireccion: direccion,
            usuFechaCaduca: new Date(),
            usuFechaRegMov: new Date(),
            usuFechaRegistro: new Date(),
            usuLogin: usuario,
            usuNivel: 2,
            usuNombre: nombres,
            usuPassword: contrasena,
            usuRuc: cedulaRuc,
            usuWhatsapp: celular,
            idUsuario: null

        }

        crearUsuario(usuarioNuevo);
    };

    const handleGetLocation = () => {
        if ("geolocation" in navigator) {
            // Solicitar la geolocalización actual al navegador
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    console.log(position);
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
                        </div>
                        <div className='contenedorInputs'>
                            <div className='contenidoInput'>
                                <span>CI/RUC:</span>
                                <IonInput
                                    type="text"
                                    placeholder="Escriba su cédula o RUC"
                                    value={cedulaRuc}
                                    onIonChange={(e) => setCedulaRuc(e.detail.value!)}
                                ></IonInput>
                            </div>
                            <div className='contenidoInput'>
                                <span>Nombres:</span>
                                <IonInput
                                    type="text"
                                    placeholder="Nombres completos"
                                    value={nombres}
                                    onIonChange={(e) => setNombres(e.detail.value!)}
                                ></IonInput>
                            </div>

                            <div className='contenidoInput'>
                                <span>Celular:</span>
                                <IonInput
                                    type="text"
                                    placeholder="Numero celular"
                                    value={celular}
                                    onIonChange={(e) => setCelular(e.detail.value!)}
                                ></IonInput>
                            </div>
                            <div className='contenidoInput'>
                                <span>Usuario:</span>
                                <IonInput
                                    type="text"
                                    placeholder="Escriba su usuario"
                                    value={usuario}
                                    onIonChange={(e) => setUsuario(e.detail.value!)}
                                ></IonInput>
                            </div>
                            <div className='contenidoInput'>
                                <span>Contraseña:</span>
                                <IonInput
                                    type="password"
                                    placeholder="****"
                                    value={contrasena}
                                    onIonChange={(e) => setContrasena(e.detail.value!)}
                                ></IonInput>
                            </div>
                            <div className='contenidoInput'>
                                <span>Confirmar Contraseña:</span>
                                <IonInput
                                    type="password"
                                    placeholder="****"
                                    value={confirmContrasena}
                                    onIonChange={(e) => setConfirmContrasena(e.detail.value!)}
                                ></IonInput>
                            </div>
                            <div className='contenidoInput'>
                                <span>Fecha de Nacimiento:</span>
                                <IonButton expand="full" onClick={openModal}>
                                    Abrir Modal
                                </IonButton>
                                <IonModal isOpen={showModal} onDidDismiss={closeModal}>
                                    <IonContent>
                                        <IonDatetime
                                            placeholder="Seleccione una fecha"
                                            value={fechaNacimiento}
                                            onIonChange={(e: any) => setFechaNacimiento(e.detail.value!)}
                                        ></IonDatetime>
                                        <IonButton onClick={closeModal}>
                                            Cerrar Modal
                                        </IonButton>
                                    </IonContent>
                                </IonModal>
                            </div>
                            <div className='contenidoInput1'>
                                <span>Area de Trabajo:</span>
                                <IonInput
                                    type="text"
                                    placeholder="Fumigacion/Contabilidad/Mecanica"
                                    value={areaTrabajo}
                                    onIonChange={(e) => setAreaTrabajo(e.detail.value!)}
                                ></IonInput>
                            </div>
                            <div className='contenidoInput1'>
                                <span>Dirección:</span>
                                <IonInput
                                    type="text"
                                    placeholder="Dirección completa"
                                    value={direccion}
                                    onIonChange={(e) => setDireccion(e.detail.value!)}
                                ></IonInput>
                            </div>
                        </div>
                        <IonButton expand="full" onClick={handleLogin}>
                            Registrarse
                        </IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Registro;