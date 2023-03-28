import React from 'react'
import './ProductCard.css'

export default function ProductCard(props) {
//editProduct
// returns {
//     key: uuidv4(),
//       id: 4,
//       title: "Total War: Warhammer III",
//       publisher: "Sega",
//       genre: "Strategy",
//       price: 49.99
// }

  return (
    <div className='product-card'>
       <h2><u>{props.title}</u></h2>
       <p>Publisher: {props.publisher}</p>
       <p>Genre: {props.genre}</p>
       <p>Price: ${props.price}</p> 
       {/* onclick should trigger props.deleteProduct(id) */}
       <button onClick={() => props.deleteProduct(props.id)} >Delete!</button>
    </div>
  )
}
