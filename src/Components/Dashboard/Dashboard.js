import React, { Component } from 'react'

//Component
import Product from '../Product/Product';


export default class Dashboard extends Component {
  render() {
    //Map through inv list on props and render the Product component
    const mappedInvList = this.props.inventoryList.map((product, index) => {
        return <Product key={product.name} product={product}/>
    });

    return (
      <div>
          {mappedInvList}
      </div>
    )
  }
}