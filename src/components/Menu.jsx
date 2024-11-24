import React, { useState } from 'react'

import "./menu.css"
import { FaCarTunnel } from 'react-icons/fa6';
import Product from './Product';

const Menu = ({cart,setCart,resta}) => {
  
 const [rest]=useState(resta);
 
    
return (
  <div className="menu">
    <div className='restaurant'>
    {
    rest.map((res)=>(
      <div key={res.id} className="product1">
        <Product key={res.id}  res={res} cart={cart} setCart={setCart}/>
      </div>
    ))}

</div>
  </div>

  )
}

export default Menu