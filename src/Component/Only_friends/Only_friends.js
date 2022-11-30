import React from 'react'
import './Only_friends.css'
const Only_friends = (props) => {
  return (
  
          <div className="Only-friends">
                <a href=""><img className='Person 'src={props.img}alt="" /></a>
                <ul className='for_just-frindes'>
                   <a href=""><li className='friends-name'>{props.name}</li></a>
                   <a href=""><li className='frendsbio'>{props.bio}</li></a>
                </ul>
                <h6 className='MSSg'>{props.Msg}</h6>
             </div>
    
  )
}

export default Only_friends
// <h6 className='TimeSedding'>{props.Msg}</h6>
