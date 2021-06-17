import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Users from './components/Users/Users';
// import store from './redux/redux-store';
// import Dialogs from './components/Dialogs/Dialogs';




const  App = (/* props */) => {

 let Some = () => < DialogsContainer /* store = { props.store } state = { props.state.dialogsPage } */ />
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
            <Route path = '/users' render = {() => <Users/> } />
            <Route path = '/profile' 
                  render = { () => < Profile 
                                        // store = { props.store }
                                        // profilePage = { props.state.profilePage } 
                                        // dispatch = { props.dispatch } 
                                        
                                         />}
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
