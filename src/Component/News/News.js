import React from 'react'
import './News.css'
import { Link } from 'react-router-dom'
const News = (props) => {
  return (
    <ul className='akhbare'>
                 <Link to="/News"><li className='THe_News' >{props.the_News}</li></Link>
                <Link to="/News"><li className ='News_date'> {props.News_date}</li></Link>
    </ul>
  )
}

export default News