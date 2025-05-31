import React from 'react'
import Button from './Components/Button/Button'

const {getData} = require('./db/db');

const App = () => {
  return (
    <>
      <h1>Check it out</h1>
      <Button title={'Add'} disable={false} type={'add'}/>
      <Button title={'Remove'} disable={false} type={'remove'}/>
      <Button title={'Checkout'} disable={false} type={'checkout'}/>
    </>
  )
}

export default App
