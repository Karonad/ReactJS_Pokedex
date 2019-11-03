import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import List from './components/List';
import Nav from './components/Nav';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PokemonElements from './components/PokemonElements';



class App extends React.Component {

  state = {value: ''};
  handleSubmit = this.handleSubmit.bind(this);

  handleSubmit(ev){
      this.setState({
          value: ev.currentTarget.filter.value,
      });
  }

  render(){
    const { value } = this.state;

    return (
      <Router>
        <header>
          <Nav handleSubmit={this.handleSubmit}/>
        </header>
        <Switch>
          <Route path="/:pName" component={PokemonElements} />
          <Route path="/">
              <List search={value}/>
          </Route>
        </Switch>
      </Router>
    
    );
  }
}

export default App;
