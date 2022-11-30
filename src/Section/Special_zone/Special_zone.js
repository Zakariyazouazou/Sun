import React from 'react'
import './Special_zone.css' 
import { ForMesneger } from '../../Data/Data'
import {Only_friends} from '../../Component/Index'
import SSS from '../../assets/Symbol/SS.png'
const Special_zone = (props) => {

    var chat = ForMesneger.map(element =>{
        return(
         <Only_friends img={element.img}  name = {element.name}  bio={element.bio}  Msg={element.Msg} />
        )
    })



  return (
  <>
  
    <img className='For_chat' src={SSS} onClick={Showme} alt="" />
    <span className='Drop' onClick={Dropthis}>X</span>
    
    <div className='Specialzone'>
    
    <div className='Header_specialzone'>
              <htmlForm className="htmlForm-inline my-2 my-lg-0 forthis">
                     <div className="search-box ">
                          <button className="btn-search"><i className="fas fa-search"></i></button>
                          <input type="text" className="input-search" placeholder="What do looked for"/>
                      </div>
            </htmlForm>
          </div>
         <div className="basicsMessenger">
         <h5 className='Titel forthis fixation'> Messagering </h5>
        
         </div>
          {chat}

      </div>
  </>
  )
}

export default Special_zone





const Showme = () => {
  document.querySelector(".Specialzone").classList.add("nany")
  document.querySelector(".Specialzone").classList.remove("other")
  document.querySelector(".Drop").classList.add("Drope")

}


const Dropthis = () => {
  document.querySelector(".Specialzone").classList.add("other")
  document.querySelector(".Drop").classList.remove("Drope")


}