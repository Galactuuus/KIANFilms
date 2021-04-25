import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Containers/Main/Main.js';
import Home from './Containers/Home/Home.js'
import Dashboard from './Containers/Dashboard/Dashboard.js'
import Footer from './Components/footer/Footer';


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/dashboard" component={Dashboard} exact />
        </Switch>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
