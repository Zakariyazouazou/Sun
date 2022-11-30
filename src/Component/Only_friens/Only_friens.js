import React from 'react'
import './Only_friens.css'
const Only_friens = (props) => {
  return (
    <>
        
        <div className='Add_friends_container'>
                <a href=""><img src={props.img} alt="" /></a>
                <a href=""><h3 className='friends_name'>{props.name}</h3></a>
       </div>
    </>
  )
}

export default Only_friens
