
import './App.css';
import OneSignal from 'react-onesignal';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { Notifications } from 'react-push-notification';
import { reminderContext } from './context/RTContext';




function App() {

  const { dispatch } = useContext(reminderContext);

  useEffect(() => {
    async function OnesignalInit() {
      await OneSignal.init({ appId: process.env.REACT_APP_APP_ID, allowLocalhostAsSecureOrigin: true });
      const user = await OneSignal.getUserId();
      dispatch({ type: "SET_USER_ID", payload: user });
    }
    OnesignalInit();
  }, [])

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
