import React from 'react';
import './App.css';
import Profile from './Profile/Profile';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import DialogsContainer from './Dialogs/DialogsContainer';
import { Switch, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
      <div className="app_wrapper">
        <Header />
        <Navbar />
        <div className='app_wrapper_content'>
          <Routes>
            <Route  path="/profile" element= { <Profile /> }/>
            <Route  path="/dialogs" element= { <DialogsContainer /> }/>
          </Routes>
        </div> 
      </div>
     );
}

export default App;