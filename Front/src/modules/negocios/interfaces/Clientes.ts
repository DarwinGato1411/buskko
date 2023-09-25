import { TipoAmbiente } from "./TipoAmbiente";


export interface Cliente {
    ciudad: string;
    cliApellidos: string;
    cliCedula: string;
    cliClave: string;
    cliCorreo: string;
    cliDireccion: string;
    cliMontoAsignado: number;
    cliMovil: string;
    cliNombre: string;
    cliNombres: string;
    cliRazonSocial: string;
    cliTelefono: string;
    clieFechaRegistro: string;
    clietipo: number;
    codTipoambiente: TipoAmbiente;
    idCliente: number;
    idTipoIdentificacion: TipoIdentificacion;
    nombresCompletso: string;
}



interface TipoIdentificacion {
    idTipoIdentificacion: number;
    tidCodigo: string;
    tidNombre: string;
}