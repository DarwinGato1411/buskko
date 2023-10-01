import axios from 'axios'
import { FacturaAll } from '../modules/negocios/interfaces/Factura';
import Swal from 'sweetalert2';
const ruta = "http://31.220.72.116:9088/api"

interface ApiResponse {
    status: number;
    message: string;
    data: null;
}





export const crearFactura = async (factura: FacturaAll) => {
    try {

        const respuesta: ApiResponse = await axios.post(`${ruta}/factura-guardar/`, factura);

        if (respuesta.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Atención!',
                text: 'Factura creada con éxito',
                timer: 1000
            });
            console.log('factura guardada correctamente:', respuesta.data);
            return respuesta;
        } else if (respuesta.status === 400) {
            Swal.fire({
                icon: 'error',
                title: 'Atención!',
                text: 'La factura no se ha podido crear ' + respuesta.status,
                timer: 1000
            });
            console.error('Error en la solicitud:', respuesta.status);
            // Puedes manejar el error aquí, por ejemplo, mostrar un mensaje de error al usuario.
            throw new Error('Error en la solicitud: No hay empresas');
        } else {
            console.error('Respuesta con estado inesperado:', respuesta.status);
            Swal.fire({
                icon: 'error',
                title: 'Error inesperado al enviar datos!',
                text: 'La factura no se ha podido crear ' + respuesta.status,
                timer: 1000
            });
            throw new Error('Error inesperado al enviar datos');
        }
    } catch (error) {
        console.error('Error al consultar las empresas', error);
        Swal.fire({
            icon: 'error',
            title: 'Error inesperado al enviar datos!',
            text: 'La factura no se ha podido crear ' + error,
            timer: 1000
        });
        throw error;
    }
}
