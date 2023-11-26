import React from 'react';
import Link from 'next/link';
import styles from './Cards.module.css';

function CardItem(props) {
  return (
    <li className={styles.cardsItem}>
      <Link href={props.path} className={styles.cardsItemLink}>
          <figure className={styles.cardsItemPicWrap} data-category={props.label}>
            <img 
              className={styles.cardsItemImg}
              alt='Images'
              src={props.src}
            />
          </figure>
          <div className={styles.cardsItemInfo}>
            <h5 className={styles.cardsItemText}>{props.text}</h5>
          </div>
      </Link>
    </li>
  );
}

export default CardItem;
