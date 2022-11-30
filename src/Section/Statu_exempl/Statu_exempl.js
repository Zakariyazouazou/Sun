import React from 'react'
import'./Statu_exempl.css'
import Share from '../../assets/Symbol/Symbol4 (1).png'
import comment from '../../assets/Symbol/Symbol4 (2).png'
import Like from '../../assets/Symbol/Symbol4 (3).png'
import MyImag from '../../assets/all_pic/mon_img.jpg'
import MyImag1 from '../../assets/all_pic/freind3.jpg'
const Statu_exempl = () => {
  return (
    <>
        <div className="Statu_exempl_conatiner">

                <div className="StAtus">
                        <div className="b">
                                    <a href=""><img className='img_status' src={MyImag1} alt="" /></a>
                                <div className="unique_status">
                                        <ul className='Status-identificatio'>
                                            <li className='person_coment_name'><a href="">Francuella zouazou</a></li>
                                            <li className='long_temp'>2h</li>
                                        </ul>
                                        <ul className='c'>
                                            <li className='The_comment'>xxx xxxx xxxx xxxx xxxx xxxxx x xxxx xxxxx xxxxx xxxx  xxxxxxxxxx xxxxxxxxxxxxxxx xxxxxxxxxxxxxx xxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxx</li>
                                        </ul>
                                </div>
                        </div>     
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

export default Statu_exempl



