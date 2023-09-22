import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import { Route, Redirect } from 'react-router-dom';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <IonContent>
    
      <Route path="/home/subpage1" />
      <Route path="/home/subpage2" />
    
      <Route exact path="/home">
        <Redirect to="/home/subpage1" />
      </Route>
    </IonContent>
  );
};

export default Home;
