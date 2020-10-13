import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { createOutline, listCircleOutline, personCircleOutline, searchOutline, trendingUpOutline } from 'ionicons/icons'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';


import {
  Home, Trending, Submit, Search, Profile
} from './pages';
import routes from './navigation/routes';

/* Theme variables */
import './theme/variables.css';

const App = () => {

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path={routes.home} component={Home} exact={true} />
            <Route path={routes.trending} component={Trending} />
            <Route path={routes.submit} component={Submit} />
            <Route path={routes.search} component={Search} />
            <Route path={routes.profile} component={Profile} />
            <Route exact path="/" render={() => <Redirect to={routes.home} />} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom" >
            <IonTabButton tab="home" href={routes.home} >
              <IonIcon icon={listCircleOutline} />
              <IonLabel>Hunt</IonLabel>
            </IonTabButton>
            <IonTabButton tab="trending" href={routes.trending} >
              <IonIcon icon={trendingUpOutline} />
              <IonLabel>Trending</IonLabel>
            </IonTabButton>
            <IonTabButton tab="submit" href={routes.submit} >
              <IonIcon icon={createOutline} />
              <IonLabel>Submit</IonLabel>
            </IonTabButton>
            <IonTabButton tab="search" href={routes.search} >
              <IonIcon icon={searchOutline} />
              <IonLabel>Search</IonLabel>
            </IonTabButton>
            <IonTabButton tab="profile" href={routes.profile} >
              <IonIcon icon={personCircleOutline} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
