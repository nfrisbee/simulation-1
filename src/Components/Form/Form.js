import React, { Component } from 'react';


export default Form(props){

 return (
     <div>
         <div className='defaultImage' style=
            <form>
                <label>Image URL</label>
                    <input placeholder='image URL' 
                    type='text' 
                    name='imageURL' 
                    onChange={props.handleChange} />
                <label>Product Name</label>
                    <input placeholder='product name' 
                    type='text' 
                    name='productName' 
                    onChange={props.handleChange} />
                <label>Price</label>
                    <input placeholder='price' 
                    type='text' 
                    name='price' 
                    onChange={props.handleChange} />
                <button className="Cancel" type='reset'>Cancel</button>
                <button className="Add" type='add'>Add</button>
             </form>
     </div>
);
}



