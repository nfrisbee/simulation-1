import React from 'react';

export default class Dashboard extends Component {
    render() { 

        const mappedInvList = this.props.inventoryList.map((product, index) => {
            return <Product key={product.name} product={product}/>
        });
        
        return ( 
            <div>
                {mappedInvList}
            </div>
         );
     }
}
 


