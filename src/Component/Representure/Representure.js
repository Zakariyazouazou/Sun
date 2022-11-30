import React from 'react'
import './Representure.css'
import MyImag from '../../assets/all_pic/mon_img.jpg'



const Representure = (props) => {
  return (
    <>
         <div className="presenteure">
                 <a href=""><img src={props.img} alt="" /></a>
              <div className='Just_for_devision'>
                 <ul className='mama'>
                     <li><a href="">{props.name}</a></li>
                      <li>2hr</li>
                 </ul>
                 <ul className='other_mama'>
                   <li className='lkhjsf'>{props.bio}</li>
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
    </>
  )
}

export default Representure
