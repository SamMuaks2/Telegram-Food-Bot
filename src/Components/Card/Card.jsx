import React from 'react';
import './Card.css';
import Button from '../Button/Button';

const Card = ({food, addToCart, removeFromCart, quantity}) => {
  const count = quantity || 0;
  
  // const [count, setCount] = useState(0);
  const {title, image, price, _id} = food;

  const handleIncrement = () => {
    addToCart(food);
  };

  const handleDecrement = () => {
    if (count > 0) removeFromCart(food);
  };

  // const handleIncrement = () => {
  //   setCount(prev => prev + 1);
  //   addToCart(food);
  // };

  // const handleDecrement = () => {
  //   setCount(prev => (prev > 0 ? prev - 1 : 0));
  //   removeFromCart(food);
  // };

  return (
    <div className="card-container">
      <div className='card'>
      <span className={`${count !== 0 ? 'card-badge' : 'card-badge--hidden'}`}>
        {count}
      </span>

      <div className='image-container'>
        <img src={image} alt={title} id={_id} />
      </div>
      
      <h4 className="card-title">
        {title} . <span className='card-price'>₦ {price}</span>
      </h4>

      <div className="btn-container">
        <Button title={"+"} type={'add'} onClick={handleIncrement} className={count > 0 ? 'btn-small' : ''} />

        {count !== 0 && (
          <Button title={"-"} type={'remove'} onClick={handleDecrement} className='btn-small' />
        )}
      </div>


    </div>
    </div>
  )
}

export default Card
