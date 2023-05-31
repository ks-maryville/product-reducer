import React, {useState, useReducer, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import productReducer from './reducers/productReducer';
import ProductCard from './components/ProductCard';
import {addPayload, addBlank, deleteProduct, editProduct, addAPI} from './slices/productSlice';
import {useSelector, useDispatch} from 'react-redux';
import {v4 as uuidv4} from 'uuid';

// import payload from './payload.json'

function App() {
    const dispatch = useDispatch();

    // const initialState = [
    //     // {
    //     //   id: uuidv4(),
    //     //   title: "Hogwart's Legacy",
    //     //   publisher: "Warner Bros.",
    //     //   genre: "Adventure",
    //     //   price: 59.99
    //     // },
    //     // {
    //     //   id: uuidv4(),
    //     //   title: "Destiny 2",
    //     //   publisher: "Bungie",
    //     //   genre: "FPS",
    //     //   price: 29.99
    //     // },
    //     // {
    //     //   id: uuidv4(),
    //     //   title: "The Last of Us",
    //     //   publisher: "Sony",
    //     //   genre: "Adventure",
    //     //   price: 69.99
    //     // },
    //     // {
    //     //   id: uuidv4(),
    //     //   title: "Total War: Warhammer III",
    //     //   publisher: "Sega",
    //     //   genre: "Strategy",
    //     //   price: 49.99
    //     // },
    //     // {
    //     //   id: uuidv4(),
    //     //   title: "Dune",
    //     //   publisher: "Warner Bros.",
    //     //   genre: "Sci-Fi",
    //     //   price: 19.99
    //     // }
    // ]

    // const [productState, dispatch] = useReducer(productReducer, initialState)
    const products = useSelector((state) => state.products)

    const getData = async () => {
        const response = await fetch('http://localhost:3001/api/products')
        const resJson = await response.json();
        console.log(resJson);
        console.log(products)
        dispatch(addPayload(resJson))
        // dispatch({
        //   type: "ADD_PAYLOAD",
        //   payload: await response.json()
        // })
    }

    // useEffect(()=>{
    //    getData()
    // },[products])

    return (
        <div className="App">
            <h1>Video Game Products</h1>

            <button
                onClick={
                    () => dispatch(addBlank(products))
                }
            >Add Blank Card
            </button>

            <button
                onClick={
                    () => dispatch({
                        type: 'ADD_API'
                    })
                }>ADD API
            </button>

            {/* <button
      onClick={
        () => dispatch({
          type: "ADD_PAYLOAD",
          payload: payload
        })
      }>Payload</button> */}
            <button
                onClick={() => getData()}>Payload
            </button>

            {
                products.length && products.map((product) => {
                    console.log(product)
                    return (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            publisher={product.publisher}
                            genre={product.genre}
                            price={product.price}
                            //pass in dispatch for DELETE_PRODUCT
                            deleteProduct={
                                (id) => dispatch(
                                    //     {
                                    //     type: 'DELETE_PRODUCT',
                                    //     product_id: id
                                    // }
                                    deleteProduct(id),
                                    // console.log(id)
                                )
                            }
                            editProduct={
                                (editProductObj) => dispatch(editProduct(editProductObj))
                            }

                        />
                    )
                })
            }

        </div>
    );
}

export default App;
