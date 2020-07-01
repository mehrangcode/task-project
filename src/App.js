import React from 'react';
import './Styles/main.css';
import { useSelector } from 'react-redux';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import Panel from './Components/Panel/Panel';
import Navbar from './Components/Navbar/Navbar';
import AuthPanel from './Components/Auth/Auth';

function App() {

  const auth = useSelector(state => state.auth)
  return (
    <div className="App">
      <Navbar />
      {auth.isAuth ? ( <Panel /> ) : ( <AuthPanel />)}
    </div>
  );
}

export default App;
