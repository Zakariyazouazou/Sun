import React from 'react'
import './Sidebar.css'
import pic1 from '../../assets/Symbol/Exeperience (4).png'
import pic2 from '../../assets/Symbol/3048122.png'
import pic3 from '../../assets/Symbol/edit.png'
import pic4 from '../../assets/Symbol/Symbol3 (6).png'
import pic5 from '../../assets/Symbol/Symbol4 (2).png'
import pic6 from '../../assets/Symbol/Symbol3 (6).png'
import pic7 from '../../assets/Symbol/Symbol3 (1).png'
import pic8 from '../../assets/Symbol/Symbol3 (4).png'
import pic9 from '../../assets/Symbol/Symbol3 (6).png'
import pic10 from '../../assets/Symbol/Symbol3 (2).png'
import pic11 from '../../assets/Symbol/Symbol3 (5).png'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <>
       <div className="special_nav">
          <h3 className='bb' onClick={clickMe} >click me</h3>
           <div className="thebigfather">
                
               <div className="alwaysshow" >
                <ul>
                    <li><img src={pic1} alt="" /></li>
                    <li><img src={pic2} alt="" /></li>
                    <li><img src={pic3} alt="" /></li>
                    <li><img src={pic4} alt="" /></li>
                    <li><img src={pic5} alt="" /></li>
                    <li><img src={pic6} alt="" /></li>
                    <li><img src={pic7} alt="" /></li>
                    <li><img src={pic8} alt="" /></li>
                    <li><img src={pic9} alt="" /></li>
                    <li><img src={pic10} alt="" /></li>
                    <li><img src={pic11} alt="" /></li>
                </ul>
               </div>
               <div className="incondition" >
                <ul>
                        <li><Link to="/Profile">Feed</Link></li>
                        <li><Link to="/Profile2">Connections</Link></li>
                        <li><Link to="/News">Latest News</Link></li>
                        <li><Link to="/Profile4">Events</Link></li>
                        <li><Link to="/">Groups</Link></li>
                        <li><Link to="/Messenger">Notificatons</Link></li>
                        <li><Link to="/Settings">Settings</Link></li>
                        <li><Link to="/Profile3">Photos</Link></li>
                        <li><Link to="/Profile1">Celebretions</Link></li>
                        <li><Link to="/">Video</Link></li>
                        <li><Link to="/Messenger">messaging</Link></li>
               </ul>

               </div>
                
           </div>
       
             <h4 onClick={DropMe} className='To_drop'>X</h4>
         
       </div>
    
    </> 
    


  )
}

export default Sidebar




const clickMe = () => {
     document.querySelector('.incondition').classList.add('ForshowUp') 
     document.querySelector('.To_drop').classList.add('ForshowUp')  
     document.querySelector('.incondition').classList.remove('exit') 
     document.querySelector('.To_drop').classList.remove('exit')   
  
}



const DropMe = () => {
  document.querySelector('.incondition').classList.add('exit')   
  document.querySelector('.To_drop').classList.add('exit')
}










