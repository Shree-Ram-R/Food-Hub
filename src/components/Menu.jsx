import React from 'react'
import { FaShippingFast, FaStar } from 'react-icons/fa';
import "./menu.css"

const Menu = () => {
  const resta = [
    {
      id: 1,
      food:"Loaded Bread Stix",
      price:"₹99",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/o0zibtrbtyjwznptrsgy",
      name:"Pizza Hut",
      
      rating:4.2,
      

    },
    {
      id: 2,
      food:"Corn & Cheese Pizza",
      price:"₹159",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/ckbnw98n6tffy50wvuzm",
      name:"Pizza Hut",
      rating:4.2,
      

    },
    {
      id: 3,
      food:"Tandoori Paneer Pizza",
      price:"₹209",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/s5ld93rsknx0fhj6xarn",
      name:"Pizza Hut",
      rating:4.2,
      

    },
    {
      id: 4,
      food:"Sausage Pizza",
      price:"₹209",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/aylqpxx08pltowbzxhd3",
      name:"Pizza Hut",
      rating:4.2,
      

    },
    {
      id: 5,
      food:"Murg Malai Chicken",
      price:"₹239",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/t1stinhga3alitdpr6yt",
      name:"Pizza Hut",
      rating:4.2,
      

    },
    {
      id: 6,
      food:"Spicy Baked Chicken",
      price:"₹239",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/aeems3ogejdzxfjblkx7",
      name:"Pizza Hut",
      rating:4.2,
      

    },
    {
      id: 7,
      food:"Loaded Chicken BBQ",
      price:"₹239",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/5410d354e29d05ebbdc0337436c1f67e",
      name:"Pizza Hut",
      rating:4.2,
      

    },
    {
      id: 8,
      food:"Mini Treat",
      price:"₹599",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/c09a7c9a2104893edc7c800a1f38d858",
      name:"The Belgian Waffle Co.",
      rating:4.6,
       
    },
    {
      id: 9,
      food:"Best Of The Best",
      price:"₹660",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/fc529e8c5a543ceb729d7786d1b01858",
      name:"The Belgian Waffle Co.",
      rating:4.6,
       
    },
    {
      id: 10,
      food:"Chocolate Waffle Cake",
      price:"₹580",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/g7v2sn7eezaricdwqcfz",
      name:"The Belgian Waffle Co.",
      rating:4.6,
       
    },
    {
      id: 11,
      food:"Blazing Chicken Pizza",
      price:"₹548",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/10/17/ac6f8b27-ee28-46b6-b106-226976ad2008_5e3d3531-285b-472c-8a89-94b69b24337c.jpg",
      name:"Domino's Pizza",
      rating:4.3,
       
    },
    {
      id: 12,
      food:"Blazing Onion Pizza",
      price:"₹428",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/10/17/670e0759-e3b2-470d-963f-124a362528bf_0dba27c7-1b9c-40c3-8b41-d9a16d3fd02e.jpg",
      name:"Domino's Pizza",
      rating:4.3,
       
    },
    {
      id: 13,
      food:"Chicken Delight Burst",
      price:"₹678",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/10/17/83cc07f2-9ae3-4bbd-a303-1c26d87a2bbc_ae0da352-da9d-4942-a23b-332e554b03c9.jpg",
      name:"Domino's Pizza",
      rating:4.3,
       
    },
    
    {
      id: 14,
      food:"Cheesy American BBQ",
      price:"₹299",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/9/4718095a-49f3-4187-bf43-399f691ab36e_c981dc74-f278-4d81-a1fb-a23ff33da533.png",
      name:"Subway",
      rating:4.0,
       
    },
    {
      id: 15,
      food:"Chicken Keema Melt",
      price:"₹279",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/9/4f573dca-8418-445e-8e20-74422a632e24_c7127eea-abae-40df-a2b8-2f10278e63cd.png",
      name:"Subway",
      rating:4.0,
       
    },
    {
      id: 16,
      food:"Aloo Patty Sandwich",
      price:"₹209",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/11/f31bdc74-69db-4496-8dfa-f22b6f68a921_82efe8de-0dd9-4cf1-b80e-fcac3ce617af.png_compressed",
      name:"Subway",
      rating:4.0,
       
    },
    {
      id: 17,
      food:"Roasted Chicken Sandwich",
      price:"₹250",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/11/fc96ff79-438b-4167-9b56-2324a8171816_690d2a2b-f894-4677-8900-12467fe771f7.png_compressed",
      name:"Subway",
      rating:4.0,
       
    },
    {
      id: 18,
      food:"Double Chicken Roll",
      price:"₹168.57",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/ebcda29a62123bbf8bb8a33bbe2ab847",
      name:"KFC",
      rating:4.3,
       
    },
    {
      id: 19,
      food:"Double chicken Roll Meal ",
      price:"₹379.05",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/5/17/00af9641-700d-462f-890f-47e358b63bfb_68cecb16-fd2a-4d7d-9392-b5f83d72eaaf.jpg",
      name:"KFC",
      rating:4.3,
       
    },
    {
      id: 20,
      food:"Classic Roll",
      price:"₹100",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/ebd8e706049e4fd5ca79ecf708f8ecba",
      name:"KFC",
      rating:4.3,
       
    },
    {
      id: 21,
      food:"Spicy Chicken Meal",
      price:"₹368.57",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/5/16/97be0ab8-8b40-41fc-926d-5a0da1feda91_b258475e-5a12-46d1-a5a5-618b3c49e62e.jpg",
      name:"KFC",
      rating:4.3,
       
    },
    {
      id: 22,
      food:"Spicy Zinger Burger",
      price:"₹219.05",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/13/c399fbf4-8312-48c0-b661-fa2e052845cf_c96b26a6-55c6-43ff-8231-03e6c10cc4b6.jpg",
      name:"KFC",
      rating:4.3,
       
    },
    
    {
      id: 23,
      food:"Briyani",
      price:"₹220",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wqbd9zvrtiwxyqhnmliy",
      name:"Ambur Briyani",
      rating:4.4,
      
    },
    {
      id: 24,
      food:"Saucy  Chicken Wings",
      price:"₹149",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/18/3fa2b21a-5ac9-43a8-9c83-46160d33fa55_dc4b5ac7-afb8-48e4-9c12-d1063e0b237a.jpg",
      name:"Domino's Chicken Fiesta",
      rating:4.2,
       
    },
    {
      id: 25,
      food:"Taco Mexicana",
      price:"₹189",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/118610bb1b497c0090177b709a452636",
      name:"Domino's Chicken Fiesta",
      rating:4.2,
       
    },
    {
      id: 26,
      food:"Saucy Chicken Meatballs",
      price:"₹149",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/18/2463cdb0-c1dd-4a3c-8bb1-449c5f587008_8561339a-aaee-4595-a8f1-2c51499bc92b.jpg",
      name:"Domino's Chicken Fiesta",
      rating:4.2,
       
    },
    {
      id: 27,
      food:"Hot & Fiery Cheesiken",
      price:"₹239",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/7/3/88e1bf2c-3a43-42c1-953a-e3a37e655b7c_57adf83d-154e-4a9b-b01a-9f326eead31f.jpg",
      name:"Domino's Chicken Fiesta",
      rating:4.2,
       
    },
    {
      id: 28,
      food:"Boneless Chicken Basket",
      price:"₹309",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/7/4/7864c235-8882-410e-a47e-15fc70bd5511_b96c1c69-7cf8-41f1-b9c9-e76c17fdaf42.jpg",
      name:"Popeyes",
      rating:4.5,
       
    },
    {
      id: 29,
      food:"Crunch Burger Meal",
      price:"₹328",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/5/28/85c79e49-f377-42c3-b43c-54f58a9aeff9_1b2f2b07-5685-4311-881f-138bbc326e72.png",
      name:"Popeyes",
      rating:4.5,
       
    },
    {
      id: 30,
      food:"Hot & Fiery Cheesiken ",
      price:"₹289",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/8/18/e9a2c563-4a68-4934-951d-759187bc0902_7f4e20ec-a1bd-43df-9398-1752c6a24ae6.jpg",
      name:"Popeyes",
      rating:4.5,
       
    },
    {
      id: 31,
      food:"Chicken Burger",
      price:"₹239",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/11/8/1b6bc170-4d48-4d2f-a771-4467cfc48dd3_9795ec44-4cf6-4998-af77-17eab1a04f28.jpg",
      name:"Popeyes",
      rating:4.5,
       
    },
    {
      id: 32,
      food:"Chicken Burger Combo",
      price:"₹400",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/11/8/9323c569-515a-4cf5-ab60-3cb0e97ee085_c507594a-a26c-41eb-9854-2de1ed331794.jpg",
      name:"Popeyes",
      rating:4.5,
       
    },
    {
      id: 33,
      food:"Hot Chicken Burger",
      price:"₹200",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/040a6212-eeb7-40d2-b8b7-d705599b97b5_664040.jpg",
      name:"Burger King",
      rating:4.2,
       
    },
    {
      id: 33,
      food:"Burger Wraps",
      price:"₹200",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/7/27/ee2bb107-5603-4be5-8b58-86534ffccf0b_bb45a561-950e-41a8-9095-4a4041ce5e93.jpeg",
      name:"Faasos-Signature Wraps&....",
      rating:4.2,
       
    },
    {
      id: 34,
      food:"Garlic Manchurian Wrap ",
      price:"₹220",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/15/af5b150d-e59c-4018-a78f-73151de78ef1_6c35e0ba-668b-4e12-91cc-41c6187dc208.jpeg",
      name:"Faasos-Signature Wraps&....",
      rating:4.2,
       
    },
    {
      id: 35,
      food:"Smoky  Shawarma combo",
      price:"₹379",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/11/b7684420-c68a-4ed5-a0d6-d73f1fc84d85_d1cd389c-fdb3-498a-98d6-a113c46fbf32.jpeg",
      name:"Faasos-Signature Wraps&....",
      rating:4.2,
       
    },
    {
      id: 36,
      food:" Alphonso Ice Cream",
      price:"₹380",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/h8uh8fb7gvbipfhpbuzp",
      name:"Baskin Robbins-Ice Cream...",
      rating:4.2,
       
    },
    {
      id: 37,
      food:"Briyani",
      price:"₹230",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f60a7f94250ee888893cf2c1a546e732",
      name:"SS Hyderabad Briyani",
      rating:4.2,
       
    },
    {
      id: 38,
      food:"Smoky Chicken warps combo",
      price:"₹379",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/119c8f39-b82b-43b6-8d06-e0eb959a33d7_364920.JPG",
      name:"Faasos-Wraps,Rolls&....",
      rating:4.2,
       
    },
    {
      id: 39,
      food:"Crsipy Chicken Sandwich",
      price:"₹100",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/aabvgaoaldfyo4ckxd81",
      name:"Sandwich Club",
      rating:4.5,
       
    },
    
    
    
  ];
return (
  <div className="menu">
    <div className='restaurant'>
    {
    resta.map((res)=>(
      <div key={res.id} className="product1">
        <img className='res-img' src={res.image} alt={res.name} />
        <h5 className='price'>{res.price}</h5>
        <div className="foodPrice"><h4>{res.food}</h4>
        </div>
        
        <div className="namRat"> <h4>{res.name}</h4>
        <h4><FaStar/>{res.rating}</h4></div>
        <button>Add Cart</button>
      </div>
    ))}

</div>
  </div>

  )
}

export default Menu