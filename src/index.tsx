import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './state';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import api_keys from './apikeys';

Sentry.init({
  dsn: api_keys.sentry_dsn,
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

var firebaseConfig = {
  apiKey: api_keys.firebase_api_key,
  authDomain: api_keys.firebase_auth_domain,
  databaseURL: api_keys.firebase_database_URL,
  projectId: api_keys.firebase_project_id,
  storageBucket: api_keys.firebase_storage_bucket,
  messagingSenderId: api_keys.firebase_messaging_sender_id,
  appId: api_keys.firebase_app_id,
  measurementId: api_keys.firebase_measurement_id,
  origin: "*",
  mode: 'no-cors'
};

const fireBaseApp = firebase.initializeApp(firebaseConfig);


export const database = fireBaseApp.database();


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

defineCustomElements(window);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
registerServiceWorker();
