import axios from 'axios'

const ruta = "http://31.220.72.116:9088/api"



interface empresa {
    nombreEmpresa: string
}

interface ApiResponse {
    status: number;
    message: string;
    data: null;
}

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



export const obtenerEmpresas = async (empresa: empresa) => {
    try {
        console.log(empresa)
        const respuesta: ApiResponse = await axios.post(`${ruta}/empresas/`, empresa);

        if (respuesta.status === 200) {
            console.log('Consulta de empresas exitoso:', respuesta.data);
            return respuesta;
        } else if (respuesta.status === 400) {
            console.error('Error en la solicitud:', respuesta.status);
            // Puedes manejar el error aquí, por ejemplo, mostrar un mensaje de error al usuario.
            throw new Error('Error en la solicitud: No hay empresas');
        } else {
            console.error('Respuesta con estado inesperado:', respuesta.status);
            throw new Error('Error inesperado al enviar datos');
        }
    } catch (error) {
        console.error('Error al consultar las empresas', error);
        throw error;
    }
}