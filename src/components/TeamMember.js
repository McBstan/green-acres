import React from 'react';
import styles from './TeamMember.module.css';

function TeamMember({ name, role, image, blurb }) {
  return (
    <div className={styles.teamMember}>
      <img src={image} alt={name} className={styles.memberPhoto} />
      <h3>{name}</h3>
      <p className={styles.memberRole}>{role}</p>
      <p>{blurb}</p>
    </div>
  );
}

export default TeamMember;
