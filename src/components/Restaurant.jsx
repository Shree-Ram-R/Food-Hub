import React from 'react'

const Restaurant = () => {
    const resta = [
        {
          id: 1,
    
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/ada9dd71-dbe7-4e21-928a-3388f7cef91b_559820.jpg",
    
        },
        {
          id: 2,
    
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5116a385bac0548e06c33c08350fbf11",
    
        },
        {
          id: 3,
    
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/06315894-32fc-4d85-9bc6-9360f7827b6d_80481.JPG",
    
        },
        {
          id: 4,
    
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/25/844237e8-affb-4939-a6cd-3a7b02bec8e8_350017.jpg",
    
        },
        {
          id: 5,
    
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/f4ac5814-9ffc-4921-9f3c-216d1d49461f_81246.JPG"
          
        },
        {
          id: 6,
        
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wqbd9zvrtiwxyqhnmliy",
         
        },
        {
          id: 7,
         
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/8/be13f562-38aa-41b1-aaed-056ece24a711_919309.jpg",
          
        },
        {
          id: 8,
      
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/11/45996e90-9d21-48b4-95e9-38b9953e0a4c_782308.jpg",
         
        },
        {
          id: 9,
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/040a6212-eeb7-40d2-b8b7-d705599b97b5_664040.jpg",
        },
        {
          id: 10,
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c583ca6ce40b426797a78ae2ac91f2ec",
        },
        {
          id: 11,
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/h8uh8fb7gvbipfhpbuzp",
        },
        {
          id: 12,
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f60a7f94250ee888893cf2c1a546e732",
        },
        {
          id: 13,
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/119c8f39-b82b-43b6-8d06-e0eb959a33d7_364920.JPG",
        },
        {
          id: 14,
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/aabvgaoaldfyo4ckxd81",
        },
        {
          id: 15,
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cf63bec75de1e2ca7809e07298f0fd69",
        },
        {
          id: 16,
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/13/8260b952-9a70-4afd-a52f-86d971bc0ca4_696605.jpg",
        }
        
      ];
  return (
    <div className='restaurant'>
        {
        resta.map((res)=>(
          <div key={res.id} className="product">
            <img className='res-img' src={res.image} alt={res.name} />
            <h4>Pizza Hut</h4>
          </div>
        ))
      }
    </div>
  )
}

export default Restaurant