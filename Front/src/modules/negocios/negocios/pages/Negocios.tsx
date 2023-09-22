
import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonLabel, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonIcon } from '@ionic/react';
import { NavLink, useHistory } from 'react-router-dom';
import negocio1 from '../../../../assets/img/images.jpg'
import defaultImage from '../../../../assets/img/BUSKKO.png'
import '../styles/Negocios.scss'
import { cartOutline } from 'ionicons/icons'
import { useEffect, useState } from 'react';
import { obtnerEmpresas } from '../../../../api/negocios';


interface Negocios {
    codTipoambiente: number;
    amCodigo: string;
    amRazonSocial: string;
    amNombreComercial: string;
    amDireccionSucursal: string;
    amRuc: string;
    amDireccionMatriz: string;
    amTelefono: string;
}


const NegociosPage: React.FC = () => {

    const history = useHistory();

    const irCarrito = () => {
        history.push('/tienda/negocio/carrito');
    }

    const [negocios, setNegocios] = useState<Negocios[]>([]);

    useEffect(() => {
        const obtenerDatosDeNegocios = async () => {
            try {
                const respuesta = await obtnerEmpresas({ nombreEmpresa: '' });
                if (respuesta.status === 200 && respuesta.data && Array.isArray(respuesta.data)) {
                    setNegocios(respuesta.data);
                } else {
                    console.error('Respuesta inesperada de la API:', respuesta);
                }
            } catch (error) {
                console.error('Error al obtener datos de negocios:', error);
            }
        };

        obtenerDatosDeNegocios();
    }, []);


    return (
        <IonPage className='pageNegocio' id="main-content">
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Negocios</IonTitle>
                    <IonButtons slot="end" onClick={irCarrito}>
                        <IonIcon icon={cartOutline} />
                        <IonLabel>H. Pedidos</IonLabel>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {negocios.map((negocio, index) => (
                    <IonCard key={index} className="card">
                        <div className='negocio'>
                            <div className='titulo'><span>{negocio.amNombreComercial} codTipoAmbiente{negocio.codTipoambiente}</span></div>
                            <div className='detalle'>
                                <img src={negocio1} alt="" />
                                <div className='info'>
                                    <div className='titulo'><span>Tienda viveres</span></div>
                                    <div><span>0987654321</span></div>

                                </div>
                            </div>
                            <div className='footer'>
                                <div className='direccion'><span> {negocio.amDireccionMatriz}</span></div>
                                <NavLink className='button' to={`/tienda/negocio/productos/${negocio.codTipoambiente}`}> {/* Usa Link en lugar de <a> */}
                                    <IonLabel>Ingresar</IonLabel>
                                </NavLink>
                            </div>


                        </div>
                    </IonCard>
                ))}
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


            </IonContent>
        </IonPage >
    );
};

export default NegociosPage;