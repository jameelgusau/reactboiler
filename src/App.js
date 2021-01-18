import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './AppSrc/views/Pages/Login/Login';


const App = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" name="Login" component={Login} />
      </Switch>
    </Router>
  </div>
);

export default App;
