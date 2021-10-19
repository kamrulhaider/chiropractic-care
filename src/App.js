import './App.css';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Therapies from './pages/Therapies/Therapies';
import NotFound from './components/NotFound/NotFound';
import Details from './pages/Details/Details';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Firebase/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/Login/Firebase/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div>
      <AuthProvider>
        {/* Router start */}
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/therapies">
              <Therapies></Therapies>
            </Route>
            <PrivateRoute path="/details/:therapyId">
              <Details></Details>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
