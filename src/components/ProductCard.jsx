import React, {useState} from 'react'
import './ProductCard.css'

export default function ProductCard(props) {

  const [editBtn, setEditBtn] = useState(false)

  const [editProductState, setEditProductState] = useState({
    id: props.id,
    title: props.title,
    publisher: props.publisher,
    genre: props.genre,
    price: props.price
  })

//editProduct
// returns {
//     key: uuidv4(),
//       id: 4,
//       title: "Total War: Warhammer III",
//       publisher: "Sega",
//       genre: "Strategy",
//       price: 49.99
// }
const editProductFunc = () => {
  // full manual
  // props.editProduct({
  //   key: editProductState.key,
  //   id: editProductState.id,
  //   title: editProductState.title,
  //   publisher: editProductState.publisher,
  //   genre: editProductState.genre,
  //   price: editProductState.price
  // })

  //assuming the state does not include key or id
  // prop.editProduct({
  //     key: props.key,
  //     id: props.id,
  //     ...editProductState
  // })

  // works only if all values are in the state (editProductState)
    props.editProduct(editProductState)
}


  return (
    <div className='product-card'>
       <h2><u>{props.title}</u></h2>
       <p>Publisher: {props.publisher}</p>
       <p>Genre: {props.genre}</p>
       <p>Price: ${props.price}</p> 
       {/* onclick should trigger props.deleteProduct(id) */}
        {
          editBtn ? (
            <p> True: Start editing</p>
          ) : (
            <p>False</p>
          )
        }

       <button onClick={()=> setEditBtn(!editBtn)}>Edit</button>
       <button onClick={() => props.deleteProduct(props.id)} >Delete!</button>
    </div>
  )
}
