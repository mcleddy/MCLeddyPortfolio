import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/navbar.jsx";
import { Switch, Route } from "react-router-dom"
import Resume from './component/Resume.jsx';
import Error from './component/test';

function App() {
  return (
    <>
      <Switch>
     <Route exact path="/" component={Navbar} />
        <Route exact path="/resume" component={Resume} />
        <Route  exact path="/error" component={Error}/>  
         
      </Switch>
    </>
  );
}


export default App;
