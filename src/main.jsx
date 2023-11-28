import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ProviderLayer from './ProviderLayer.jsx'
import { FirebaseAppProvider } from 'reactfire'

const firebaseConfig = {
  apiKey: "AIzaSyAiWGbA0K1VLS1nMaToTmM7m76mV24M2AE",
  authDomain: "watch-it2.firebaseapp.com",
  projectId: "watch-it2",
  storageBucket: "watch-it2.appspot.com",
  messagingSenderId: "140763212875",
  appId: "1:140763212875:web:9c6dfbc4e5a529634cf1ce"
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
