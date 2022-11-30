import React from 'react'
import './Many_pages.css'
import MyImag from '../../assets/nrml_pic/pic (2).jpg'
import MyImag2 from '../../assets/nrml_pic/pic (4).jpg'
import MyImag3 from '../../assets/nrml_pic/pic (6).jpg'


import { Isocial_zone , Representure } from '../../Component/Index'
const Many_pages = () => {
  return (
    <>
    <div className="Many_pages_container">
        <Representure img={MyImag} name="nour wesleti" bio="Model"/>
            <div className="For_Add_friends_container">
                    <img className='bigone' src={MyImag} alt="" />
                    <div className="other_image">
                        <img src={MyImag2} alt="" className='First_small_img' />
                       <img src={MyImag3} alt="" className='Secong_small_img'  /> 
                    </div>
              </div>
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

export default Many_pages



// const affisher = () => {
//       document.querySelector('.seeOther').classList.add('Am')
// }



// const desaffisher = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

