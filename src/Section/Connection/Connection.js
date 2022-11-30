import React from 'react'
import './Connection.css'
import face1 from '../../assets/faces/Faces (1).jpg'
import face2 from '../../assets/faces/Faces (2).jpg'
import face3 from '../../assets/faces/Faces (3).jpg'
import face4 from '../../assets/faces/Faces (4).jpg'
import face5 from '../../assets/faces/Faces (5).jpg'



const Connection = () => {
  return (
    <div className='Connection_container'>
       <h5>Connections</h5>
       <div className="conatinerofContainer">
              <div className="Connection_pic">
                  <img src={face1} alt="" />
              </div>
              <ul className='Connection_liste'>
                <li><strong> Eya Jarreya </strong> Full stack web devlloper </li>
                <li className='Comune'>Zakaria , mokhtaren, mohssen Aminne and 20 other shered</li>
              </ul>
              <ul className='Connection_liste2'>
                <li className='ReMove'>Remove</li>
                <li className='MeSsage'>Message</li>
              </ul>
        </div>
        <div className="conatinerofContainer">
              <div className="Connection_pic">
                  <img src={face2} alt="" />
              </div>
              <ul className='Connection_liste'>
                <li><strong> Eya Jarreya </strong> Full stack web devlloper </li>
                <li className='Comune'>Zakaria , mokhtaren, mohssen Aminne and 20 other shered</li>
              </ul>
              <ul className='Connection_liste2'>
                <li className='ReMove'>Remove</li>
                <li className='MeSsage'>Message</li>
              </ul>
        </div>
        <div className="conatinerofContainer">
              <div className="Connection_pic">
                  <img src={face3} alt="" />
              </div>
              <ul className='Connection_liste'>
                <li><strong> Eya Jarreya </strong> Full stack web devlloper </li>
                <li className='Comune'>Zakaria , mokhtaren, mohssen Aminne and 20 other shered</li>
              </ul>
              <ul className='Connection_liste2'>
                <li className='ReMove'>Remove</li>
                <li className='MeSsage'>Message</li>
              </ul>
        </div>
        <div className="conatinerofContainer">
              <div className="Connection_pic">
                  <img src={face4} alt="" />
              </div>
              <ul className='Connection_liste'>
                <li><strong> Eya Jarreya </strong> Full stack web devlloper </li>
                <li className='Comune'>Zakaria , mokhtaren, mohssen Aminne and 20 other shered</li>
              </ul>
              <ul className='Connection_liste2'>
                <li className='ReMove'>Remove</li>
                <li className='MeSsage'>Message</li>
              </ul>
        </div>
        <div className="conatinerofContainer">
              <div className="Connection_pic">
                  <img src={face5} alt="" />
              </div>
              <ul className='Connection_liste'>
                <li><strong> Eya Jarreya </strong> Full stack web devlloper </li>
                <li className='Comune'>Zakaria , mokhtaren, mohssen Aminne and 20 other shered</li>
              </ul>
              <ul className='Connection_liste2'>
                <li className='ReMove'>Remove</li>
                <li className='MeSsage'>Message</li>
              </ul>
        </div>
    </div>
  )
}

export default Connection
