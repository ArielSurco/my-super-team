import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from '../../components/Layout/Layout';
import { Home } from '../Home/Home';
import { Login } from '../Login/Login';
import { Search } from '../Search/Search';
import { Error404 } from '../Error404/Error404';
import { PrivateRoute } from '../../components/PrivateRoute/PrivateRoute';
import { TeamProvider } from '../../context/TeamContext';

const App = () => {  
  return (
    <TeamProvider>
        <Router>
          <Layout>
              <Switch>
                  <PrivateRoute exact path="/" component={Home}/>
                  <Route exact path="/login">
                    <Login/>
                  </Route>
                  <PrivateRoute exact path="/search" component={Search}/>
                  <Route component={Error404} />
              </Switch>  
          </Layout>      
        </Router>
    </TeamProvider>
  )
}

export default App;