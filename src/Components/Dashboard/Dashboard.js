import React, { Component } from 'react'
import axios from 'axios';

//Component
import Product from '../Product/Product';


export default class Dashboard extends Component {
    constructor(){
        super();

        this.state = {
            inventoryList: []
        }
    }

     //Component Lifecycle Methods
  componentDidMount(){
    this.getProducts();
  };

    //methods

  getSelectedProduct = (selectedProduct) => {
    this.setstate({
      selectedProduct: selectedProduct
    })
  };

    getProducts = () => {
        axios.get('/api/inventory').then(response => {
          this.setState({
            inventoryList: response.data
          })
        })
      };

    removeProduct = (id) => {
        const {getProducts} = this;

        axios.delete(`/api/product/${id}`).then(response => {
            getProducts();
        });
    };


  render() {
    //Map through inv list on props and render the Product component
    const mappedInvList = this.props.inventoryList.map((product, index) => {
        return <Product key={product.id} product={product} removeProduct={this.removeProduct}/>
    });

    return (
      <div>
          {mappedInvList}
      </div>
    )
  }
}