import {createSlice} from '@reduxjs/toolkit';
import {v4 as uuidv4} from "uuid";

const initialState = {
    products: [
    //     {
    //     id: uuidv4(),
    //     title: "Hogwart's Legacy",
    //     publisher: "Warner Bros.",
    //     genre: "Adventure",
    //     price: 59.99
    // },
    //     {
    //         id: uuidv4(),
    //         title: "Destiny 2",
    //         publisher: "Bungie",
    //         genre: "FPS",
    //         price: 29.99
    //     },
    //     {
    //         id: uuidv4(),
    //         title: "The Last of Us",
    //         publisher: "Sony",
    //         genre: "Adventure",
    //         price: 69.99
    //     },
    //     {
    //         id: uuidv4(),
    //         title: "Total War: Warhammer III",
    //         publisher: "Sega",
    //         genre: "Strategy",
    //         price: 49.99
    //     },
    //     {
    //         id: uuidv4(),
    //         title: "Dune",
    //         publisher: "Warner Bros.",
    //         genre: "Sci-Fi",
    //         price: 19.99
    //     }
        ]
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        deleteProduct(state, action){
            console.log(state);
            console.log(action.type);
            // console.log("delete product");
            // console.log(state);
            console.log(action.payload)
            return state.filter(product =>
                (product.id !== action.payload))
        },
        editProduct(state, action){
            console.log(action.payload)
            return state.map(product => product.id === action.payload.id ? action.payload : product)
        },
        addBlank(state, action){
            //create new blank card
            let blankCard = {
                id: uuidv4(),
                title: "",
                publisher: "",
                genre: "",
                price: 0.00
            }
            // let newState = [
            //     blankCard,
            //     ...productState
            // ]
            // console.log(newState);

            return [
                blankCard,
                ...state
            ]
        },
        addAPI(state, action){

            // let payload = {
            //     name: 'Doom',
            //     gamespublisher: 'Bethesda',
            //     studio: 'id Software',
            //     ratings: 5,
            //     genre: 'FPS',
            //     price: 40,
            // }
            let newCard =
                {
                    id: uuidv4(),
                    title: action.payload.name,
                    publisher: action.payload.gamespublisher,
                    studio: action.payload.studio,
                    genre: action.payload.genre,
                    price: action.payload.price
                }
            return [
                newCard,
                ...state
            ]
        },
        addPayload(state, action){
            // let payload = {
            //     name: 'Doom',
            //     gamespublisher: 'Bethesda',
            //     studio: 'id Software',
            //     ratings: 5,
            //     genre: 'FPS',
            //     price: 40,
            // }
            let newCard =
                {
                    id: uuidv4(),
                    title: action.name,
                    publisher: action.gamespublisher,
                    studio: action.studio,
                    genre: action.genre,
                    price: action.price
                }
                console.log(action.payload)
            return action.payload

        }
    }
})

export const {deleteProduct, editProduct, addBlank, addAPI, addPayload} = productSlice.actions;

export default productSlice.reducer