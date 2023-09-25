
import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonLabel, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonIcon, IonInput } from '@ionic/react';
import { NavLink, useHistory } from 'react-router-dom';
import negocio1 from '../../../../assets/img/images.jpg'
import defaultImage from '../../../../assets/img/BUSKKO.png'
import '../styles/Negocios.scss'
import { cartOutline } from 'ionicons/icons'
import { useEffect, useState } from 'react';
import { obtnerEmpresas } from '../../../../api/Negocios';




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
    const [busqueda, setBusqueda] = useState("");

    const irCarrito = () => {
        history.push('/tienda/negocio/carrito');
    }

    const [negocios, setNegocios] = useState<Negocios[]>([]);

    const actualizarBusqueda = async (valor: any) => {
        const busquedaNueva: string = valor.detail.value? valor.detail.value: "";
        setBusqueda(busquedaNueva.toUpperCase());
        try {
            const respuesta = await obtnerEmpresas({ nombreEmpresa: busqueda });
            if (respuesta.status === 200 && respuesta.data && Array.isArray(respuesta.data)) {
                setNegocios(respuesta.data);
            } else {
                console.error('Respuesta inesperada de la API:', respuesta);
            }
        } catch (error) {
            console.error('Error al buscar negocios:', error);
        }
    };


    const handleBusquedaChange = (e:any) => {
        const nuevoValor = e.detail.value;
        setBusqueda(nuevoValor);
        console.log('Valor actual de busqueda:', nuevoValor);
    };

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
                    
                </IonToolbar>
            </IonHeader>
            <IonContent>

                <div className='busqueda'>

                    <IonInput
                        type="text"
                        placeholder="Nombre de la empresa"
                        value={busqueda}
                        onIonChange={(e) => actualizarBusqueda(e)}
                    ></IonInput>

                </div>
                {negocios.map((negocio, index) => (
                    <IonCard key={index} className="card">
                        <div className='negocio'>
                            <div className='titulo'><span>{negocio.amNombreComercial}</span></div>
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



            </IonContent>
        </IonPage >
    );
};

export default NegociosPage;