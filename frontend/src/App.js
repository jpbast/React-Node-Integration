import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Mural from './components/Mural';
import PrivateRoute from './components/PrivateRoute';
import './styles/default.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/mural" component={Mural} />
      </Switch> 
    </Router>
  );
}

export default App;
