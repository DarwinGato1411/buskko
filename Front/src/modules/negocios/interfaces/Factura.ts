import { Cliente } from "./Clientes";
import { TipoAmbiente } from "./TipoAmbiente";
import { Usuario } from "./Usuario";
import { Producto } from "./producto";


export interface Factura {
    cod_tipoambiente: TipoAmbiente | null;
    codestablecimiento: string;
    codigoPorcentaje: string;
    estadosri: string;
    faConSinGuia: string;
    facAbono: number;
    facBaseIce: number;
    facClaveAcceso: string;
    facClaveAutorizacion: string;
    facCodIce: string;
    facCodIva: string;
    facDescripcion: string;
    facDescuento: number;
    facDestino: string;
    facEstado: string;
    facFecha: string;
    facFechaAutorizacion: string;
    facFechaCobro: string;
    facFechaCobroPlazo: string;
    facFechaSustento: string;
    facHija: string;
    facIva: number;
    facMadre: string;
    facMoneda: string;
    facMsmInfoSri: string;
    facNotaEntregaProcess: string;
    facNumNotaEntrega: number;
    facNumNotaVenta: number;
    facNumProforma: number;
    facNumero: number;
    facNumeroText: string;
    facPlazo: number;
    facPorcentajeIva: string;
    facSaldo: number;
    facSaldoAmortizado: number;
    facSubsidio: number;
    facSubtotal: number;
    facTipo: string;
    facTipoIdentificadorComprobador: string;
    facTotal: number;
    facTotalBaseCero: number;
    facTotalBaseGravaba: number;
    facUnidadTiempo: string;
    facValorIce: number;
    facValorSinSubsidio: number;
    facpath: string;
    idCliente: Cliente | null;
    idFactura: number | null;
    idUsuario: Usuario | null;
    mensajesri: string;
    puntoemision: string;
    tipoDocumentoMod: string;
    tipodocumento: string;
}


export interface DetalleFactura {
    calle: string;
    codigoCantonMatriculacion: string;
    detAtributo: string;
    detCamvcpn: string;
    detCantidad: number;
    detCantpordescuento: number;
    detCodIva: string;
    detCodPorcentaje: string;
    detCodTipoVenta: string;
    detDescripcion: string;
    detIva: number;
    detPordescuento: number;
    detSerialvin: string;
    detSubtotal: number;
    detSubtotaldescuento: number;
    detSubtotaldescuentoporcantidad: number;
    detTarifa: number;
    detTipoVenta: string;
    detTotal: number;
    detTotalconiva: number;
    detTotaldescuento: number;
    detTotaldescuentoiva: number;
    detValdescuento: number;
    detValorIce: number;
    idDetalle: number;
    idFactura: Factura | null;
    idProducto: Producto | null;
    interseccion: string;
    numero: string;
    numerotel: string;
    provincia: string;
    tipoIdentificacionPropietario: string;
    tipodir: string;
    tipotel: string;
}

export interface FacturaAll {
    detalleFactura: DetalleFactura[];
    factura: Factura;
}