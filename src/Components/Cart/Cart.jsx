import Button from '../Button/Button';
import './Cart.css';

const Cart = ({cartItems, addToCart, removeFromCart, onCheckout}) => {

    const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

  return (
    <div className='cart-container'>
      {cartItems.length === 0 ? "No items in your cart" : ""}

      <br />

      <span className=''>Total price: ₦{totalPrice.toFixed(2)}</span>

      <Button 
        title={`${cartItems.length === 0 ? 'Order' : 'Checkout'}`} 
        type={'checkout'} 
        disable={cartItems.length === 0 ? true : false} 
        onClick={onCheckout}
      />
    </div>
  )
}

export default Cart
