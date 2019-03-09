import React, { Component } from 'react'
import axios from 'axios';

export default class Form extends Component {
    constructor(){
        super()

        this.state = {
            imgURL: '',
            name: '',
            price: ''
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handlePriceChange = (event) => {
        this.setState({
            price: event.target.value
        })
    }

    handleImgChange = (event) => {
        this.setState({
            imgURL: event.target.value
        })
    }

    resetState = () => {
        this.setState({
            imgURL: '',
            name: '',
            price: ''
        })
    }

    createProduct = () => {
        const {imgURL, name, price} = this.state;
        const {getProducts} = this.props;

        const product = {
            imgURL: imgURL,
            name: name,
            price: price
        }
        axios.post('/api/product', product).then(response => {
            this.resetState();
        });

        this.resetState();
    }


  render() {
      console.log(this.state)
    return (
      <div>
        <div>
            <input type="text" placeholder="name" onChange={(event) => this.handleNameChange(event)}/>
            <input type="text" placeholder="img url" onChange={(event) => this.handleImgChange(event)}/>
            <input type="text" placeholder="price" onChange={(event) => this.handlePriceChange(event)}/>
            <button onClick={() => this.createProduct()}>Add to Inv</button>
            <button onClick={() => this.resetState()}>Cancel</button>
        </div>
      </div>
    )
  }
}