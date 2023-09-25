import axios from 'axios'

const ruta = "http://31.220.72.116:9088/api"

interface ApiResponse {
    status: number;
    message: string;
    data: null;
}

interface empresa {
    codTipoambiente: number,
    prodNombre: string
}

interface TipoAmbiente {
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

interface Usuario {
    idUsuario: number;
    usuActivaMovil: boolean;
    usuCorreo: string;
    usuDireccion: string;
    usuFechaCaduca: string; // ¿Esto debería ser de tipo Date?
    usuFechaRegMov: string; // ¿Esto debería ser de tipo Date?
    usuFechaRegistro: string; // ¿Esto debería ser de tipo Date?
    usuLogin: string;
    usuNivel: number;
    usuNombre: string;
    usuPassword: string;
    usuRuc: string;
    usuWhatsapp: string;
}

interface SubCategoria {
    idCategoria: Categoria;
    idSubCategoria: number;
    productoCollection: Producto[] | null;
    subCatDescripcion: string;
}

interface Categoria {
    catNombre: string;
    idCategoria: number;
    subcategoriaCollection: (SubCategoria | null)[];
}

interface Producto {
    codTipoambiente: TipoAmbiente;
    idProducto: number;
    idSubCategoria: SubCategoria;
    pordCostoCompra: number;
    pordCostoPromedioCompra: number;
    pordCostoVentaFinal: number;
    pordCostoVentaRef: number;
    proGlp: string;
    prodAbreviado: string;
    prodCantMinima: number;
    prodCantidadInicial: number;
    prodCodigo: string;
    prodCostoPreferencial: number;
    prodCostoPreferencialDos: number;
    prodCostoPreferencialTres: number;
    prodEsproducto: boolean;
    prodEstado: number;
    prodFactorConversion: number;
    prodFechaRegistro: string;
    prodGrabaIce: boolean;
    prodGrabaIva: boolean;
    prodImprimeCodbar: boolean;
    prodIva: number;
    prodManoObra: number;
    prodNombre: string;
    prodPathCodbar: string;
    prodPorcentajeIce: number;
    prodPrecioSinSubsidio: number;
    prodPrincipal: number;
    prodSubsidio: number;
    prodTieneSubsidio: string;
    prodTrasnporte: number;
    prodUnidadConversion: string;
    prodUnidadMedida: string;
    prodUtilidadDos: number;
    prodUtilidadNormal: number;
    prodUtilidadPreferencial: number;
}



export const consultaProductosPorEmpresas = async (empresa: empresa) => {
    try {
        const respuesta: ApiResponse = await axios.post(`${ruta}/productos/`, empresa);

        if (respuesta.status === 200) {
            console.log('Consulta de prodcutos por empresa exitoso:', respuesta.data);
            return respuesta;
        } else if (respuesta.status === 400) {
            console.error('Error en la solicitud:', respuesta.status);
            // Puedes manejar el error aquí, por ejemplo, mostrar un mensaje de error al usuario.
            throw new Error('Error en la solicitud: No hay prodcutos');
        } else {
            console.error('Respuesta con estado inesperado:', respuesta.status);
            throw new Error('Error inesperado al enviar datos');
        }
    } catch (error) {
        console.error('Error al consultar los prodcutos por emrpresa', error);
        throw error;
    }
}

export const crearProductosPorEmpresas = async (empresa: empresa) => {
    try {
        const respuesta: ApiResponse = await axios.post(`${ruta}/productos-crear-editar/`, empresa);

        if (respuesta.status === 200) {

            return respuesta;
        } else if (respuesta.status === 400) {

            throw new Error('Error en la solicitud: No hay prodcutos');
        } else {

            throw new Error('Error inesperado al enviar datos');
        }
    } catch (error) {
        console.error('Error creación de productos', error);
        throw error;
    }
}