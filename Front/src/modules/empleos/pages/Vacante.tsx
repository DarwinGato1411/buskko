import { useParams } from "react-router";
import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonLabel, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonIcon } from '@ionic/react';
import { logoWhatsapp } from 'ionicons/icons';
import '../styles/Vacante.scss'
import logo from '../../../assets/img/Amazon-logo.png'

interface VacanteParams {
    idVacante: string;
}

const VacantePage: React.FC = () => {

    const { idVacante } = useParams<VacanteParams>()
    return (
        <IonPage className="vacantePage">
            <IonHeader>
                <IonToolbar>
                    <IonTitle></IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent >
                <div className="contenedorVacante">


                    <div className="header">
                        <div className="title"><span>{idVacante}</span></div>
                        <div className="logo"><img src={logo} alt="" /></div>
                        <div className="notificacion">

                            <button>
                                <IonIcon className="icono" icon={logoWhatsapp} />
                                <IonLabel class="texto">Información</IonLabel>
                            </button>
                        </div>
                    </div>
                    <div className="infoContent">
                        <div className="info">
                            <span className="titulo">FUNCIONES:</span>
                            <span>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Libero beatae reiciendis possimus doloribus
                                qui eius facere officiis delectus. Officiis magnam
                                molestiae nulla in fugiat ipsa quae, minus harum et
                                necessitatibus.
                            </span>
                        </div>
                        <div className="info">
                            <span className="titulo">REQUISITOS:</span>
                            <span>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Libero beatae reiciendis possimus doloribus
                                qui eius facere officiis delectus. Officiis magnam
                                molestiae nulla in fugiat ipsa quae, minus harum et
                                necessitatibus.
                            </span>
                        </div>

                    </div>
                    <IonButton className="submit">Postular</IonButton>
                </div>
            </IonContent>
        </IonPage>
    )

}

export default VacantePage