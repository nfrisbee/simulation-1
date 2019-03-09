import React, { Component } from 'react';
import './App.css';

//Components
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import {Route, Switch} from 'react-router-dom';


class App extends Component {


  render() {
    return (
      /*<div className="App">
        <Dashboard inventoryList={this.state.inventoryList} getProducts={this.getProducts}/>
        <Form getProducts={this.getProducts} currentlySelected={this.state.currentlySelected}/>
        <Header />
      </div>*/
  <div>
    <Header />
      <Switch>
        <Route exact path="/" Component={Dashboard}/>
       <Route path="/add" Component={Form}/>
        <Route path="/edit:id" Component={Form}/>
      </Switch>
  </div>
    );
  }
}

export default App;