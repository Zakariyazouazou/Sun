import React from 'react'
import './Nav_right.css'
import { Buttons1 } from '../../Component/Index'
import { Special_zone } from '../Index'
import { Sunsh , news } from '../../Data/Data'
import {Only_person , News} from '.././../Component/Index'
import { Link } from 'react-router-dom'


const Nav_right = () => {
     var marche = Sunsh.map(element =>{
         return(
          <Only_person img={element.img}  name = {element.name}  bio={element.bio}  accepted={element.accepted} />
         )
     })
     var TheNews = news.map(element =>{
          return(
               <News the_News={element.news} News_date={element.heure}/>
          )
      })
  return (
    <>
      
     <div className='nav_right'>
             <h5 className='Titel'>Who to follow </h5>
        
        <div className="followres">
           {marche}
             <Buttons1 ><Link to="">View more</Link></Buttons1>
        </div>
        <div className='News'>
             <h5 className='Titel'>whats New today</h5>
             <ul className='akhbare'>
                 <Link to="/News"><li className='THe_News' >Ten questions you should answer truthfully</li></Link>
                <Link to="/News"><li className ='News_date'> 2hr</li></Link>
             </ul>
             {TheNews}
             <div className="more">
                       <div className="col-3">
                            <div className="snippet" data-title=".dot-elastic">
                                <div className="stage">
                                 <div className="dot-elastic"></div>
                               </div>
                            </div>
                       </div> 
                       <span><Link to="/News">Fore More</Link> </span>
             </div>
             
        </div>
     </div>  
    </>
  )
}

export default Nav_right


