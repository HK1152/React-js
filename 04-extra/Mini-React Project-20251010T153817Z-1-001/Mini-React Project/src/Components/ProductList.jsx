import React from 'react'
import ProductCard from './ProductCard'
function ProductList({cartCounter}) {
    const products = [
    {
        title: "Noise-Cancelling Headphones",
        price: 9990,
        image: 'https://picsum.photos/id/10/400/300'
    },
    {
        title: "Electric Kettle",
        price: 1850,
        image: 'https://picsum.photos/id/194/400/300'
    },
    {
        title: "Fitness Tracker Smartwatch",
        price: 4200,
        image: 'https://picsum.photos/id/40/400/300'
    },
    {
        title: "Stainless Steel Water Bottle",
        price: 750,
        image: 'https://picsum.photos/id/197/400/300'
    },
    {
        title: "Yoga Mat (Premium)",
        price: 1599,
        image: 'https://picsum.photos/id/1071/400/300'
    },
    {
        title: "Portable Bluetooth Speaker",
        price: 3100,
        image: 'https://picsum.photos/id/35/400/300'
    },
    {
        title: "Espresso Coffee Maker",
        price: 12500,
        image: 'https://picsum.photos/id/18/400/300'
    },
    {
        title: "Organic Cotton T-Shirt (M)",
        price: 899,
        image: 'https://picsum.photos/id/1025/400/300'
    },
    {
        title: "Gaming Mouse Pad (XL)",
        price: 1199,
        image: 'https://picsum.photos/id/83/400/300'
    },
    {
        title: "Leather Wallet (Men's)",
        price: 2490,
        image: 'https://picsum.photos/id/1073/400/300'
    },
    {
        title: "Scented Soy Candle Set",
        price: 950,
        image: 'https://picsum.photos/id/1080/400/300'
    },
    {
        title: "External Hard Drive (1TB)",
        price: 5500,
        image: 'https://picsum.photos/id/1036/400/300'
    },
    {
        title: "Digital Drawing Tablet",
        price: 7800,
        image: 'https://picsum.photos/id/105/400/300'
    },
    {
        title: "Gourmet Spice Blend Set",
        price: 1450,
        image: 'https://picsum.photos/id/1069/400/300'
    },
    {
        title: "Electric Toothbrush",
        price: 3700,
        image: 'https://picsum.photos/id/163/400/300'
    },
    {
        title: "Travel Adapter Kit (Universal)",
        price: 1290,
        image: 'https://picsum.photos/id/158/400/300'
    },
    {
        title: "Desk Organizer (Bamboo)",
        price: 1650,
        image: 'https://picsum.photos/id/21/400/300'
    },
    {
        title: "Novel (Bestseller)",
        price: 650,
        image: 'https://picsum.photos/id/24/400/300'
    },
    {
        title: "Pet Grooming Glove",
        price: 499,
        image: 'https://picsum.photos/id/287/400/300'
    },
    {
        title: "Mini Drone with Camera",
        price: 15500,
        image: 'https://picsum.photos/id/150/400/300'
    }
];
  return (
    <div className='main_container'>
       {
        products.map((pro,index)=>{
            return(
                
                    <ProductCard prod={pro} key={index} cartCounter={cartCounter}/>
                
                
            )
        })
       }
        
    </div>
  )
}

export default ProductList