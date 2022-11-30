import React from 'react'
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper";
//  import "swiper/css/pagination";
// import "swiper/css/navigation";

import { ReactDOM } from 'react-dom/client'
import './Storie.css'
import { StoRie } from '../../Data/Data'
import face from '../../assets/faces/Faces (3).jpg'
import {OnlyStorie} from '../../Component/Index'
import { Pagination, Navigation } from "swiper";
// var name = "unique_histoire3"
// var name1 = ""
const Storie = () => {
  var showing = StoRie.map(element =>{
    return(
      <SwiperSlide> <OnlyStorie className={element.name}  StoriName={element.StoriName}/>  </SwiperSlide>   
    )
})
  return (
    <div className='StorieContainer'>
          <div className="all">
                        <div className="ajouter">
                              <div onClick="add()">
                                <img src=""/>
                                <h3>Post a story</h3>
                              </div>
                              
                         </div>
                            <>
                                          <Swiper
                                            slidesPerView={3}
                                            spaceBetween={30}
                                            slidesPerGroup={3}
                                            loop={true}
                                            loopFillGroupWithBlank={true}
                                            pagination={{
                                              clickable: true,
                                            }}
                                            navigation={true}
                                            modules={[Pagination, Navigation]}
                                            className="mySwiper"
                                          >  
                                            {showing}
                                            
                                          </Swiper>
                                        </>
                                         
                      </div>
    </div>
  )
}

export default Storie
