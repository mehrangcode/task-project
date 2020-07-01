import React from 'react';
import './Styles/main.css';
import { useSelector } from 'react-redux';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import Panel from './Components/Panel/Panel';

function App() {

  const auth = useSelector(state => state.auth)
  return (
    <div className="App">
      
      {auth.isAuth ? (
        <Panel />
      ) : (
        <div className="authBlock">
          <Register />
          <Login />
        </div>
      )}
    </div>
  );
}

export default App;
