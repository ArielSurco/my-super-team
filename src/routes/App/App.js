import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { Home } from '../routes/Home/Home';
import { Error404 } from './Error404/Error404';

const App = () => {
  return ( 
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={Error404} />
        </Switch>  
      </Layout>      
    </Router>
   );
}

export default App;
