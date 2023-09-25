import axios from 'axios'
import Swal from 'sweetalert2';
const ruta = "http://31.220.72.116:9088/api"

interface UserCredentials {
    usuLogin: string;
    usuPassword: string;
}

interface ApiResponse {
    status: number;
    message: string;
    data: Usuario | null;
}

interface Usuario {
    idUsuario: number | null;
    usuActivaMovil: boolean;
    usuCorreo: string;
    usuDireccion: string;
    usuFechaCaduca: Date;
    usuFechaRegMov: Date;
    usuFechaRegistro: Date;
    usuLogin: string;
    usuNivel: number;
    usuNombre: string;
    usuPassword: string;
    usuRuc: string;
    usuWhatsapp: string;
}



export const loginCliente = async (credenciales: UserCredentials) => {
    try {
        const respuesta: ApiResponse = await axios.post(`${ruta}/login-cliente`, credenciales);

        if (respuesta.status === 200) {
            console.log('Inicio de sesión exitoso:', credenciales, respuesta.data);
            return respuesta;
        } else if (respuesta.status === 400) {
            console.error('Error en la solicitud:', respuesta.status);
            throw new Error('Error en la solicitud: Credenciales incorrectas');
        } else {
            console.error('Respuesta con estado inesperado:', respuesta.status);
            throw new Error('Error inesperado al enviar datos');
        }
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        throw error;
    }
}

export const crearUsuario = async (usuario: Usuario) => {
    try {
        const respuesta = await axios.post(`${ruta}/crearusuario`, usuario);

        if (respuesta.status === 200) {
            console.log('Uusario creado con éxito:', usuario, respuesta.data);
            Swal.fire(
                'Creación exitosa',
                'Usuario creado con éxito',
                'success'
            )
            return respuesta;
        } else if (respuesta.status === 400) {
            console.error('Error en la solicitud:', respuesta.status);
            throw new Error('Error en la solicitud: Credenciales incorrectas');
        } else {
            console.error('Respuesta con estado inesperado:', respuesta.status);
            throw new Error('Error inesperado al enviar datos');
        }
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        throw error;
    }
}