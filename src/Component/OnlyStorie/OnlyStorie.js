import React from 'react'
import './OnlyStorie.css'
var name = "unique_histoire3"

const OnlyStorie = (props) => {
  return (
    <>
                          <div className={props.className}>
                              <a  className='Storie-person' href=""><h3 >{props.StoriName}</h3></a>
                         </div>
    </>
  )
}

export default OnlyStorie
