import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import store from './redux/state';





const  App = (props) => {

 let Some = () => < Dialogs store = { props.store } state = { props.state.dialogsPage } />
 /* let Some = () => < Dialogs dialogs = { props.state.dialogsPage.dialogs } messages = { props.state.dialogsPage.messages}/> */
  
  return (
      <div className = 'app-wrapper'>
        
        <Header /> 
        <Navbar />    
        <div className = 'app-wrapper-content'>

            {/*Три варианта взаимодействия с Route */}
            {/*   1.  <Route path = '/dialogs' component = {Dialogs}/>
            <Route path = '/profile' component = {Profile}/> 

                  2. */}
            <Route path = '/dialogs' render = { Some }/>

                {/*3. */}
            <Route path = '/profile' 
                  render = { () => < Profile 
                                        profilePage = { props.state.profilePage } 
                                        dispatch = { props.dispatch } 
                                        
                                        Example = { props.Example } />}
            />
            <Route path = '/news' render = { () => < News />}/>
            <Route path = '/music' render = { () => < Music />}/>
            <Route path = '/settings' render = { () => < Settings /> }
        />
            
            
        </div>
        {/* <Profile /> */}
      </div>
  
  );
}
 


export default App;
