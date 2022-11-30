import React from 'react'
import './Acitivitie.css'
import face1 from '../../assets/faces/Faces (1).jpg'
import face2 from '../../assets/faces/Faces (2).jpg'
import face3 from '../../assets/faces/Faces (3).jpg'
import face4 from '../../assets/faces/Faces (4).jpg'
import face5 from '../../assets/faces/Faces (5).jpg'



const Acitivitie = () => {
  return (
    <div className='Acitivitie_container'>
         <div className="conatinerofContainer sqfn">
              <div className="Connection_pic">
                  <img src={face1} alt="" />
              </div>
              <ul className='Connection_liste'>
                <li><strong> Eya Jarreya </strong> Full stack web devlloper </li>
                <li className='Comune'>Zakaria , mokhtaren, mohssen Aminne and 20 other shered</li>
              </ul>
              <ul className='Connection_liste2'>
                <li >Just Now</li>
                
              </ul>
        </div>
    </div>
  )
}

export default Acitivitie
