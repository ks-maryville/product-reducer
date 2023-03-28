export default function productReducer (productState, action) {
    switch (action.type) {
        case 'DELETE_PRODUCT':
            let filteredArr = productState.filter(product => (product.id === action.id) ? false : true)
           return filteredArr
    
        default:
            return productState
    }
    
    
}