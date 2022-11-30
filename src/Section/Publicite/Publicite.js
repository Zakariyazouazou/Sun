import React from 'react'
import './Publicite.css'
import pub from '../../assets/all_pic/men (2).jpg'
import Mycompany from '../../assets/Symbol/Symbol1 (1).png'
import Like from '../../assets/Symbol/Symbol4 (3).png'
import MyImag from '../../assets/all_pic/mon_img.jpg'
import Share from '../../assets/Symbol/Symbol4 (1).png'
import comment from '../../assets/Symbol/Symbol4 (2).png'
const Publicite = () => {
  return (
    <>
    <div className="Publicite_container">
            <div className="presenteure">
                <a href=""><img src={Mycompany} alt="" /></a>
                <div className='Just_for_devision'>
                    <ul className='mama'>
                        <li><a href="">SunShine Company</a></li>
                        <li>2hr</li>
                    </ul>
                    <ul className='other_mama'>
                    <li className='lkhjsf'>Societe bessnes</li>
                    <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className='form'> ... </i>
                            </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">Something</a>
                                        </div>
                    </li>
                    </ul>
                </div>
            </div>
            <div className='Your_works'>
                   <h6>Hello we need more devlloper For more work and devlloper wee need some help from you</h6>
                   <img src={pub} alt="" />
            </div>
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
                     <li><a href=""><img src={MyImag} alt="" /></a></li>
                     <li><input type="text" placeholder='Add comment..' /></li>
                 </ul>
              </div>
    
    </div>
    </>

  )
}

export default Publicite



