
import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonLabel, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonIcon, IonInput } from '@ionic/react';
import { NavLink, useHistory } from 'react-router-dom';
import negocio1 from '../../../../assets/img/images.jpg'
import '../styles/Negocios.scss'
import { useEffect, useState } from 'react';
import { obtenerEmpresas } from '../../../../api/Negocios';

interface Negocios {
    codTipoambiente: number;
    amCodigo: string;
    amRazonSocial: string;
    amNombreComercial: string;
    amDireccionSucursal: string;
    amRuc: string;
    amDireccionMatriz: string;
    amTelefono: string;
    amServeletImg:string;
}


const NegociosPage: React.FC = () => {

    const history = useHistory();
    const [busqueda, setBusqueda] = useState("");

    const irCarrito = () => {
        history.push('/tienda/negocio/carrito');
    }

    const [negocios, setNegocios] = useState<Negocios[]>([]);

    const actualizarBusqueda = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const nuevoBusqueda = e.target.value;
        setBusqueda(nuevoBusqueda.toUpperCase());
        obtenerDatosDeNegocios(nuevoBusqueda.toUpperCase())
    };

    const handleBusquedaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nuevoValor = e.target.value;
        setBusqueda(nuevoValor);
        console.log('Valor actual de busqueda:', nuevoValor);
    };

    const obtenerDatosDeNegocios = async (nombreEmpresa: string) => {
        try {
            const respuesta = await obtenerEmpresas({ nombreEmpresa: nombreEmpresa });
            if (respuesta.status === 200 && respuesta.data && Array.isArray(respuesta.data)) {
                setNegocios(respuesta.data);
            } else {
                console.error('Respuesta inesperada de la API:', respuesta);
            }
        } catch (error) {
            console.error('Error al obtener datos de negocios:', error);
        }
    };

    useEffect(() => {
        obtenerDatosDeNegocios("");
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

                    <input
                        type="text"
                        placeholder="Nombre de la empresa"
                        value={busqueda}
                        onChange={actualizarBusqueda}
                    />

                </div>
                <div className='listaNegocios'>
                    {negocios.map((negocio, index) => (
                        <IonCard key={index} className="card">
                            <div className='negocio'>
                                <img src={negocio.amServeletImg} alt="" />
                                <div className='detalle'>

                                    <div className='titulo'><span>{negocio.amNombreComercial}</span></div>
                                    <div className='info'>
                                        <div className='titulo'><span>Tienda viveres</span></div>
                                        <div><span>0987654321</span></div>

                                    </div>
                                </div>

                                <div className='footer'>
                                  
                                    <NavLink className='button' to={`/tienda/negocio/productos/${negocio.codTipoambiente}`}> 
                                        <IonLabel>Ingresar</IonLabel>
                                    </NavLink>
                                   
                                </div>


                            </div>
                        </IonCard>
                    ))}

                </div>

            </IonContent>
        </IonPage >
    );
};

export default NegociosPage;