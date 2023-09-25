import axios from 'axios'
const ruta = "http://31.220.72.116:9088/api"

interface UserCredentials {
    usuLogin: string;
    usuPassword: string;
}

interface ApiResponse {
    status: number;
    message: string;
    data: UserData | null;
}

interface UserData {
    usuWhatsapp: string,
    usuActivaMovil: string,
    usuFechaRegMov: string,
    usuFechaCaduca: string,
    usuDireccion: string,
    idUsuario: string,
    usuNombre: string,
    usuLogin: string,
    usuPassword: string,
    usuCorreo: string,
    usuNivel: number,
    usuRuc: string,
    usuFechaRegistro: Date
}



export const loginCliente = async (credenciales: UserCredentials) => {
    try {
        const respuesta:ApiResponse = await axios.post(`${ruta}/login-cliente`, credenciales);

        if (respuesta.status === 200) {
            console.log('Inicio de sesión exitoso:',credenciales, respuesta.data);
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