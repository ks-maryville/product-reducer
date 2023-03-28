export default function productReducer (productState, action) {
    switch (action.type) {
        case 'DELETE_PRODUCT':
            // removes from product arrary
            // filter test if passed id (product_id) matches the current element, if true, return false so filter does not pass it to the new array
            // let filteredArr = productState.filter(product => 
            //     (product.id !== action.product_id))
            // or
            let filteredArr = productState.filter(product => 
                (product.id === action.product_id) ? false : true)
            // return new array
            return filteredArr
        case 'EDIT_PRODUCT':
            // modify the one object matching the id with the new object action.data          
            let productCopy = productState.map( product => product.id === action.data.id ? action.data : product)
            return productCopy
        default:
            return productState
    }
    
    
}