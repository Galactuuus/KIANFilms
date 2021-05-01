import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Main from './Containers/Main/Main.js';
import Home from './Containers/Home/Home.js'
import Dashboard from './Containers/Dashboard/Dashboard.js'
import Footer from './Components/footer/Footer';
import Admin from './Containers/Admin/Admin';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/dashboard" component={Dashboard} exact />
          <Route path="/admin" component={Admin} exact />
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
