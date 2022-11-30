import React from 'react'
import './Isocial_zone.css'
import Share from '../../assets/Symbol/Symbol4 (1).png'
import comment from '../../assets/Symbol/Symbol4 (2).png'
import Like from '../../assets/Symbol/Symbol4 (3).png'
import exempel from '../../assets/faces/Faces (8).jpg'
const Isocial_zone = () => {
  return (
    <>
         <div className="Isocial_zone">
                 <ul className='Isocial_liste'>
                      <li><a href=""><img src={Like} alt="" /></a>Like (56)</li>
                      <li><a href=""><img src={comment} alt="" /></a> comment (12)</li>
                      <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                               <img src={Share} alt="" /> Share (5)
                            </a> 
                                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Something</a>
                                      </div>
                      </li>
                 </ul>
                 <ul className='Input_zone'>
                     <li><a href=""><img src={exempel} alt="" /></a></li>
                     <li><input className='Tospeakcomment' type="text" placeholder='Add comment..' /></li>
                 </ul>
         </div>
    </>
  )
}

export default Isocial_zone
