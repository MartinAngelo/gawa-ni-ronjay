import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import LoginComponent from './login/login';
import SignupComponent from './signup/signup';
import DashboardComponent from './dashboard/dashboard';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>

        <Route component={LoginComponent}  path="/login" exact/>
        <Route component={SignupComponent}  path="/signup" exact/>

        <Route component={DashboardComponent}  path="/dashboard" exact/>
        

      </Switch>
    </Router>
  );
}

export default App;
