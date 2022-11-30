import React from 'react'
import './Representation.css'
import { Representure , Works , Isocial_zone} from '../../Component/Index'
import Share from '../../assets/Symbol/Symbol4 (1).png'
import comment from '../../assets/Symbol/Symbol4 (2).png'
import Like from '../../assets/Symbol/Symbol4 (3).png'
import MyImag from '../../assets/all_pic/mon_img.jpg'
import MyImag1 from '../../assets/all_pic/freind3.jpg'
import MyImag2 from '../../assets/all_pic/freind4.jpg'

import exempel from '../../assets/faces/Faces (8).jpg'
const Representation = () => {
  return (
    <>
         <div className="Reperesentation_container">



         
              <Representure  img={MyImag} name="zakaria Zouazou" bio="Web Devloppeure at website" />
              <Works/>
              <Isocial_zone/>





              <div className="comment">
                 <div className="b">
                             <a href=""><img src={MyImag2} alt="" /></a>
                            <div className="unique_comeent">
                                  <ul className='comment-identificatio'>
                                        <li className='person_coment_name'><a href="">Francuella zouazou</a></li>
                                        <li className='long_temp'>2h</li>
                                  </ul>
                                  <ul className='c'>
                                      <li className='The_comment'>xxx xxxx xxxx xxxx xxxx xxxxx x xxxx xxxxx xxxxx xxxx  xxxxxxxxxx xxxxxxxxxxxxxxx xxxxxxxxxxxxxx xxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxx</li>
                                  </ul>
                            </div>
                  </div>         
                            <ul className='d'>
                              <li><a href="">Like (3) </a></li>
                              <li><a href="">Reply</a></li>
                              <li><a href="">View 5 replies</a></li>
                            </ul>
              </div>
              <div className="bcomment">
              <div className="b">
                          <a href=""><img src={MyImag2} alt="" /></a>
                         <div className="unique_comeent">
                               <ul className='comment-identificatio'>
                                     <li className='person_coment_name'><a href="">Francuella zouazou</a></li>
                                     <li className='long_temp'>2h</li>
                               </ul>
                               <ul className='c'>
                                   <li className='The_comment'>xxx xxxx xxxx xxxx xxxx xxxxx x xxxx xxxxx xxxxx xxxx  xxxxxxxxxx xxxxxxxxxxxxxxx xxxxxxxxxxxxxx xxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxx</li>
                               </ul>
                         </div>
               </div>         
                         <ul className='d'>
                           <li><a href="">Like (3) </a></li>
                           <li><a href="">Reply</a></li>
                           <li><a href="">View 5 replies</a></li>
                         </ul>
           </div>
           <div className="ccomment">
            <div className="b">
                        <a href=""><img src={MyImag2} alt="" /></a>
                        <div className="unique_comeent">
                              <ul className='comment-identificatio'>
                                    <li className='person_coment_name'><a href="">Francuella zouazou</a></li>
                                    <li className='long_temp'>2h</li>
                              </ul>
                              <ul className='c'>
                                  <li className='The_comment'>xxx xxxx xxxx xxxx xxxx xxxxx x xxxx xxxxx xxxxx xxxx  xxxxxxxxxx xxxxxxxxxxxxxxx xxxxxxxxxxxxxx xxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxx</li>
                              </ul>
                        </div>
              </div>         
                        <ul className='d'>
                          <li><a href="">Like (3) </a></li>
                          <li><a href="">Reply</a></li>
                          <li><a href="">View 5 replies</a></li>
                        </ul>
          </div>
          <div className="comment">
                 <div className="b">
                             <a href=""><img src={MyImag2} alt="" /></a>
                            <div className="unique_comeent">
                                  <ul className='comment-identificatio'>
                                        <li className='person_coment_name'><a href="">Francuella zouazou</a></li>
                                        <li className='long_temp'>2h</li>
                                  </ul>
                                  <ul className='c'>
                                      <li className='The_comment'>xxx xxxx xxxx xxxx xxxx xxxxx x xxxx xxxxx xxxxx xxxx  xxxxxxxxxx xxxxxxxxxxxxxxx xxxxxxxxxxxxxx xxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxx</li>
                                  </ul>
                            </div>
                  </div>         
                            <ul className='d'>
                              <li><a href="">Like (3) </a></li>
                              <li><a href="">Reply</a></li>
                              <li><a href="">View 5 replies</a></li>
                            </ul>
              </div>
             <div className="col-3 misaha">
                            <div className="snippet" data-title=".dot-elastic">
                                <div className="stage">
                                 <div className="dot-elastic"></div>
                               </div>
                            </div>
                </div> 
         </div>
    </>
  )
}

export default Representation
