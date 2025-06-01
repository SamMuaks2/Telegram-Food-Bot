import React from 'react'
import Button from './Components/Button/Button'
import Card from './Components/Card/Card';
import { getData } from './db/db';

const foods = getData();

const App = () => {
  return (
    <>
      <h1>Check it out</h1>
      <Button title={'Add'} disable={false} type={'add'}/>
      <Button title={'Remove'} disable={false} type={'remove'}/>
      <Button title={'Checkout'} disable={false} type={'checkout'}/>

      {foods.map((food) => {
        return <Card food={food} key={food.id} />
      })
      }
      
    </>
  );
}

export default App
