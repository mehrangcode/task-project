import React from 'react';
import './Styles/main.css';
import { useSelector } from 'react-redux';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';

function App() {

  const auth = useSelector(state => state.auth)
  return (
    <div className="App">
      
      {auth.isAuth ? "User Is Auth" : (
        <div className="authBlock">
          <Register />
          <Login />
        </div>
      )}
    </div>
  );
}

export default App;
