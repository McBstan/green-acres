import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Yards!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.png'
              text='We make elegance in your backyard!'
              label='Landscaping'
              path='/services'
            />
            <CardItem
              src='images/img-4.png'
              text='Beautiful Christmas Lights starting in October!'
              label='Lighting'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-2.png'
              text='Weekly or bi-weekly? The lines always looking good!'
              label='Maintenance'
              path='/services'
            />
            <CardItem
              src='images/img-5.png'
              text='Create the patio of your dreams!'
              label='Hardscape'
              path='/products'
            />
            <CardItem
              src='images/img-3.png'
              text='Large properties? Our team has you covered!'
              label='Commercial'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;