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