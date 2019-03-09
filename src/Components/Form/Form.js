import React, { Component } from 'react'
import axios from 'axios';

export default class Form extends Component {
    constructor(){
        super()

        this.state = {
            imgURL: '',
            name: '',
            price: '',
            selectedProduct: {}
        }
    }
    //lifecycle hooks
    componentDidMount(){
        const {id} = this.props.match.params;
        this.getProduct(id);
    }

    //methods
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
    getProduct = (id) {
        axios.get(`/api/product/:${id}`).then(response => {
            this.setState({
                console.log(response);
            })
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
            getProducts();
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