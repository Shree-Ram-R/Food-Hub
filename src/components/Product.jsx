import React from 'react'
import { FaShippingFast, FaStar } from 'react-icons/fa';
const Product = ({res,cart,setCart}) => {
    const addCart=()=>{
        setCart([...cart,res])
    }
    const removeCart=()=>{
        setCart(cart.filter((c)=>c.id!==res.id))
    }
  return (
    <>
        <img className='res-img' src={res.image} alt={res.name} />
        <h5 className='price'>{res.price}</h5>
        <div className="foodPrice"><h4>{res.food}</h4>
        </div>
        
        <div className="namRat"> <h4>{res.name}</h4>
        <h4><FaStar/>{res.rating}</h4></div>
        {cart.includes(res)?(<button  className='remove' onClick={removeCart}>Remove Cart</button>):(<button className='add' onClick={addCart}>Add Cart</button>)}
    </>
  )
}

export default Product