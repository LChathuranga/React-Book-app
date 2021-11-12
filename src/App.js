import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import NavBar from './components/navBar';

function App() {
  return (
    <Router>
        <div className="container-fluid">
        <NavBar/>
        <Switch>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
