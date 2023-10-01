import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import zapatos from './assets/img/descarga.jpg'
import './styles/Carrito.scss'

import { useHistory } from "react-router";
import { handLeftSharp, documentTextSharp, addCircle, removeCircle } from "ionicons/icons";
import { useEffect, useState } from "react";

import { DetalleFactura, Factura, FacturaAll } from "../interfaces/Factura";
import { crearFactura } from "../../../api/Factura";
import { Producto } from "../interfaces/producto";
import { SocialSharing } from '@ionic-native/social-sharing';
import Swal from "sweetalert2";


const CarritoPage: React.FC = () => {

    const history = useHistory();
    const [carrito, setCarrito] = useState<Producto[]>([]);

    const factura: Factura = {
        cod_tipoambiente: null,
        codestablecimiento: "001",
        codigoPorcentaje: "2",
        estadosri: "Aprobada",
        faConSinGuia: "SG",
        facAbono: 1000,
        facBaseIce: 50,
        facClaveAcceso: "123456789",
        facClaveAutorizacion: "ABCDEF123",
        facCodIce: "3",
        facCodIva: "2",
        facDescripcion: "Venta de productos",
        facDescuento: 50,
        facDestino: "Local",
        facEstado: "PA",
        facFecha: "2023-08-30",
        facFechaAutorizacion: "2023-08-31",
        facFechaCobro: "2023-09-05",
        facFechaCobroPlazo: "2023-09-15",
        facFechaSustento: "2023-08-28",
        facHija: "No",
        facIva: 120,
        facMadre: "12345",
        facMoneda: "USD",
        facMsmInfoSri: "Información adicional",
        facNotaEntregaProcess: "N",
        facNumNotaEntrega: 0,
        facNumNotaVenta: 123,
        facNumProforma: 0,
        facNumero: 456,
        facNumeroText: "CUATROCIENTOS CINCUENTA Y SEIS",
        facPlazo: 15,
        facPorcentajeIva: "12%",
        facSaldo: 850,
        facSaldoAmortizado: 150,
        facSubsidio: 10,
        facSubtotal: 1000,
        facTipo: "PED",
        facTipoIdentificadorComprobador: "Cédula",
        facTotal: 950,
        facTotalBaseCero: 100,
        facTotalBaseGravaba: 900,
        facUnidadTiempo: "Días",
        facValorIce: 5,
        facValorSinSubsidio: 900,
        facpath: "/ruta/al/archivo.pdf",
        idCliente: null,
        idFactura: null,
        idUsuario: null,
        mensajesri: "Mensaje del SRI",
        puntoemision: "PE-001",
        tipoDocumentoMod: "Factura Modificada",
        tipodocumento: "Factura Electrónica"
    };






    const armarFactura = () => {
        let detalleFactura: DetalleFactura[] = []


        carrito.forEach(producto => {

            let detalleFacturaProducto: DetalleFactura = {
                calle: "Valor para calle",
                codigoCantonMatriculacion: "Valor para codigoCantonMatriculacion",
                detAtributo: "",
                detCamvcpn: "",
                detCantidad: 0,
                detCantpordescuento: 0,
                detCodIva: "",
                detCodPorcentaje: "",
                detCodTipoVenta: "",
                detDescripcion: "",
                detIva: 0,
                detPordescuento: 0,
                detSerialvin: "",
                detSubtotal: 0,
                detSubtotaldescuento: 0,
                detSubtotaldescuentoporcantidad: 0,
                detTarifa: 0,
                detTipoVenta: "",
                detTotal: 0,
                detTotalconiva: 0,
                detTotaldescuento: 0,
                detTotaldescuentoiva: 0,
                detValdescuento: 0,
                detValorIce: 0,
                idDetalle: 0,
                idFactura: null, // O ajusta el valor según tus necesidades
                idProducto: producto,
                interseccion: "",
                numero: "",
                numerotel: "",
                provincia: "",
                tipoIdentificacionPropietario: "",
                tipodir: "",
                tipotel: "",
            };

            detalleFactura.push(detalleFacturaProducto)
        });

        factura.cod_tipoambiente = carrito[0].codTipoambiente

        let facturaAll: FacturaAll = {
            detalleFactura, factura
        }

        crearFactura(facturaAll)
    }


    const numeroTelefono = '593989383795';
    const mensaje = '¡Hola! ¿En qué puedo ayudarte?';

    const abrirWhatsAppNavegador = () => {
        const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(JSON.stringify(carrito))}`;
        window.open(url, '_blank');
    };

    const shareViaWhatsApp = () => {
        // Define el mensaje que deseas compartir
        const message = '¡Hola desde mi aplicación Ionic con React!';

        // Usa el método shareViaWhatsApp para compartir el mensaje en WhatsApp
        SocialSharing.shareViaWhatsApp(message).then(() => {
            console.log('Mensaje compartido en WhatsApp con éxito');
            Swal.fire({
                icon: 'success',
                title: 'Atención!',
                text: 'Mensaje compartido en WhatsApp con éxito',
                timer: 1000
            });
        }).catch((error) => {
            console.error('Error al compartir en WhatsApp:', error);
            Swal.fire({
                icon: 'error',
                title: 'Mensaje no enviado!',
                text: error,
                timer: 1000
            });
        });
    };


    useEffect(() => {

        const carritoGuardado = localStorage.getItem('carrito');
        if (carritoGuardado) {
            setCarrito(JSON.parse(carritoGuardado));
            console.log("carrito",carrito)
        }
    }, [history.location.pathname]);



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
                        <span onClick={armarFactura} className="boton"> {/* Usa Link en lugar de <a> */}
                            <IonIcon style={{ color: "red" }} icon={documentTextSharp} />
                            <IonLabel >PDF</IonLabel>
                        </span>
                        <span className="boton" onClick={shareViaWhatsApp}> {/* Usa Link en lugar de <a> */}
                            <IonIcon style={{ color: "green" }} icon={handLeftSharp} />
                            <IonLabel>WhatsApp app</IonLabel>
                        </span>

                        <span className="boton" onClick={abrirWhatsAppNavegador}> {/* Usa Link en lugar de <a> */}
                            <IonIcon style={{ color: "green" }} icon={handLeftSharp} />
                            <IonLabel>WhatsApp navegador</IonLabel>
                        </span>
                    </div>
                </div>

                <br /><br /><br /><br /><br /><br /><br /><br />

                {carrito.map((producto, index) => (
                    <IonCard key={index} className='card'>
                        <div className="producto">

                            <div className="detalle">
                                <img src={producto.prodServletUrl} alt="" />

                                <div className="info">
                                    <div className="titulo">
                                        <span>{producto.prodNombre}</span>
                                    </div>
                                    <div className="costo">
                                        <span >$ {producto.prodCostoPreferencial}</span>
                                        <div className="footer">
                                            <IonIcon style={{ color: "green" }} icon={addCircle} />
                                            <span>1</span>
                                            <IonIcon style={{ color: "red" }} icon={removeCircle} />
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </IonCard>))}
            </IonContent>
        </IonPage>
    )
}

export default CarritoPage;