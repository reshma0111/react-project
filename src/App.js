import React,{Component} from 'react';
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from './Context'
import './App.css';

import Contacts from './components/contactss/Contacts';
import AddContact from './components/contactss/AddContact';
import EditContact from './components/contactss/EditContact';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';
function App() {
  return (
  <Provider>
<Router>
  
    <div className="App">
      <Header branding = "Contact Manager"/>
    
     {/* <Contact name='Reshma'
            email='rreshma11@hmail.com'
            phone= '333-3444-444'
/> */}
<Switch>
  <Route exact path ="/" component ={Contacts}></Route>
  <Route exact path ="/about" component ={About}/>
  <Route exact path ="/add" component ={AddContact}/>
  <Route exact path ="/edit/:id" component ={EditContact}/>
  <Route exact path ="/test" component ={Test}/>
  <Route component ={NotFound}/>
</Switch>
</div>



</Router>
</Provider>
   
  );
}

export default App;
