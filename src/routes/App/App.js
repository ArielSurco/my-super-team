import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from '../../components/Layout/Layout';
import { Home } from '../Home/Home';
import { Login } from '../Login/Login';
import { Error404 } from '../Error404/Error404';
import { useUserState } from '../../hooks/useUserState';
import { PrivateRoute } from '../../components/PrivateRoute/PrivateRoute';
import { SessionProvider } from '../../context/SessionContext';

const App = () => {  
  const { session } = useUserState();
  console.log(session);

  return ( 
    <SessionProvider>
      <Router>
        <Layout>
            <Switch>
                <PrivateRoute exact path="/" component={Home}/>
                <Route exact path="/login">
                  <Login/>
                </Route>
                <Route component={Error404} />
            </Switch>  
        </Layout>      
      </Router>
    </SessionProvider>
  )
}

export default App;