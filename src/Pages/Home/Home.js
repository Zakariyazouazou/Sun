import React from 'react'
import { Storie , Statu , Nav_right, Nav_left, Special_zone, Representation , Publicite , Statu_exempl , Add_friends , Many_pages , Poursentage ,Header , } from '../../Section/Index'
import {Containeree} from '../../Component/Index'
import { Buttons } from '../../Component/Index'
const Home = () => {
  return (
    <>

           <Header/>
           <Nav_right/> 
                 <Containeree>
                       <Storie/>   
                        <Statu/>        
                        <Representation/>
                        <Publicite/>
                        <Statu_exempl/>
                        <Add_friends/>
                        <Many_pages/>
                        <Poursentage/>
                        <div className="uniqueforthis">
                               <Buttons Id="forthiS" >See More ... </Buttons>
                        </div>
              </Containeree>
        <Nav_left/>
        <Special_zone/>
    
    </>
  )
}

export default Home