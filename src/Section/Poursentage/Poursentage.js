import React from 'react'
import './Poursentage.css'
import { Isocial_zone , Representure } from '../../Component/Index'
import MyImag from '../../assets/nrml_pic/pic (8).jpg'
import MyImag2 from '../../assets/nrml_pic/pic (4).jpg'
import MyImag3 from '../../assets/nrml_pic/pic (6).jpg'




const Poursentage = () => {
  return (
    <>
        <div className='Poursentage_conatiner'>
         <Representure img={MyImag} name="nour wesleti" bio="Model"/>
              <div className="liste_pourcentage">
                 <h6>yyyyy yyyyyyyyyy yyyyyyyyyyy yyyyyyyyyyyy</h6>
                   <ul  className='la_maere_liste'>
                         <li> xxxxxxx xxxxxxxxxxxx xxxxxxxxxxx</li>
                         <li> xxxxxxx xxxxxxxxxxxx xxxxxxxxxxx</li>
                         <li> xxxxxxx xxxxxxxxxxxx xxxxxxxxxxx</li>
                         <li> xxxxxxx xxxxxxxxxxxx xxxxxxxxxxx</li>
                         <li> xxxxxxx xxxxxxxxxxxx xxxxxxxxxxx</li>

                   </ul>
              
              </div>   
         <Isocial_zone/>
      </div>
    </>
  )
}

export default Poursentage
