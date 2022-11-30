import React from 'react'
import './Event.css'
import Exempl  from '../../assets/faces/Faces (19).jpg'
import pupel from '../../assets/Symbol/3048122.png'
import map from '../../assets/Symbol/SS (3).png'
import tim from '../../assets/Symbol/Symbol1 (8).png'



const Event = () => {
  return (
    <div className='Event_container'>
        <ul className='Event_container_liste'>
            <li><h5>Discover Events</h5></li>
            <li className='Creat_Event_container'><h5>+ Creat Events</h5></li>
        </ul>
        <ul className='Event_container_2liste'>
            <li><img className='kjml' src={Exempl} alt="" /></li>
            <li className='Event_container_2liste_favorite'><strong>Comedy on the green</strong> <br /> <img src={tim} alt="" /> Mon, Sep 25, 2020 at 9:30 AM
            <img src={map} alt="" /> San francisco
            <img src={pupel} alt="" /> 77 going</li>
            <li className='Edit-thesse'>...</li>
        </ul>
    </div>
  )
}

export default Event
