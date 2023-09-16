import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import NegociosPage from '../negocios/pages/Negocios' // Importa tus componentes de subpágina
import CarritoPage from '../carrito/Carrito';
import ProductosPage from '../productos/pages/Productos';
//import Menu from '../../UI/Menu';

const NegociosRoutes: React.FC = () => {
    return (
        <>
            {/* <Menu /> */}

            <div className="ion-page" id="main">
                <Route path="/tienda/negocio/negocios" component={NegociosPage} />
                <Route path="/tienda/negocio/carrito">
                    <CarritoPage/>
                </Route>
                <Route path="/tienda/negocio/productos">
                    <ProductosPage/>
                </Route>

                <Route exact path="/tienda/negocio">
                    <Redirect to="/tienda/negocio/negocios" />
                </Route>
            </div>
            {/* <IonMenuToggle>
                <IonButton>Click to open the menu</IonButton>
            </IonMenuToggle> */}

        </>

    );
};

export default NegociosRoutes;