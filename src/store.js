import {createStore} from  "redux";
import {act} from "react";
import {omit} from "lodash";
function cartReducer(state = {items:{}},action){
    switch(action.type){
        case "ADD_TO_CART":{
            const product = action.payload;
            if(state.items[product.id]){
                return {
                    ...state,
                    items:{
                        ...state.items,
                        [product.id]:{
                            ...state.items[product.id],
                            quantity: state.items[product.id].quantity + 1
                        }
                    }
                }
            }
            else{
                return {
                    ...state,
                    items:{
                        ...state.items,
                        [product.id]:{
                            ...product,
                            quantity: 1
                        }
                    }
                
                }
            }
        }
        case "REMOVE_FROM_CART":{
            const product = action.payload;
            if(state.items){
                if(state.items[product.id].quantity > 1){
                    return {
                        ...state,
                        items:{
                            ...state.items,
                            [product.id]:{
                                ...state.items[product.id],
                                quantity: state.items[product.id].quantity - 1
                            }
                        }
                    }
                }
                else{
                    // const newItems = {...state.items};
                    // delete newItems[product.id];
                    // return {
                    //     ...state,
                    //     items: newItems
                    // }
                    return {
                        ...state,
                        items: omit(state.items, product.id),
                    }
                }
            }


        }
        default:
            return state;
    }

}
const store = createStore(cartReducer);
export default store;