import React from 'react'
import './Post.css'
import edit from '../../assets/Symbol/edit.png'
import delit from '../../assets/Symbol/delet.png'
import SymBol1 from '../../assets/Symbol/SS (1).png'
import SymBol2 from '../../assets/Symbol/SS (2).png'
import SymBol3 from '../../assets/Symbol/SS (3).png'
import SymBol4 from '../../assets/Symbol/SS (4).png'
import SymBol5 from '../../assets/Symbol/SS (5).png'


const Post = () => {
  return (
    <div className='Post_container'>
    <h5 className='Profil_info'>Profil info</h5>
           <ul className='OverViewListe'>
               <ul className='OverViewListe_details'>
                    <li>Overview</li>
                    <li className='Special_OverViewListe'>... 
                         <div className='continer_of_Second_OverViewListe'>
                             <ul className='Second_OverViewListe'>
                                 <li><img src={edit}  /><img src="" alt="" /> Edit </li>
                                 <li><img src={delit}  /><img src="" alt="" /> Delet </li>
                             </ul>
                         
                         </div>
                    </li>
               </ul>
               <ul className='Post_text'>
                  <li>He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed. Moderate do subjects to distance.</li>
               </ul>
           </ul>
           <div className='Main_container_post'>
           <div>
                    <ul className='Profile_mini_details'>
                        <li><img src={SymBol1} alt="" /> Born : <strong> 2001 , 2 aout</strong> </li>
                        <li className='Special_OverViewListe '> ...
                                <div className='continer_of_Second_OverViewListe kaak '>
                                    <ul className='Second_OverViewListe'>
                                        <li><img src={edit}  /><img src="" alt="" /> Edit </li>
                                        <li><img src={delit}  /><img src="" alt="" /> Delet </li>
                                    </ul>
                                
                                </div>
                            </li>
                    </ul>


                    <ul className='Profile_mini_details'>
                        <li><img src={SymBol2} alt="" /><strong>Lead devlloper</strong> </li>
                        <li className='Special_OverViewListe '> ...
                                <div className='continer_of_Second_OverViewListe kaak '>
                                    <ul className='Second_OverViewListe'>
                                        <li><img src={edit}  /><img src="" alt="" /> Edit </li>
                                        <li><img src={delit}  /><img src="" alt="" /> Delet </li>
                                    </ul>
                                
                                </div>
                            </li>
                    </ul>


                    <ul className='Profile_mini_details'>
                        <li><img src={3} alt="" /> joind on : <strong>Juil</strong> </li>
                        <li className='Special_OverViewListe '> ...
                                <div className='continer_of_Second_OverViewListe kaak '>
                                    <ul className='Second_OverViewListe'>
                                        <li><img src={edit}  /><img src="" alt="" /> Edit </li>
                                        <li><img src={delit}  /><img src="" alt="" /> Delet </li>
                                    </ul>
                                
                                </div>
                            </li>
                    </ul>




                </div>
                <div>
                    <ul className='Profile_mini_details'>
                        <li><img src={SymBol4} alt="" /> Status<strong>Single</strong> </li>
                        <li className='Special_OverViewListe '> ...
                                <div className='continer_of_Second_OverViewListe kaak '>
                                    <ul className='Second_OverViewListe'>
                                        <li><img src={edit}  /><img src="" alt="" /> Edit </li>
                                        <li><img src={delit}  /><img src="" alt="" /> Delet </li>
                                    </ul>
                                
                                </div>
                            </li>
                    </ul>


                    <ul className='Profile_mini_details'>
                        <li><img src={SymBol3} alt="" /> Live in :<strong>Maroc-tunis</strong> </li>
                        <li className='Special_OverViewListe '> ...
                                <div className='continer_of_Second_OverViewListe kaak '>
                                    <ul className='Second_OverViewListe'>
                                        <li><img src={edit}  /><img src="" alt="" /> Edit </li>
                                        <li><img src={delit}  /><img src="" alt="" /> Delet </li>
                                    </ul>
                                
                                </div>
                            </li>
                    </ul>


                    <ul className='Profile_mini_details'>
                        <li><img src={SymBol5} alt="" /> Email<strong>aakariaouazou@gmail.com</strong> </li>
                        <li className='Special_OverViewListe '> ...
                                <div className='continer_of_Second_OverViewListe kaak '>
                                    <ul className='Second_OverViewListe'>
                                        <li><img src={edit}  /><img src="" alt="" /> Edit </li>
                                        <li><img src={delit}  /><img src="" alt="" /> Delet </li>
                                    </ul>
                                
                                </div>
                            </li>
                    </ul>




                </div>
           </div>

    </div>
  )
}

export default Post
