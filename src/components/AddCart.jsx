import React, { useState } from 'react'
import "./AddCart.css"
const AddCart = ({cart,setCart}) => {
  const [total,setTotal]=useState(0);
  return (
    <>
    <h1 className='heading'>Cart Products</h1>
    <div className='cart-container'>
      {
        cart.map((res)=>(
          <div className="cart-product">
        <div className="img">
          <img src={res.image} alt="img" />
        </div>
        <div className="cart-product-details">
          <h3>{res.food}</h3>
          <p>Price Rs: {res.price}</p>
        </div>
      </div>
        ))
      }
 
    </div>
    <h2 className='amount'>Total Amount Rs: {total}</h2>
    </>
    
  )
}

export default AddCart