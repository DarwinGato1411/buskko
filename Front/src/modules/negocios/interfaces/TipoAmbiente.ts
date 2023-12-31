import { Usuario } from "./Usuario";

export interface TipoAmbiente {
    amAgeRet: boolean;
    amAutorizados: string;
    amCiudad: string;
    amCodigo: string;
    amCodigoIce: string;
    amComprobanteImprime: string;
    amContrEsp: boolean;
    amDescripcion: string;
    amDevueltos: string;
    amDirAts: string;
    amDirBaseArchivos: string;
    amDirReportes: string;
    amDirXml: string;
    amDireccionMatriz: string;
    amDireccionSucursal: string;
    amEnviocliente: string;
    amEstab: string;
    amEstado: boolean;
    amExp: boolean;
    amFirmados: string;
    amFolderFirma: string;
    amGenerados: string;
    amGeneral: boolean;
    amGiro: string;
    amGrabaIce: boolean;
    amHost: string;
    amIdEmpresa: number;
    amMicroEmp: boolean;
    amNoAutorizados: string;
    amNombreComercial: string;
    amNroContribuyente: string;
    amPassword: string;
    amPort: string;
    amProtocol: string;
    amPtoemi: string;
    amRazonSocial: string;
    amRimpe: boolean;
    amRuc: string;
    amSecFactura: number;
    amSecGuia: number;
    amSecNotaCredito: number;
    amSecRetencion: number;
    amTelefono: string;
    amTipoEmision: string;
    amTrasmitidos: string;
    amUnidadDisco: string;
    amUrlsri: string;
    amUsuarioSmpt: string;
    amUsuariosri: string;
    amValorIce: number;
    amValorIva: number;
    am_DirImgPuntoVenta: string;
    codTipoambiente: number;
    idUsuario: Usuario;
    llevarContabilidad: string;
}