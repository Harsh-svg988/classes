import { useDispatch } from "react-redux";

function AddToCart({ product }) {
    console.log("add to cart", product.id)
    // use selector
    let dispatch = useDispatch();
    function increase() {
        //dispatch({type: , payload: })
        dispatch({ type: "ADD_TO_CART", payload: product.id });
    }

    function decrease() {
     //dispatch({type: , payload: })
        dispatch({ type: "REMOVE_FROM_CART", payload: product.id });
    }
    let cart = useSelector((state) =>{
        return state.cart;
    })





    const quantity = cart[product.id] ? cart[product.id].quantity : 0;
    if (quantity === 0) {
        return (
            <div>
                <button onClick={increase}>AddToCart</button>
            </div>
     )  
    } else {
        return ( 
            <div>
                <button onClick={decrease}>-</button>
                <span>{quantity}</span>
                <button onClick={increase}>+</button>
            </div>
        )
    }
}
export default AddToCart;