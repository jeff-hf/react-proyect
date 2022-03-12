import './styles/App.scss';
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';
import Lista from './components/Lista/Lista';
import Contacto from './components/Contacto/Contacto';
import {
  BrowserRouter as Router,
  Switch,  Route
} from "react-router-dom";
import React from 'react'
import Button  from './components/Button/Button';
import store  from './components/store/store';
import { Provider } from 'react-redux'


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Nav/>
          <Switch>
            <Route exact path="/">
              <Body/>
            </Route>
            <Route path="/indicar">
              <Button/>
            </Route>
            <Route path="/lista">
              <Lista/>
            </Route>
            <Route path="/contacto">
              <Contacto/>
            </Route>
          </Switch>
          <Footer/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
