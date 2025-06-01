import React, {useState} from 'react';
import './Card.css';

const Card = ({food}) => {
  const [count, setCount] = useState(0);
  const {title, Image, price, id} = food;

  return (
    <div className='card'>
      <span className={`${count !== 0 ? 'card_badge' : 'card_badge--hidden'}`}>
        {count}
      </span>

      <div className='image-container'>
        <img src={Image} alt={title} />
      </div>
    </div>
  )
}

export default Card
