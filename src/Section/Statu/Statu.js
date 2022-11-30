import React from 'react'
import './Statu.css'
import Symbol1 from '../../assets/Symbol/Symbol3 (1).png'
import Symbol2 from '../../assets/Symbol/Symbol3 (2).png'
import Symbol3 from '../../assets/Symbol/Symbol3 (3).png'
import Symbol4 from '../../assets/Symbol/Symbol3 (4).png'
import Symbol5 from '../../assets/Symbol/Symbol3 (5).png'
import Symbol6 from '../../assets/Symbol/Symbol3 (6).png'
import Symbol7 from '../../assets/Symbol/Symbol3 (7).png'
import My_image from '../../assets/all_pic/mon_img.jpg'
const Statu = () => {
  return (
    <>
        <div className="Statu_container">
             <div className="Zone_input">
                <img src={My_image} alt="" />
                <textarea name="Status" className='input_status' cols="200" rows="5" placeholder='What do you want to say tonight..'></textarea>
             </div>
             <div className='tailleS'>
                    <ul className='La_mere'>
                      <li className='first_list'><a href=""><img src={Symbol3} alt="" /> photo</a></li>
                      <li className='first_list'><a href=""><img src={Symbol5} alt="" /> video</a></li>
                      <li className='first_list'><a href=""><img src={Symbol6} alt="" /> Events</a></li>
                      <li className='first_list'><a href=""><img src={Symbol2} alt="" /> Felling activites</a></li>
                      <li  className='specialOne'>...
                            <div className="dropdownliste">
                                <ul className='la_fille'>
                                  <li><a href=""><img src={Symbol7} alt="" /> Creat a poll</a></li>
                                  <li><a href=""><img src={Symbol1} alt="" /> Ask qustion</a></li>
                                  <li><a href=""><img src={Symbol4} alt="" /> Help</a></li>
                                </ul>
                            </div>
                      </li>
                    </ul>
             </div>
        
        
        
        </div>
    </>
  )
}

export default Statu
