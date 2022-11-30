import React from 'react'
import './Containeree.css'

const Containeree = (props) => {
  return (
    <div className='My_containeree'>
       {props.children}
    </div>
  )
}

export default Containeree