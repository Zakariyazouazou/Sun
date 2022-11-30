import React from 'react'
import './Add_friends.css'
import face from '../../assets/faces/Faces (1).jpg'
import { freinds } from '../../Data/Data';
import { Only_friens } from '../../Component/Index'; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import {  Scrollbar, A11y } from 'swiper'
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import SwiperCore, {
  EffectCoverflow,
} from "swiper";
import  { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.min.css'
//import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);


const Add_friends = () => {
    var Forfriends = freinds.map(element =>{
        return(
            <SwiperSlide> <Only_friens img={element.img} name={element.name}/> </SwiperSlide>
        )
    })
  return (
   <div className='papa'>
     <div className="container">
      
      <Swiper  navigation={true} effect={"coverflow"} centeredSlides={true} slidesPerView={window.innerWidth < 768 ? 1 : "auto"} loop={true} coverflowEffect={{ rotate: 50, stretch: 0,   depth: 100, modifier: 1, slideShadows: true}} pagination={{ clickable: true}} className="mySwiper" >
             {Forfriends}
      </Swiper>
      </div>
            
            
   </div>
  )
}

export default Add_friends
