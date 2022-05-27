import React from 'react'
import styles from './styles.module.css';
import Avatar from './Components/Avatar';
import Profile from './Components/Profile';
import Bio from './Components/Bio';
import Contact from './Components/Contact';  

function Person({
  avatar='',
  name='',
  alt='',
  job='', 
  biosArr= [],
  contactArr = []
}) {

  const listContact = contactArr.map((row) => 
        <Contact key={row.id.toString()} bgColor={row.bgColor} id={row.id} icon={row.icon} type={row.type} content={row.content} />);

  return (
 
    <div className={styles.card}>
        <Avatar link={avatar} alt={alt} />
        <Profile name={name} position={job} />
        <Bio bios={biosArr} />
        {listContact}
    </div>
  )
}

export default Person