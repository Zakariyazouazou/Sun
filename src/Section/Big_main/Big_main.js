import React from 'react'
import {Header , Nav_left, Poursentage , Nav_right ,Many_pages, Special_zone, Storie , Statu , Representation , Publicite , Statu_exempl , Add_friends ,About ,Nav,ChatoBody } from '../Index'
import {Containeree} from '../../Component/Index'
import {Buttons} from '../../Component/Index'
const Big_main = () => {
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

export default Big_main

       