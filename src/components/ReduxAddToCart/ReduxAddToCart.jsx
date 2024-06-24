function AddToCart({ product }) {
    console.log("add to cart", product.id)
    function increase() {
        //dispatch({type: , payload: })
    }
    function decrease() {
     //dispatch({type: , payload: })
    }
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