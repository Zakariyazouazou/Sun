import React from 'react'
import './About.css'
import SymBolAdd from '../../assets/Symbol/add (2).png'
import SymBolCommet from '../../assets/Symbol/SS.png'
import SymBol1 from '../../assets/Symbol/SS (1).png'
import SymBol4 from '../../assets/Symbol/SS (4).png'
import SymBol5 from '../../assets/Symbol/SS (5).png'
import ExP1 from '../../assets/Symbol/Exeperience (1).png'
import ExP2 from '../../assets/Symbol/Exeperience (2).png'
import ExP3 from '../../assets/Symbol/Exeperience (3).png'
import ExP4 from '../../assets/Symbol/Exeperience (4).png'
import AboutImg1 from '../../assets/nrml_pic/pic (1).jpg'
import AboutImg2 from '../../assets/nrml_pic/pic (31).jpg'
import AboutImg3 from '../../assets/nrml_pic/pic (5).jpg'
import AboutImg4 from '../../assets/nrml_pic/pic (7).jpg'
import AboutImg5 from '../../assets/nrml_pic/pic (9).jpg'
import AboutImg6 from '../../assets/nrml_pic/pic (11).jpg'
import AboutImg7 from '../../assets/nrml_pic/pic (13).jpg'
import AboutImg8 from '../../assets/nrml_pic/pic (15).jpg'
import AboutImg9 from '../../assets/nrml_pic/pic (17).jpg'



const About = () => {
  return (
    <div className='About_container Other_About_container'>
       <div>
         <h5>About</h5>
         <span>He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy.</span>
         <ul>
               <li><img src={SymBol1} alt="" /> Born : <strong> 2001 , 2 aout</strong> </li>
               <li><img src={SymBol4} alt="" /> Status<strong>Single</strong> </li>
               <li><img src={SymBol5} alt="" /> Email<strong>aakariaouazou@gmail.com</strong> </li>
         </ul>

        </div>





        <div className='Exeperience_container'>
         <h5>Experience</h5>  
              <ul>
                <li><img src={ExP1} alt="" /> <strong> Adobe designe photoshop</strong> <br /> <span>May 2015 – Present Employment Duration 8 mos </span></li>
                <li><img src={ExP2} alt="" /> <strong>Communication</strong> <br /><span>May 2017 – Present Employment Duration 1 yrs 5 mos</span></li>
                <li><img src={ExP3} alt="" /> <strong>Montage video </strong> <br /><span>May 2022 – Present Employment Duration 6 yrs 10 mos</span> </li>
                <li><img src={ExP4} alt="" /> <strong>Marketting degital</strong><br /> <span>May 2022 – Present Employment Duration 6 yrs 10 mos</span></li>
                <h5 className='For_More'>+</h5>
             </ul>
        </div>




        <div className='About_photo'>
         <ul>
             <li><h5>Photos</h5></li>
             <li><h5 className='For_More'>See all</h5></li>
         </ul>
         <div className='Album_Photo'>
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



        <div className="Abou_frends">
            <ul>
                    <li><h5>Freinds</h5></li>
                    <li><h5 className='For_More'>See all</h5></li>
            </ul>
            <div className='Abou_frends_container_images'>
                 <div className='Only_Abou_frends_container'>
                       <div className='Abou__Image'><img src={AboutImg3} /></div>
                       <h6>Asma Mokhtare</h6>
                       <span>16 mutuel connection</span> <br />
                       <img src={SymBolAdd} />
                       <img src={SymBolCommet} />
                 </div>
                 <div className='Only_Abou_frends_container'>
                       <div className='Abou__Image'><img src={AboutImg2} /></div>
                       <h6>Asma Mokhtare</h6>
                       <span>16 mutuel connection</span> <br />
                       <img src={SymBolAdd} />
                       <img src={SymBolCommet} />
                 </div>
                 <div className='Only_Abou_frends_container'>
                       <div className='Abou__Image'><img src={AboutImg1} /></div>
                       <h6>Asma Mokhtare</h6>
                       <span>16 mutuel connection</span> <br />
                       <img src={SymBolAdd} />
                       <img src={SymBolCommet} />
                 </div>
                 <div className='Only_Abou_frends_container'>
                       <div className='Abou__Image'><img src={AboutImg4} /></div>
                       <h6>Asma Mokhtare</h6>
                       <span>16 mutuel connection</span> <br />
                       <img src={SymBolAdd} />
                       <img src={SymBolCommet} />
                 </div>
                 <div className='Only_Abou_frends_container'>
                       <div className='Abou__Image'><img src={AboutImg2} /></div>
                       <h6>Asma Mokhtare</h6>
                       <span>16 mutuel connection</span> <br />
                       <img src={SymBolAdd} />
                       <img src={SymBolCommet} />
                 </div>
                 <div className='Only_Abou_frends_container'>
                       <div className='Abou__Image'><img src={AboutImg4} /></div>
                       <h6>Asma Mokhtare</h6>
                       <span>16 mutuel connection</span> <br />
                       <img src={SymBolAdd} />
                       <img src={SymBolCommet} />
                 </div>

                 
            
            </div>
        </div>
    </div>
  )
}

export default About
