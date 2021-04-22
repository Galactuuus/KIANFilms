import './App.css';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import Main from './Containers/Main/Main.js';
import { useEffect } from 'react';
import Home from './Containers/Home/Home.js'
import store from './Store/store';
import Dashboard from './Containers/Dashboard/Dashboard.js'


function App() {

  const history = useHistory();

  useEffect(() => {
    store.subscribe(() => {
      if(store.getStore().isLogged === false) history.push('/');
    })
  },[])
  
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
