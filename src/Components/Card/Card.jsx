import React from 'react';
import './Card.css';
import Button from '../Button/Button';

const Card = ({food, addToCart, removeFromCart, quantity}) => {
  const count = quantity || 0;
  
  const { name, images, price, _id, description, category } = food;
  // const image = images && images.length > 0 ? images[0] : 'default-image.jpg';
  const backendURL = 'https://telegram-food-bot-backend.vercel.app';

  const getValidImage = (img) => {
  if (!img) return 'default-image.jpg';
  if (typeof img === 'string') return img;
  if (img.url) return img.url;
  return 'default-image.jpg';
};

const image = getValidImage(images && images.length > 0 ? images[0] : null);

  // const getValidImage = (img) => {
  // if (typeof img === 'string') return img;
  // if (img && typeof img === 'object') {
  //   return Object.values(img).join('');
  // }
  //   return 'default-image.jpg';
  // };

  // const image = images && images.length > 0
  //   ? `${backendURL}/uploads/${getValidImage(images[0])}`
  //   : 'default-image.jpg';


  const handleIncrement = () => {
    addToCart(food);
  };

  const handleDecrement = () => {
    if (count > 0) removeFromCart(food);
  };

  
  return (
    <div className="card-container">
      <div className='card'>
      <span className={`${count !== 0 ? 'card-badge' : 'card-badge--hidden'}`}>
        {count}
      </span>

      <div className='image-container'>
        <img src={image} alt={name} id={_id} />
      </div>
      
      <h4 className="card-title">
        {name} . <span className='card-price'>₦ {price}</span>
      </h4>

      {description && <p className="card-description">{description}</p>}

      {category && <p className="card-category">Category: {category}</p>}

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
