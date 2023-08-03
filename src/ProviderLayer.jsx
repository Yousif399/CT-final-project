import { AuthProvider, DatabaseProvider, useFirebaseApp } from 'reactfire'
import App from './App'
import DataProvider from './context/DataProvider'
import { getDatabase } from 'firebase/database'
import { getAuth } from 'firebase/auth'





const ProviderLayer = () => {
  // const app = useFirebaseApp();
  // const database = getDatabase(app);
  // const auth = getAuth(app);


  return (
    <DataProvider>
      {/* <AuthProvider sdk={auth}>
        <DatabaseProvider sdk={database}> */}
          <App />
        {/* </DatabaseProvider>
      </AuthProvider> */}
    </DataProvider>
  )
}

export default ProviderLayer