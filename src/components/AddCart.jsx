import React, { useState,useEffect } from 'react'
import "./AddCart.css"
const AddCart = ({cart,setCart}) => {
  const [total,setTotal]=useState(0);
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc + parseInt(curr.price)*curr.item,0));
  },[cart]);

  const handleQuantityChange = (id, action) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.id === id) {
          
          return { ...item, item: action === 'increase' ? item.item + 1 : item.item - 1 };
        }
        return item;
      });
      return updatedCart;
    });
  };
  return (
    <>
    <h1 className='heading'>Cart Products</h1>
    <div className='cart-container'>
      {
        cart.map((res)=>(
          <div key={res.id} className="cart-product">
            <div className="pro">
            <div className="img">
          <img src={res.image} alt="img" />
        </div>
        <div className="cart-product-details">
          <h3>{res.food}</h3>
          <p>Price Rs: {res.price}</p>
        </div>
        
        </div>
        <div className='quantity'>
          <h4>Quantity</h4>
          <button
                onClick={() => handleQuantityChange(res.id, 'decrease')}
                disabled={res.item <= 1} 
              >
                -
              </button>
              <span>{res.item}</span>
              <button onClick={() => handleQuantityChange(res.id, 'increase')}>+</button>
           
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