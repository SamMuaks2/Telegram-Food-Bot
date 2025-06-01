import React, {useState} from 'react';
import './Card.css';
import Button from '../Button/Button';

const Card = ({food}) => {
  const [count, setCount] = useState(0);
  const {title, image, price, id} = food;

  const habdleIncrement = () => {
    (setCount + 1)
  };

  const habdleDecrement = () => {
    (setCount - 1)
  };

  return (
    <div className='card'>
      <span className={`${count !== 0 ? 'card_badge' : 'card_badge--hidden'}`}>
        {count}
      </span>

      <div className='image-container'>
        <img src={image} alt={title} id={id} />
      </div>
      
      <h4 className="card-title">
        {title} . <span className='card-price'>{price}</span>
      </h4>

      <div className="btn-container">
        <Button title={"+"} type={'add'} onClick={habdleIncrement} />

        {count !== 0 ? (
          <Button title={"-"} type={'remove'} onClick={habdleDecrement} />
        ) : (
          ""
        )
      }
      </div>


    </div>
  )
}

export default Card
