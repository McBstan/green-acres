import React from 'react';
import CardItem from './CardItem';
import styles from './Cards.module.css';

function Cards() {
  return (
    <div className={styles.cards}>
      <h1>Check out these EPIC Lawns!</h1>
      <div className={styles.cardsContainer}>
        <div className={styles.cardsWrapper}>
          {/* First set of cards */}
          <ul className={styles.cardsItems}>
            <CardItem
              src='/images/img-1.png'
              text='We make elegance in your backyard!'
              label='Landscaping'
              path='/signup'
            />
            <CardItem
              src='/images/img-4.png'
              text='Beautiful Christmas Lights starting in October!'
              label='Lighting'
              path='/signup'
            />
          </ul>
          
          {/* Second set of cards */}
          <ul className={styles.cardsItems}>
            <CardItem
              src='/images/img-2.png'
              text='Weekly or bi-weekly? The lines are always looking good!'
              label='Maintenance'
              path='/signup'
            />
            <CardItem
              src='/images/img-5.png'
              text='Create the patio of your dreams!'
              label='Hardscape'
              path='/signup'
            />
            <CardItem
              src='/images/img-3.png'
              text='Large properties? Our team has you covered!'
              label='Commercial'
              path='/signup'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
