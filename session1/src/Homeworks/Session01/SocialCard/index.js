import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './styles.module.css';

function SocialItems({color='#f1f1f1',iconName='Facebook',text='',total=0,unit=''}){
    return (
        <div className={styles.socialCard} style={{backgroundColor: `${color}`}}>
            <div className={styles.socialCard__item}>
                <div className={styles.socialCard__icon}>
                    <FontAwesomeIcon icon={iconName} size="3x" />
                </div>
                <div className={styles.socialCard__info}>
                    <div className={styles.socialCard__name}>{text}</div>
                    <div className={styles.socialCard__count}>{total} {unit}</div>
                </div>

            </div>
        </div>

    )
}

export default function SocialBlock() {
    return (
      <div className={styles.socialCard__wraper}>
           <SocialItems iconName="fa-brands fa-facebook" text="Facebook" unit="Likes" color="#619CEC" total={500000} />
          <SocialItems iconName="fa-brands fa-twitter" text="Tiwtter" unit="Tweets" color="#31C8DD" total={40000} />
          <SocialItems iconName="fa-brands fa-google" text="Google +" unit="Plus " color="#F78153" total={460000} />
          <SocialItems iconName="fa-brands fa-pinterest" text="Pintrest" unit="Pins" color="#F75354" total={34000} />
      </div>
    )
}
