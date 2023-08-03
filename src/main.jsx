import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ProviderLayer from './ProviderLayer.jsx'
import { FirebaseAppProvider } from 'reactfire'

const firebaseConfig = {
  apiKey: "AIzaSyBmw5k-AM0fyob1jm5Wb8LJ6TaxH4FwvWA",
  authDomain: "watch-it-efa2b.firebaseapp.com",
  databaseURL: "https://watch-it-efa2b-default-rtdb.firebaseio.com",
  projectId: "watch-it-efa2b",
  storageBucket: "watch-it-efa2b.appspot.com",
  messagingSenderId: "1014644936256",
  appId: "1:1014644936256:web:ffd44a675b9fda964f99a5"
};
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <ProviderLayer />
      </FirebaseAppProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
