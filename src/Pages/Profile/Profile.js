import React from 'react'
import './Profile.css'
import { BrowserRouter as Router , Route , Routes ,Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Many_pages , Statu_exempl , Representation, Add_friends , Poursentage ,Publicite ,Statu , About,Acitivitie , Connection ,Media , Event, Header , Main_Home} from '../../Section/Index'
import {Containeree} from '../../Component/Index'
import {Post} from '../../Component/Index'
import Sym1 from '../../assets/Symbol/Sym (1).png'
import Sym2 from '../../assets/Symbol/Sym (2).png'
import Sym3 from '../../assets/Symbol/Sym (3).png'


const Profile = () => {
  return (
    <>
            <Header/>
            <About/>
            <Containeree>
              <div className="identification_profile">
                                <div className="background_profile"></div>
                                <div className="My_pic_profile"></div>
                                <h2 className="My_name">Zakariya Zouazou</h2>
                                <h4 className="personnel_speache">hello my name zakariya Zouazou and this my work if you wante page like this contact me</h4>
                                <div className="my_nombers">
                                    <h2 className="extra"> <strong>256</strong><br/>post</h2>
                                    <h2 className="extra"><strong>5,5k</strong><br/>followers</h2>
                                    <h2 className="extra"><strong>700</strong><br/>following</h2>
                                </div>
                                <ul className='Profile_option'>
                                  <li><img src={Sym1} /> Devloper </li>
                                  <li><img src={Sym2}  />Maroc-Tunisie </li>
                                  <li><img src={Sym3}  /> Fst Tunis universitee </li>
                                </ul>
                                <ul className='Service_profile'>
                                    <li><Link to="/Profile">Post</Link></li>
                                    <li><Link to="/Profile1">About</Link></li>
                                    <li><Link to="/Profile2">Connections 230</Link></li>
                                    <li><Link to="/Profile3">Media</Link></li>
                                    <li><Link to="/Profile4">Events</Link></li>
                                    <li><Link to="/Profile5">Activity</Link></li>
                                </ul>
                </div>
               
               
           
                 
                           <Main_Home/>
                      
        
         
                    
              </Containeree> 
    </>
  )
}

export default Profile
            //<Event/>
            //<Post/>
            //<Media/>
            //<Connection/>
            // <Acitivitie/>


//                                  <li><Link to="/Main_Home">Post</Link></li>




          //   <Routes>
          //   <Route path='/' element={<Main_Home/>}/>  
          //   <Route path='/Event' element={<Event/>}/>                   
          //   <Route path='/Post' element={<Post/>}/>   
          //   <Route path='/Media' element={<Media/>}/>   
          //   <Route path='/Connection' element={<Connection/>}/>  
          //   <Route path='/Acitivitie' element={<Acitivitie/>}/>   
          // </Routes> 