
import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonLabel, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonIcon } from '@ionic/react';
import { NavLink, useHistory } from 'react-router-dom';
import '../styles/Negocios.scss'

const EmpleosPage: React.FC = () => {

    const history = useHistory();

    const irCarrito = () => {
        history.push('/tienda/negocio/carrito');
    }


    return (
        <IonPage className='pageEmpleo' id="main-content">
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Empleos</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard className='card'>
                    <div className='negocio'>
                        <div className='titulo'>Vacantes</div>
                        <div className='detalle'>
                            <img src="" alt="" />
                            <div className='info'>
                                <div className='titulo'><span>Poscocecha</span></div>
                                <div className='numero'><span>0987654321</span></div>
                              
                            </div>
                        </div>
                        <div className='footer'>
                            <div className='direccion'><span>Imbabura/Ibarra/Priorato</span></div>

                            <div className='botonera'>
                                <div>
                                    <div className='direccion'><span>Fecha Publicacion: 4/9/2023</span></div>
                                    <div className='direccion'><span>Fecha Publicacion: 4/9/2023</span></div>
                                </div>
                                <NavLink className='button' to={`/tienda/empleo/postulacion/${"ingenieria"}`}> {/* Usa Link en lugar de <a> */}
                                    <IonLabel>Postular</IonLabel>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </IonCard>
                <IonCard>
                    <div className='negocio'>
                        <div className='titulo'>Vacantes</div>
                        <div className='detalle'>
                            <img src="" alt="" />
                            <div className='info'>
                                <div className='titulo'><span>Poscocecha</span></div>
                                <div className='numero'><span>0987654321</span></div>
                              
                            </div>
                        </div>
                        <div className='footer'>
                            <div className='direccion'><span>Imbabura/Ibarra/Priorato</span></div>

                            <div className='botonera'>
                                <div>
                                    <div className='direccion'><span>Fecha Publicacion: 4/9/2023</span></div>
                                    <div className='direccion'><span>Fecha Publicacion: 4/9/2023</span></div>
                                </div>
                                <NavLink className='button' to={`/tienda/empleo/postulacion/${"ingenieria"}`}> {/* Usa Link en lugar de <a> */}
                                    <IonLabel>Postular</IonLabel>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </IonCard>
                <IonCard>
                    <div className='negocio'>
                        <div className='titulo'>Vacantes</div>
                        <div className='detalle'>
                            <img src="" alt="" />
                            <div className='info'>
                                <div className='titulo'><span>Poscocecha</span></div>
                                <div className='numero'><span>0987654321</span></div>
                              
                            </div>
                        </div>
                        <div className='footer'>
                            <div className='direccion'><span>Imbabura/Ibarra/Priorato</span></div>

                            <div className='botonera'>
                                <div>
                                    <div className='direccion'><span>Fecha Publicacion: 4/9/2023</span></div>
                                    <div className='direccion'><span>Fecha Publicacion: 4/9/2023</span></div>
                                </div>
                                <NavLink className='button' to={`/tienda/empleo/postulacion/${"ingenieria"}`}> {/* Usa Link en lugar de <a> */}
                                    <IonLabel>Postular</IonLabel>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </IonCard>


            </IonContent>
        </IonPage >
    );
};

export default EmpleosPage;