import './App.css';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import Main from './Containers/Main/Main.js';
import Home from './Containers/Home/Home.js'
import Dashboard from './Containers/Dashboard/Dashboard.js'


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
    </>
  );
}

export default App;
