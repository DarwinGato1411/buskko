import { IonBackButton, IonButtons, IonCard, IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonTitle, IonToolbar, IonButton, IonInput } from "@ionic/react";
import zapatos from '../assets/img/descarga.jpg'
import '../styles/Producto.scss'
import { cartOutline } from 'ionicons/icons';
import { useHistory, useParams } from "react-router";
import { useEffect, useState } from "react";

import Swal from "sweetalert2";
import { Producto } from "../../interfaces/producto";
import { consultaProductosPorEmpresas } from "../../../../api/producto";

interface EmpresaParams {
    tipoAmbiente: string;
}

interface empresa {
    codTipoambiente: number,
    prodNombre: string
}

const ProductosPage: React.FC = () => {



    const { tipoAmbiente } = useParams<EmpresaParams>()
    const [productos, setProductos] = useState<Producto[]>([])
    const [carrito, setCarrito] = useState<Producto[]>([]);
    const [busqueda, setBusqueda] = useState("");

    const history = useHistory();
    const irCarrito = () => {
        history.push('/tienda/negocio/carrito');
    }

    const agregarCarrito = (nuevoProducto: Producto) => {
        setCarrito((carritoAnterior) => {
            const nuevoCarrito = [...carritoAnterior, nuevoProducto];
            localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
            Swal.fire({
                icon: 'success',
                title: 'Atención!',
                text: 'Producto agregado con éxito!',
                timer: 1000
            });
            return nuevoCarrito;
        });
    }

    const imprimirCarrito = () => {
        console.log(carrito)

    }

    const handleAtras = () => {
        history.goBack(); // Esta función llevará al usuario atrás en la historia de navegación.
    };

    const actualizarBusqueda = async (valor: any) => {
        const busquedaNueva: string = valor.detail.value ? valor.detail.value : "";
        setBusqueda(busquedaNueva.toUpperCase());
        obtenerProductosPorEmpresa(busqueda)
    };


    const obtenerProductosPorEmpresa = async (producto: string | "") => {
        try {
            const empresa: empresa = {
                codTipoambiente: parseInt(tipoAmbiente),
                prodNombre: producto
            };
            const respuesta = await consultaProductosPorEmpresas(empresa);
            if (respuesta.status === 200 && respuesta.data && Array.isArray(respuesta.data)) {
                setProductos(respuesta.data);
            } else {
                console.error('Respuesta inesperada de la API:', respuesta);
            }
        } catch (error) {
            console.error('Error al obtener productos por empresa:', error);
        }
    };

    useEffect(() => {
        obtenerProductosPorEmpresa("");
    }, []);

    return (
        <IonPage id="main-content" className="productosPage">
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" /> {/* El botón de retroceso */}
                    </IonButtons>
                    <IonTitle>Productos</IonTitle>
                    <IonButtons slot="end" onClick={irCarrito}>
                        <IonIcon icon={cartOutline} />
                        <IonLabel>Carrito</IonLabel>
                    </IonButtons>
                </IonToolbar>

            </IonHeader>
            <IonContent className="productosContent">
                <div className='busqueda'>

                    <IonInput
                        type="text"
                        placeholder="Nombre del producto"
                        value={busqueda}
                        onIonChange={(e) => actualizarBusqueda(e)}
                    ></IonInput>

                </div>


                {productos.map((producto, index) => (
                    <IonCard key={index} className="card">
                        <div className="producto">
                            <div className="titulo"><span>{producto.prodNombre}</span></div>
                            <div className="detalle">
                                <img src={zapatos} alt="" />
                                <div className="info">
                                    <div className="codigo">
                                        <span>Codigo: {producto.prodCodigo}</span>
                                    </div>
                                    <div className="precio">
                                        <span >$ {producto.prodCostoPreferencial}</span>
                                    </div>
                                    <div className="button">
                                        <IonButton onClick={() => agregarCarrito(producto)}>
                                            <IonIcon icon={cartOutline} />
                                            <IonLabel>Agregar</IonLabel>
                                        </IonButton>
                                        {/* <IonButton onClick={imprimirCarrito}>
                                            <IonIcon icon={cartOutline} />
                                            <IonLabel>verCarrito</IonLabel>
                                        </IonButton> */}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </IonCard>
                ))}




            </IonContent>
        </IonPage>
    )
}

export default ProductosPage;