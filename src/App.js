
import './App.css';
// import OneSignal from 'react-onesignal';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext, useEffect } from 'react';

import { ToastProvider } from 'react-toast-notifications';
import { Notifications } from 'react-push-notification';




function App() {

  // useEffect(() => {
  //   async function OnesignalInit(){

  //     await OneSignal.init({ appId: '81b3dde3-4590-4748-876d-1446f90f66c5', allowLocalhostAsSecureOrigin: true});
  //   }
  //   OnesignalInit();
  // })

  return (
    <div>
      <ToastProvider>

        <Notifications />
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      </ToastProvider>
    </div>
  );
}

export default App;
