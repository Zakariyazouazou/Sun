import React from 'react'
import './Nav_left.css'
import {useState} from 'react';
import Symbol from '../../assets/Symbol/Symbol.png'
import {Buttons} from '../../Component/Index'
import settings1 from '../../assets/Symbol/Symbol1 (2).png'
import settings2 from '../../assets/Symbol/Symbol1 (3).png'
import settings3 from '../../assets/Symbol/Symbol1 (4).png'
import settings4 from '../../assets/Symbol/Symbol1 (5).png'
import settings5 from '../../assets/Symbol/Symbol1 (6).png'
import settings6 from '../../assets/Symbol/Symbol1 (7).png'
import settings7 from '../../assets/Symbol/Symbol1 (8).png'
import { Link } from 'react-router-dom';

const Nav_left = () => {

  
  return (
<>
  <div className="contineree" onClick={thisfunction}>
       <Link to="#" className="buttonee">Hover me</Link> 
  </div>
  <div className="containeree" onClick={thifunction}>
       <Link to="#" className="buttnee"><img src={Symbol} /></Link> 
  </div>
   
   <div className="nav_left">
       <div className="card">     
             <div className="identification">
                            <div className="background"></div>
                            <div className="My_pic">x</div>
                            <h2 className="My_name">Zakariya Zouazou</h2>
                            <h4 className="personnel_speach">hello my name zakariya Zouazou and this my work if you wante page like this contact me</h4>
                            <div className="my_nombers">
                                 <h2 className="extra"> <strong>256</strong><br/>post</h2>
                                 <h2 className="extra"><strong>5,5k</strong><br/>followers</h2>
                                 <h2 className="extra"><strong>700</strong><br/>following</h2>
                            </div>
                    </div>
                    <div className="details">
                                         <div className="mini_details">
                                              <Link to="/Settings"><img src={settings4}/>
                                                  <h2 >Feed</h2>
                                              </Link> 
                                          </div>
                                          <div className="mini_details">
                                                        <Link to="/Profile2"><img src={settings6} alt=""/>
                                                          <h2 >connections</h2></Link> 
                           
                                          </div>
                                          <div className="mini_details">
                                               <Link to="/News"> <img src={settings3} alt=""/>
                                                 <h2 >latest</h2>
                                                </Link> 
                                          </div>
                                          <div className="mini_details">
                                                     <Link to="/Profile4"> <img src={settings7} alt=""/>
                                                              <h2 >Events</h2></Link> 
                                          </div>
                                          <div className="mini_details">
                                                      <Link to="/Messenger"><img src={settings2} alt=""/>
                                                      <h2 >Group</h2></Link>
                            
                                          </div>
                                          <div className="mini_details">
                                                      <Link to=""><img src={settings1} className="unique"/>
                                                       <h2 >Notification</h2> </Link> 
                                          
                                          </div>
                                          <div className="mini_details">
                                                      <Link to="/Settings" ><img src={settings6} alt=""/>
                                                      <h2 >settings</h2></Link> 
                                         </div>

                    </div>      
                    <Buttons className='For_me' >
                            <Link to="/Profile" >view profile</Link>
                    </Buttons>  
                    <h6 className='Confuguration'><Link to="/Profile1">about</Link> <Link to="/Settings">Settings</Link> <Link to="">Support</Link> <Link to="">docs</Link> <Link to="">help</Link> <Link to="">Privecy and terme</Link></h6>   
                    <span className='Copyright'>CopyRight Zakaria Zouazou </span>
       </div>
   </div>
</>
  )
}

export default Nav_left








const thisfunction = () => {
    document.querySelector(".nav_left").classList.add("for-decration")
    document.querySelector(".buttnee").classList.add("batn")
    document.querySelector(".nav_left").classList.remove('out')
}
const thifunction = () => {
  document.querySelector(".buttnee").classList.remove("batn")
  document.querySelector(".nav_left").classList.add('out')
  // document.querySelector(".nav_left").classList.remove("for-decration")
  
}