import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import NegociosPage from '../negocios/pages/Negocios' // Importa tus componentes de subpágina
import CarritoPage from '../carrito/Carrito';
import ProductosPage from '../productos/pages/Productos';
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { businessOutline, cartOutline, library, playCircle, radio, search, timeOutline } from 'ionicons/icons';
//import Menu from '../../UI/Menu';


const NegociosRoutes: React.FC = () => {




    return (
        <>
            {/* <Menu /> */}

            <IonTabs>
                <IonRouterOutlet>
                    <Route path="/tienda/negocio/negocios" component={NegociosPage} />
                    <Route path="/tienda/negocio/carrito">
                        <CarritoPage />
                    </Route>
                    <Route path="/tienda/negocio/productos/:tipoAmbiente">
                        <ProductosPage />
                    </Route>
                    <Route path="/tienda/negocio/historial">
                        <h1>Historial Pedidos</h1>
                    </Route>

                    <Route exact path="/tienda/negocio">
                        <Redirect to="/tienda/negocio/negocios" />
                    </Route>
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="negocios" href="/tienda/negocio/negocios">
                        <IonIcon icon={businessOutline} />
                        <IonLabel>Negocios</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="carrito" href="/tienda/negocio/carrito">
                        <IonIcon icon={cartOutline} />
                        <IonLabel>Carrito</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="historial" href="/tienda/negocio/historial">
                        <IonIcon icon={timeOutline} />
                        <IonLabel>Historial pedidos</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
            {/* <IonMenuToggle>
                <IonButton>Click to open the menu</IonButton>
            </IonMenuToggle> */}

        </>

    );
};

export default NegociosRoutes;