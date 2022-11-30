import React from 'react'
import './Only_person.css'
import face from '../../assets/faces/Faces (8).jpg'
import add1 from '../../assets/Symbol/add (1).png'
const Only_person = (props) => {
  return (
    <div>
         <div className="only-person">
                 <a href=""><img className='Person'src={props.img}alt="" /></a>
                <ul className='for_just-frindes'>
                   <a href=""><li className='friends-name'>{props.name}</li></a>
                   <a href=""><li className='frendsbio'>{props.bio}</li></a>
                </ul>
                 <a href=""><img className='Addation' src={props.accepted} alt="" /></a>
             </div>
    </div>
  )
}

export default Only_person
