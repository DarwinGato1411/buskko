import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import zapatos from '../assets/img/descarga.jpg'
import '../styles/Producto.scss'
import { cartOutline } from 'ionicons/icons';
import { useHistory, useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { consultaProductosPorEmpresas } from "../../../../api/producto";

interface EmpresaParams {
    tipoAmbiente: string;
}

interface empresa {
    codTipoambiente: number,
    prodNombre: string
}

interface Producto {
    idProducto: number;
    prodCodigo: string;
    prodNombre: string;
    prodAbreviado: string | null;
    pordCostoVentaRef: number;
    pordCostoVentaFinal: number;
    prodEstado: string | null;
    prodTrasnporte: number;
    prodIva: number;
    prodUtilidadNormal: number;
    prodManoObra: number;
    prodUtilidadPreferencial: number;
    prodUtilidadDos: number;
    prodCostoPreferencial: number;
    prodCostoPreferencialDos: number;
    prodCostoPreferencialTres: number;
    prodPrincipal: number;
    pordCostoCompra: number;
    prodCantMinima: number;
    prodSubsidio: number;
    prodPrecioSinSubsidio: number;
    prodCantidadInicial: number;
    prodGrabaIva: boolean;
    idSubCategoria: number | null;
    prodPathCodbar: string | null;
    prodTieneSubsidio: string;
    proGlp: string | null;
    prodImprimeCodbar: boolean;
    prodEsproducto: boolean;
    prodUnidadMedida: string;
    prodUnidadConversion: string;
    prodFactorConversion: number;
    pordCostoPromedioCompra: number | null;
    prodFechaRegistro: string;
}

const ProductosPage: React.FC = () => {

    const { tipoAmbiente } = useParams<EmpresaParams>()
    const [productos, setProductos] = useState<Producto[]>([])
    const history = useHistory();
    const irCarrito = () => {
        history.push('/tienda/negocio/carrito');
    }

    const handleAtras = () => {
        history.goBack(); // Esta función llevará al usuario atrás en la historia de navegación.
    };

    useEffect(() => {
        const obtenerProductosPorEmpresa = async () => {
            try {
                const empresa: empresa = {
                    codTipoambiente: parseInt(tipoAmbiente), // Reemplaza con el código de tipo de ambiente correcto
                    prodNombre: '' // Puedes ajustar esto según tus necesidades
                };
                const respuesta = await consultaProductosPorEmpresas(empresa); // Realiza la solicitud a la API
                if (respuesta.status === 200 && respuesta.data && Array.isArray(respuesta.data)) {
                    setProductos(respuesta.data); // Establece el estado 'productos' con la respuesta de la API
                } else {
                    console.error('Respuesta inesperada de la API:', respuesta);
                }
            } catch (error) {
                console.error('Error al obtener productos por empresa:', error);
            }
        };
        obtenerProductosPorEmpresa();
    }, []);

    return (
        <IonPage id="main-content" className="productosPage">
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/"/> {/* El botón de retroceso */}
                    </IonButtons>
                    <IonTitle>Productos</IonTitle>
                    <IonButtons slot="end" onClick={irCarrito}>
                        <IonIcon icon={cartOutline} />
                        <IonLabel>Carrito</IonLabel>
                    </IonButtons>
                </IonToolbar>

            </IonHeader>
            <IonContent className="productosContent">

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
                                        <NavLink to="/tienda/negocio/productos"> {/* Usa Link en lugar de <a> */}
                                            <IonIcon icon={cartOutline} onClick={irCarrito} />
                                            <IonLabel>Agregar</IonLabel>
                                        </NavLink>
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