
import React from 'react'
import  { useState } from 'react'
import { FaShippingFast, FaStar } from 'react-icons/fa';

const Product = ({res,cart,setCart}) => {
    
    
    const addToCart = (product) => {
        setCart([...cart, product]);
       
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter((item) => item.id !== productId));
       
    };

    const isInCart = (productId) => {
        return cart.some((item) => item.id === productId);
    };
    
  return (
    <>
        <img className='res-img' src={res.image} alt={res.name} />
        <h5 className='price'>₹{res.price}</h5>
        <div className="foodPrice"><h4>{res.food}</h4>
        </div>
        
        <div className="namRat"> <h4>{res.name}</h4>
        <h4><FaStar/>{res.rating}</h4></div>
        <button  className={isInCart(res.id) ? "remove" : "add"}
                    key={res.id}
                    onClick={() =>
                        isInCart(res.id)
                            ? removeFromCart(res.id)
                            : addToCart(res)
                    }
                >
                    {isInCart(res.id) ? "Remove from Cart" : "Add to Cart"}
                </button></>
  )
}

export default Product