import { Redirect, Route } from "react-router"
import EmpleosPage from "../pages/Empleos"
import VacantePage from "../pages/Vacante"
import { IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs } from "@ionic/react"
import { library, playCircle, radio, search } from "ionicons/icons"
const Empleos: React.FC = () => {

    return (
        <>

            <Route path="/tienda/empleo/vacantes">
                <EmpleosPage />
            </Route>
            <Route path="/tienda/empleo/postulacion/:idVacante">
                <VacantePage />
            </Route>
            <Route exact path="/tienda/empleo">
                <Redirect to="/tienda/empleo/vacantes" />
            </Route>



        </>
    )

}

export default Empleos