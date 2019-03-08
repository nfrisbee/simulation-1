import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

// Components
import Product from './Components/Product/Product';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';


class App extends Component {
  constructor(){
    super();

    this.state = {
      inventoryList: [
      ]
    }
  };


//Component Lifecycle Methods
  componentDidMount(){
    this.getProducts();
  };


//Methods
  getProducts = () => {
    axios.get('/api/inventory').then(response => {
      this.setState({
        inventoryList: response.data
      })
    })
  };


  render() {
    return (
      <div className="App">
        <Product />
        <Dashboard inventoryList={this.state.inventoryList}/>
        <Form />
        <Header />
      </div>
    );
  }
}

export default App;
