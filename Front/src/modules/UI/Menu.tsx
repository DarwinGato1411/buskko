import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonContent, IonList, IonItem, IonIcon, IonLabel, IonTitle } from '@ionic/react';
import { home, person } from 'ionicons/icons';
import logo from '../../assets/img/logo.png'
import { Link, NavLink } from 'react-router-dom';
import '../styles/Menu.scss'

const Menu: React.FC = () => {
    return (
        <IonMenu className='menuPage' contentId="main">
            <IonHeader>
                <div className='cabecera'>
                    <div className='logo'>
                        <img src={logo} alt="" />
                        <IonTitle>BUSKKO</IonTitle>
                    </div>
                </div>
            </IonHeader>
            <IonContent>
                <div className='menuItem'>

                    <NavLink to="/tienda/negocio"> {/* Usa Link en lugar de <a> */}
                        <IonLabel>Negocio</IonLabel>
                    </NavLink>


                    <NavLink to="/tienda/empleo"> {/* Usa Link en lugar de <a> */}

                        <IonLabel>Empleos</IonLabel>
                    </NavLink>


                    <NavLink to="/tienda/perfil"> {/* Usa Link en lugar de <a> */}

                        <IonLabel>Perfil</IonLabel>
                    </NavLink>
                </div>
                {/* Agrega más elementos de menú para tus subrutas */}

            </IonContent>
        </IonMenu>
    );
};

export default Menu;