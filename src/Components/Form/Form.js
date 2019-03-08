import React, { Component } from 'react';


class Form extends Component {
    constructor(){}
    super()

    this.state = {
        imgURL: '',
        name: '',
        price: '',
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
        event.preventDefault();
        this.setState({
            imgURL: '',
            name: '',
            price: '',
            
        })
    }

    render() { 

        return ( 
            <div>
                <form>
                    <input type="text" placeholder="name" onChange={(event) => this.hangleNameChange(event)} />
                    <input type="text" placeholder="img url" onChange={(event) => this.hangleImgChange(event)} />
                    <input type="text" placeholder="price" onChange={(event) => this.hanglePriceChange(event)} />
                    <button>Add to inventory</button>
                    <button onClick={(event) => this.resetState(event)}>Cancel</button>
                </form>
            </div>
         );
    }
}
 
export default Form;