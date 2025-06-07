import React, { useState, useEffect } from 'react'
import './App.css';
import Button from './Components/Button/Button';
import Card from './Components/Card/Card';
// import { getData } from './db/db';
import Cart from './Components/Cart/Cart';

// const foods = getData();

const teleApp = window.Telegram.WebApp;

const App = () => {

  const [foods, setFoods] = useState([]);
  const [cartItems, setCartItems] = useState([]);


  useEffect(() => {
    teleApp.ready();
  

  // Fetch food list from backend API
  fetch('https://telegram-food-bot-backend.vercel.app/api/foods')
      .then(res => res.json())
      .then(data => setFoods(data))
      .catch(err => console.error('Error fetching foods:', err));
  }, []);

  
  const addToCart = (food) => {
    const exists = cartItems.find((x) => x._id === food._id);
  
    if (exists) {
      setCartItems(
        cartItems.map((x) =>
          x._id === food._id ? { ...x, quantity: x.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...food, quantity: 1 }]);
    }
  };
  
 
  const removeFromCart = (food) => {
    const exists = cartItems.find((x) => x._id === food._id);
  
    if (exists.quantity === 1) {
      setCartItems(cartItems.filter((x) => x._id !== food._id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x._id === food._id ? { ...x, quantity: x.quantity - 1 } : x
        )
      );
    }
  };

  const onCheckout = () => {
  const totalAmount = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

  const user = window.Telegram.WebApp.initDataUnsafe?.user;
  const email = `${user?.id}@telegram.fake`;

  const handler = window.PaystackPop.setup({
    key: 'pk_live_42c8691a68c08b1756212148f236bfcb29848d18',
    email: email,
    amount: totalAmount * 100,
    currency: 'NGN',
    ref: '' + Math.floor(Math.random() * 1000000000 + 1),
    metadata: {
      cart: cartItems,
      telegramUser: user,
    },

    callback: function (response) {
      alert(`Payment successful! Reference: ${response.reference}`);
      fetch('https://telegram-food-bot-backend.vercel.app/api/verify-paystack', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reference: response.reference }),
      })
      .then(res => res.json())
      .then(data => {
        console.log('Verification response:', data);
          })
          .catch(err => {
            console.error('Verification error:', err);
          });
        },
        onClose: function () {
          alert('Payment window closed.');
        },
      });
    

  handler.openIframe();
  window.Telegram.WebApp.MainButton.text = 'Complete payment on Paystack';
  window.Telegram.WebApp.MainButton.show();
};
  

  // const onCheckout = async () => {
  //   const res = await fetch('https://telegram-food-bot-backend.vercel.app/api/pay/create-checkout-session', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${localStorage.getItem('token')}`
  //     },
  //     body: JSON.stringify({ cartItems })
  //   });

  //   const { id } = await res.json();
  //   window.location.href = `https://checkout.stripe.com/pay/${id}`;

  //   teleApp.MainButton.text = 'Pay now 😁' 
  //   teleApp.MainButton.show()
  // }
  

  return (
    <>
      <h1>Food order app</h1>

      <Cart cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} onCheckout={onCheckout} />

      <div className='cards-container'>
        {foods.map((food) => {
          return <Card 
                    food={food} 
                    key={food._id} 
                    addToCart={addToCart} 
                    removeFromCart={removeFromCart} 
                    quantity={cartItems.find(item => item._id === food._id)?.quantity || 0} 
                  />
                  // <Card food={food} key={food._id} addToCart={addToCart} removeFromCart={removeFromCart} />
        })
        }
      </div>
      
    </>
  );
}

export default App
