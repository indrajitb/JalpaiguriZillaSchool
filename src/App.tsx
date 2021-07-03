import { Redirect, Route, Switch } from 'react-router-dom';
import { IonAlert, IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

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
import { isPlatform } from '@ionic/react'
/* Theme variables */
import './theme/variables.css';
import React, { useEffect, useState } from 'react';

import SideMenu from './components/SideMenu';
import TabRootPage from './pages/TabRootPage';
import Posts from './pages/Posts';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Gallery from './pages/Gallery';
import Profile from './pages/Profile';
import { urlBase64ToUint8Array } from './utils/utils';
import { useTypedSelector } from './hooks/useTypesSelector';
import Amplify from 'aws-amplify';
import aws_exports from "./aws-exports";
import AppContext from './state/app-context';
import api_keys from './apikeys';


const App: React.FC = () => {

  const { host } = window.location;

  // console.log('Host: ', host);

  if (aws_exports.oauth.redirectSignIn && aws_exports.oauth.redirectSignIn.includes(',')) {
    const filterHost = url => new URL(url).host === host;
    aws_exports.oauth.redirectSignIn = aws_exports.oauth.redirectSignIn
      .split(',')
      .filter(filterHost)
      .shift();
    aws_exports.oauth.redirectSignOut = aws_exports.oauth.redirectSignOut
      .split(',')
      .filter(filterHost)
      .shift();
  }

  // console.log('SignIn URL: ', aws_exports.oauth.redirectSignIn);
  // console.log('SignOut URL: ', aws_exports.oauth.redirectSignOut);

  const [showAlert, setShowAlert] = useState(false);

  const { loggedIn } = useTypedSelector(state => state.userData);



  function displayConfirmNotification() {
    if ('serviceWorker' in navigator) {
      var options = {
        body: 'You successfully subscribed to our Notification service!',
        icon: '/assets/logo.png',
        image: '/assets/logo.png',
        // dir: 'ltr',
        lang: 'en-US', // BCP 47,
        vibrate: [100, 50, 200],
        badge: '/assets/logo.png',
        tag: 'confirm-notification',//Group notifications; the latest one is kept at the top
        renotify: true,//Vibrate device and alert the user on new notification
        actions: [
          { action: 'confirm', title: 'Okay', icon: '/assets/logo.png' },
          { action: 'cancel', title: 'Cancel', icon: '/assets/logo.png' }
        ]
      };

      navigator.serviceWorker.ready
        .then(function (swreg) {
          swreg.showNotification('Successfully subscribed!', options);
        });
    }
  }

  function configurePushSub() {
    if (!('serviceWorker' in navigator)) {
      return;
    }

    var reg;
    navigator.serviceWorker.ready
      .then(function (swreg) {
        reg = swreg;
        return swreg.pushManager.getSubscription();
      })
      .then(function (sub) {
        if (sub === null) {
          // Create a new subscription
          var vapidPublicKey = api_keys.vapid_public_key;
          var convertedVapidPublicKey = urlBase64ToUint8Array(vapidPublicKey);
          return reg.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: convertedVapidPublicKey
          });
        } else {
          // We have a subscription
        }
      })
      .then(function (newSub) {
        let url = api_keys.firebase_dev_subscroption_url;

        if (aws_exports.oauth.redirectSignIn.includes('localhost')) {
          url = api_keys.firebase_localhost_subscroption_url;
        }

        if (aws_exports.oauth.redirectSignIn.includes('development')) {
          url = api_keys.firebase_dev_subscroption_url;
        }

        if (aws_exports.oauth.redirectSignIn.includes('master')) {
          url = api_keys.firebase_master_subscroption_url;
        }

        if (aws_exports.oauth.redirectSignIn.includes('jalpaiguri')) {
          url = api_keys.firebase_prod_subscroption_url;
        }

        return fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(newSub)
        })
      })
      .then(function (res) {
        if (res.ok) {
          displayConfirmNotification();
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  }


  async function askForNotificationPermission() {

    if (Notification.permission !== "granted") {

      setShowAlert(true);

    } else {
      setShowAlert(false);
    }


  }


  useEffect(() => {

    if (loggedIn) {
      // console.log('Changing auth mode to AMAZON_COGNITO_USER_POOLS');

      Amplify.configure({
        ...aws_exports,
        "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS",
      });
    }
    else {
      // console.log('Changing auth mode to AWS_IAM');

      Amplify.configure({
        ...aws_exports,
        "aws_appsync_authenticationType": "AWS_IAM",
      });
    }


    // Amplify.configure({
    //   ...aws_exports,
    //   "aws_appsync_authenticationType": "AWS_IAM",
    // });

    setTimeout(() => {
      askForNotificationPermission();
    }, 10000);

  }, [loggedIn]);


  return (
    <AppContext.Provider value={{ isDesktop: isPlatform("desktop") }}>
      <IonApp>
        <IonAlert isOpen={showAlert}
          header="Subscribe!"
          message={'Please subscribe to our notifications to stay updated on what\'s happening here!'}
          onDidDismiss={() => { }}
          buttons={[
            {
              text: 'Later',
              role: 'cancel',
              cssClass: 'primary',
              handler: () => {

              }
            },
            {
              text: 'Allow',
              handler: () => {

                Notification.requestPermission(function (result) {

                  if (result !== 'granted') {
                  } else {
                    configurePushSub();
                    displayConfirmNotification();
                  }
                });
              }
            }
          ]}
        />
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <SideMenu />
            <IonRouterOutlet id="main" >
              <Route path="/home" component={TabRootPage} />
              <Route path="/gallery" component={TabRootPage} />
              <Route path="/my/profile" component={TabRootPage} />
              <Route path="/posts" component={TabRootPage} />
              <Route path="/admin" component={TabRootPage} />
              <Route path="/" component={TabRootPage} />
              <Switch>
                <Route path="/home" component={Home} exact />
                <Route path="/gallery" component={Gallery} exact />
                <Route path="/my/profile" component={Profile} />
                <Route path="/posts" component={Posts} />
                <Route path="/admin" component={Admin} />
                <Redirect exact from="/" to="/home" />
              </Switch>
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </IonApp>
    </AppContext.Provider>
  )
}

export default App;