import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import Product from './Components/Product/Product';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';


class App extends Component {
  constructor(props){
    super(props)

      this.state={
        imageURL: '',
        productName: 'nameholder',
        price: '$300'
      };

  };


  handleChange = (event) => {
    this.setState({ [event.target.name]:event.target.value })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('lasagna is just pasta cake')
  };



  render() {
    return (
      <div className="App">
        <Product />
        <Dashboard />
        <Form />
        <Header />
      </div>
    );
  }
}

export default App;
