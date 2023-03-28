import React,{useState, useReducer} from 'react'
import logo from './logo.svg';
import './App.css';
import productReducer from './reducers/productReducer';
import ProductCard from './components/ProductCard';

function App() {
  const intialState = [
    {
      id: 1,
      title: "Hogwart's Legacy",
      publisher: "Warner Bros.",
      genre: "Adventure",
      price: 59.99
    },
    {
      id: 2,
      title: "Destiny 2",
      publisher: "Bungie",
      genre: "FPS",
      price: 29.99
    },
    {
      id: 3,
      title: "The Last of Us",
      publisher: "Sony",
      genre: "Adventure",
      price: 69.99
    },
    {
      id: 4,
      title: "Total War: Warhammer III",
      publisher: "Sega",
      genre: "Strategy",
      price: 49.99
    },
    {
      id: 5,
      title: "Dune",
      publisher: "Warner Bros.",
      genre: "Sci-Fi",
      price: 19.99
    }
]

const [productState, dispatch] = useReducer(productReducer, intialState)


  return (
    <div className="App">
      <h1>Video Game Products</h1>
      {
        productState.map((product) => {
          return (
            <ProductCard
              id={product.id}
              title={product.title}
              publisher={product.publisher}
              genre={product.genre}
              price={product.price}
              //pass in dispatch for DELETE_PRODUCT
              deleteProduct = {
                (id) => dispatch({
                  type: 'DELETE_PRODUCT',
                  id: id
                })
              }
            />
          )
        })
      }

    </div>
  );
}

export default App;
