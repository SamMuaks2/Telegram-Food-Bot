import React from 'react';
import './Button.css';

const Button = ({type, title, disable, onClick, className}) => {
  return (
    <div>
      <button className={`btn ${
        (type === 'add' && 'add') || 
        (type === 'remove' && 'remove') || 
        (type === 'checkout' && 'checkout')
        } ${className || ''}`}
        disabled = {disable}
        onClick = {onClick}
    >
        {title}
      </button>
    </div>
  )
}

export default Button
