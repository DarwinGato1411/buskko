import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import zapatos from './assets/img/descarga.jpg'
import './styles/Carrito.scss'

import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import { handLeftSharp, documentTextSharp, addCircle, removeCircle } from "ionicons/icons";

const CarritoPage: React.FC = () => {

    const history = useHistory();
    const irCarrito = () => {
        history.push('/tienda/negocio/carrito');
    }

    return (
        <IonPage id="main-content" className="carritoPage">
            <IonHeader>
                <IonToolbar>

                    <IonTitle>Mi compra</IonTitle>

                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="gestionCompra">
                    <div className="calculos">
                        <span className="texto">Subtotal</span>
                        <span className="numero">$144</span>
                        <span className="texto">Con envio</span>
                        <span className="numero">$6</span>
                        <span className="texto">Total</span>
                        <span className="numero">$150</span>
                    </div>
                    <div className="botonera">
                        <NavLink className="boton" to="/tienda/negocio/productos"> {/* Usa Link en lugar de <a> */}
                            <IonIcon style={{ color: "red" }} icon={documentTextSharp} />
                            <IonLabel >PDF</IonLabel>
                        </NavLink>
                        <NavLink className="boton" to="/tienda/negocio/productos"> {/* Usa Link en lugar de <a> */}
                            <IonIcon style={{ color: "green" }} icon={handLeftSharp} />
                            <IonLabel>Acordar con el vendedor</IonLabel>

                        </NavLink>
                    </div>
                </div>

                <br /><br /><br /><br /><br /><br /><br /><br />

                <IonCard className='card'>
                    <div className="producto">
                        
                        <div className="detalle">
                            <img src={zapatos} alt="" />
                            <div className="info">
                                <div className="titulo">
                                    <span>Zapatos nike</span>
                                </div>
                                <div className="costo">
                                    <span>$28</span>
                                    <div className="footer">
                                        <IonIcon style={{ color: "green" }} icon={addCircle} />
                                        <span>1</span>
                                        <IonIcon style={{ color: "red" }} icon={removeCircle} />
                                    </div>
                                </div>


                            </div>
                        </div>
                        
                    </div>
                </IonCard>
                <IonCard className='card'>
                    <div className="producto">
                        <div className="titulo"><span>Zapatos</span></div>
                        <div className="detalle">
                            <img src={zapatos} alt="" />
                            <div className="info">
                                <div className="titulo">
                                    <span>Zapatos nike</span>
                                </div>
                                <div className="costo">
                                    <span>$28</span>
                                    <div className="footer">
                                        <IonIcon style={{ color: "green" }} icon={addCircle} />
                                        <span>1</span>
                                        <IonIcon style={{ color: "red" }} icon={removeCircle} />
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="footer"></div>
                    </div>
                </IonCard>

                <IonCard className='card'>
                    <div className="producto">
                        <div className="titulo"><span>Zapatos</span></div>
                        <div className="detalle">
                            <img src={zapatos} alt="" />
                            <div className="info">
                                <div className="titulo">
                                    <span>Zapatos nike</span>
                                </div>
                                <div className="costo">
                                    <span>$28</span>
                                    <div className="footer">
                                        <IonIcon style={{ color: "green" }} icon={addCircle} />
                                        <span>1</span>
                                        <IonIcon style={{ color: "red" }} icon={removeCircle} />
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                </IonCard>


            </IonContent>
        </IonPage>
    )
}

export default CarritoPage;