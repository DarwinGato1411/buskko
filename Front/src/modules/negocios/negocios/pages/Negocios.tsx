
import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonLabel, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonIcon } from '@ionic/react';
import { NavLink, useHistory } from 'react-router-dom';
import negocio1 from '../../../../assets/img/images.jpg'
import defaultImage from '../../../../assets/img/BUSKKO.png'
import '../styles/Negocios.scss'
import { cartOutline } from 'ionicons/icons'
const NegociosPage: React.FC = () => {

    const history = useHistory();

    const irCarrito = () => {
        history.push('/tienda/negocio/carrito');
    }


    return (
        <IonPage className='pageNegocio' id="main-content">
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Negocios</IonTitle>
                    <IonButtons slot="end" onClick={irCarrito}>
                        <IonIcon icon={cartOutline}  />
                        <IonLabel>H. Pedidos</IonLabel>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard className="card">
                    <div className='negocio'>
                        <div className='titulo'><span>Amazon</span></div>
                        <div className='detalle'>
                            <img src={negocio1} alt="" />
                            <div className='info'>
                                <div className='titulo'><span>Tienda viveres</span></div>
                                <div><span>0987654321</span></div>
                              
                            </div>
                        </div>
                        <div className='footer'>
                            <div className='direccion'><span>Imbabura/Ibarra/Priorato</span></div>
                            <NavLink className='button' to="/tienda/negocio/productos"> {/* Usa Link en lugar de <a> */}
                                <IonLabel>Ingresar</IonLabel>
                            </NavLink>
                        </div>
                    </div>
                </IonCard>
                <IonCard className="card">
                    <div className='negocio'>
                        <div className='titulo'>Amazon</div>
                        <div className='detalle'>
                            <img src={negocio1} alt="" />
                            <div className='info'>
                                <div className='titulo'><span>Tienda viveres</span></div>
                                <div><span>0987654321</span></div>
                               
                            </div>
                        </div>
                        <div className='footer'>
                            <div className='direccion'><span>Imbabura/Ibarra/Priorato</span></div>
                            <NavLink className='button' to="/tienda/negocio/productos"> {/* Usa Link en lugar de <a> */}
                                <IonLabel>Ingresar</IonLabel>
                            </NavLink>
                        </div>
                    </div>
                </IonCard>
                <IonCard className="card">
                    <div className='negocio'>
                        <div className='titulo'>Amazon</div>
                        <div className='detalle'>
                            <img src={defaultImage} alt="" />
                            <div className='info'>
                                <div className='titulo'><span>Tienda viveres</span></div>
                                <div><span>0987654321</span></div>
                               
                            </div>
                        </div>
                        <div className='footer'>
                            <div className='direccion'><span>Imbabura/Ibarra/Priorato</span></div>
                            <NavLink className='button' to="/tienda/negocio/productos"> {/* Usa Link en lugar de <a> */}
                                <IonLabel>Ingresar</IonLabel>
                            </NavLink>
                        </div>
                    </div>
                </IonCard>
                <IonCard className="card">
                    <div className='negocio'>
                        <div className='titulo'>Amazon</div>
                        <div className='detalle'>
                            <img src={defaultImage} alt="" />
                            <div className='info'>
                                <div className='titulo'><span>Tienda viveres</span></div>
                                <div><span>0987654321</span></div>
                              
                            </div>
                        </div>
                        <div className='footer'>
                            <div className='direccion'><span>Imbabura/Ibarra/Priorato</span></div>

                            <NavLink className='button' to="/tienda/negocio/productos"> {/* Usa Link en lugar de <a> */}
                                <IonLabel>Ingresar</IonLabel>
                            </NavLink>
                        </div>
                    </div>
                </IonCard>

            </IonContent>
        </IonPage >
    );
};

export default NegociosPage;