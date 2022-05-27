import React from 'react'
import styles from './styles.module.css';


/**
 * 
 * @param {*} props 
 * Biến dạng mảng
 * Tham khảo https://www.w3schools.com/REACT/react_lists.asp
 * @returns 
 */
 function BlockChart({day='Mon',percentstages=20}){
  return (
      <div className={styles.blockChart__item}>
          <div className={styles.blockChart__bar}>
              <div className={styles.blockChart__percent} style={{height: `${percentstages}%`}}></div>
          </div>
          <div className={styles.blockChart__day}>{day}</div>
      </div>  );
}
// Show info
function BlockText({text='',unit='',total=0}){
  return (
      <div className={styles.blockChart__info}>
          <div className={styles.blockChart__text}>
          {text}
          </div>
          <div className={styles.blockChart__total}>
          {unit}{total}
          </div>

      </div>
  )
}

export default function ChartColumn({text='',total=0, unit='', percentstages=[50,50,50,50,50]}) {
  return (
    
        <div className={styles.blockChart}>
          <BlockText text={text} total={total} unit={unit} />
          <div className={styles.blockChart__column}>
              <BlockChart day='Mon' percentstages={percentstages[0]} />
              <BlockChart day='Tue' percentstages={percentstages[1]} />
              <BlockChart day='Wed' percentstages={percentstages[2]} />
              <BlockChart day='Thu' percentstages={percentstages[3]} />
              <BlockChart day='Fri' percentstages={percentstages[4]} />
            </div>
       </div>
       
    
  )
}
