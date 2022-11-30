import React from 'react'
import './Buttons.css'
const Buttons = (props) => {
  return (
    <>
    <button className="button-64" id={props.Id} role="button"><span className="text">{props.children}</span></button>
    </>
  )
}

export default Buttons


const Buttons1 = (props) => {
  return (
    <>
    <button className="button-18" role="button">{props.children}</button>
    </>
  )
}



export {Buttons1}

















