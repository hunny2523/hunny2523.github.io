
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from './context/authContext';


function App() {

  const {user}=useContext(authContext);
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={user?<Home />:<Login/>}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
