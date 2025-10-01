import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Cards.module.css';

function CardItem(props) {
  return (
    <li className={styles.cardsItem}>
      <Link href={props.path} className={styles.cardsItemLink}>
          <figure className={styles.cardsItemPicWrap} data-category={props.label}>
            <Image 
              src={props.src}
              alt={props.label}
              fill
              sizes="(max-width: 640px) 100vw,
                     (max-width: 1024px) 50vw,
                     33vw"
              className={styles.cardsItemImg}
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
