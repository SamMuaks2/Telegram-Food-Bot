import React, { useState } from 'react'
import './App.css';
import Button from './Components/Button/Button';
import Card from './Components/Card/Card';
import { getData } from './db/db';
import Cart from './Components/Cart/Cart';

const foods = getData();

const App = () => {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (food) => {
    const exists = cartItems.find((x) => x.id === food.id)

    if(exists) {
      setCartItems(cartItems.map(x => {
        x.id === food.id ? {...exists, quantity: exists.quantity + 1} : x;
      }))
    } else {
      setCartItems([...cartItems, {...food, quantity: 1} ])
    }
  };

  const removeFromCart = (food) => {
    const exists = cartItems.find((x) => x.id === food.id)

    if(exists.quantity === 1) {
      setCartItems(cartItems.filter(x => x.id !== food.id))
    } else {
      setCartItems(cartItems.map(x => 
        x.id === food.id ? {exists, quantity: exists.quantity -1} : x
      ))
    }
  };

  return (
    <>
      <h1>Food order app</h1>

      <Cart cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />

      <Button title={'Add'} disable={false} type={'add'}/>
      <Button title={'Remove'} disable={false} type={'remove'}/>
      <Button title={'Checkout'} disable={false} type={'checkout'}/>

      <div className='cards-container'>
        {foods.map((food) => {
          return <Card food={food} key={food.id} />
        })
        }
      </div>
      
    </>
  );
}

export default App
