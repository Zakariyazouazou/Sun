import React from 'react'
import './Classic_home.css'
import { Sidebar ,Special_zone , Special_header, Header , Statu, Storie , Representation , Publicite , Statu_exempl , Add_friends , Many_pages , Poursentage , } from '../../Section/Index'
import { Containeree } from '../../Component/Index'
import { Buttons } from '../../Component/Index'
const Classic_home = () => {
  return (
    <div>
      
       <Sidebar/>
       <Special_header/>
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
      
      <Special_zone/>
       
    </div>
  )
}

export default Classic_home
