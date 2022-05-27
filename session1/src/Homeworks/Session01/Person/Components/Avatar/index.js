import React from 'react'
import styles from './styles.module.css';

function Avartar({link='', alt=''}) {
  return (
    <div className={styles.person__avatar}>
        <div className={styles.person_profile_photo}>
        <img src={link} alt={alt} />
        </div>
    </div>
  )
}

export default Avartar