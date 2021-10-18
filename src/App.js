import './App.css';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Therapies from './pages/Therapies/Therapies';
import NotFound from './components/NotFound/NotFound';
import Details from './pages/Details/Details';


function App() {
  return (
    <div>
      {/* Router start */}
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/therapies">
            <Therapies></Therapies>
          </Route>
          <Route path="/details/:therapyId">
            <Details></Details>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
