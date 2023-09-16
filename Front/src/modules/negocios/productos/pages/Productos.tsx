import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import zapatos from '../assets/img/descarga.jpg'
import '../styles/Producto.scss'
import { cartOutline } from 'ionicons/icons';
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";

const ProductosPage: React.FC = () => {

    const history = useHistory();
    const irCarrito = () => {
        history.push('/tienda/negocio/carrito');
    }

    return (
        <IonPage id="main-content" className="productosPage">
            <IonHeader>
                <IonToolbar>

                    <IonTitle>Productos</IonTitle>
                    <IonButtons slot="end" onClick={irCarrito}>
                        <IonIcon icon={cartOutline}  />
                        <IonLabel>Carrito</IonLabel>
                    </IonButtons>
                </IonToolbar>

            </IonHeader>
            <IonContent className="productosContent">


                <IonCard  className="card">
                    <div className="producto">
                        <div className="titulo"><span>Zapatos</span></div>
                        <div className="detalle">
                            <img src={zapatos} alt="" />
                            <div className="info">
                                <div className="codigo">
                                    <span>Codigo: A1313S</span>
                                </div>
                                <div className="precio">
                                    <span >$ 30.15</span>
                                </div>
                                <div className="button">
                                    <NavLink to="/tienda/negocio/productos"> {/* Usa Link en lugar de <a> */}
                                        <IonIcon icon={cartOutline} onClick={irCarrito} />
                                        <IonLabel>Agregar</IonLabel>
                                    </NavLink>
                                </div>
                            </div>

                        </div>
                    </div>
                </IonCard>
                <IonCard className="card">
                    <div className="producto">
                        <div className="titulo"><span>Zapatos</span></div>
                        <div className="detalle">
                            <img src={zapatos} alt="" />
                            <div className="info">
                                <div className="codigo">
                                    <span>Codigo: A1313S</span>
                                </div>
                                <div className="precio">
                                    <span >$ 30.15</span>
                                </div>
                                <div className="button">
                                    <NavLink to="/tienda/negocio/productos"> {/* Usa Link en lugar de <a> */}
                                        <IonIcon icon={cartOutline} onClick={irCarrito} />
                                        <IonLabel>Agregar</IonLabel>
                                    </NavLink>
                                </div>
                            </div>

                        </div>
                    </div>
                </IonCard>

                <IonCard className="card">
                    <div className="producto">
                        <div className="titulo"><span>Zapatos</span></div>
                        <div className="detalle">
                            <img src={zapatos} alt="" />
                            <div className="info">
                                <div className="codigo">
                                    <span>Codigo: A1313S</span>
                                </div>
                                <div className="precio">
                                    <span >$ 30.15</span>
                                </div>
                                <div className="button">
                                    <NavLink to="/tienda/negocio/productos"> {/* Usa Link en lugar de <a> */}
                                        <IonIcon icon={cartOutline} onClick={irCarrito} />
                                        <IonLabel>Agregar</IonLabel>
                                    </NavLink>
                                </div>
                            </div>

                        </div>
                    </div>
                </IonCard>


            </IonContent>
        </IonPage>
    )
}

export default ProductosPage;