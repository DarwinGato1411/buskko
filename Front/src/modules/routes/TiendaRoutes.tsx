import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Menu from '../UI/Menu';
import PerfilPage from '../perfil/Perfil';
import NegociosRoutes from '../negocios/routes/NegociosRoutes'
import EmpleosPage from '../empleos/pages/Empleos';
import EmpleosRoutes from '../empleos/routes/Empleos';

const TiendaRoutes: React.FC = () => {
    return (
        <>
            <Menu />
            <div className="ion-page" id="main">
                <Route path="/tienda/negocio">
                    <NegociosRoutes />
                </Route>
                <Route path="/tienda/empleo">
                    <EmpleosRoutes/>
                </Route>

                <Route path="/tienda/perfil">
                    <PerfilPage />
                </Route>
                <Route exact path="/tienda">
                    <Redirect to="/tienda/negocio" />
                </Route>
            </div>
            <br />
            <br />
            <br />
            {/* <IonMenuToggle>
                <IonButton>Click to open the menu</IonButton>
            </IonMenuToggle> */}

        </>

    );
};

export default TiendaRoutes;