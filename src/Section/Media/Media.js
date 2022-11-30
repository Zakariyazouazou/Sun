import React from 'react'
import './Media.css'
import AboutImg1 from '../../assets/nrml_pic/pic (1).jpg'
import AboutImg2 from '../../assets/nrml_pic/pic (31).jpg'
import AboutImg3 from '../../assets/nrml_pic/pic (5).jpg'
import AboutImg4 from '../../assets/nrml_pic/pic (7).jpg'
import AboutImg5 from '../../assets/nrml_pic/pic (9).jpg'
import AboutImg6 from '../../assets/nrml_pic/pic (11).jpg'
import AboutImg7 from '../../assets/nrml_pic/pic (13).jpg'
import AboutImg8 from '../../assets/nrml_pic/pic (15).jpg'
import AboutImg9 from '../../assets/nrml_pic/pic (17).jpg'

const Media = () => {
  return (
    <div className='Media_container'>
         <div className='Media_Photo'>
             <div className='For_add_photo'>
                 <h3>For Add pic</h3>
             </div>
             <img src={AboutImg1}  /> 
             <img src={AboutImg2}  /> 
             <img src={AboutImg3}  /> 
             <img src={AboutImg4}  /> 
             <img src={AboutImg5}  /> 
             <img src={AboutImg6}  /> 
             <img src={AboutImg7}  /> 
             <img src={AboutImg8}  /> 
             <img src={AboutImg9}  /> 
             
         </div>
    </div>
  )
}

export default Media
