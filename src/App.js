
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from './context/authContext';
import { ToastProvider } from 'react-toast-notifications';
import { Notifications } from 'react-push-notification';

function App() {

  const {user}=useContext(authContext);
  return (
    <div>
      <ToastProvider>
    
          <Notifications/>
      <Router>
        <Routes>
          <Route exact path="/" element={user?<Home />:<Login/>}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
      </ToastProvider>
    </div>
  );
}

export default App;
