import React from 'react'
import './Special_header.css'
import Logo_Home from '../../assets/Symbol/Symbol1 (1).png'
import last1 from '../../assets/Symbol/last (1).png'
import last2 from '../../assets/Symbol/last (2).png'
import last3 from '../../assets/Symbol/last (3).png'
import last4 from '../../assets/Symbol/last (4).png'
import last5 from '../../assets/Symbol/last (5).png'
import { Link } from 'react-router-dom'
const Special_header = () => {
  return (
    <div classNameName='Special_header_container'>
                    <nav className="navbar navbar-expand-lg navbar-light nnn navbar-brand-for-special-one">
                    <Link className="navbar-brand poule_titre Special_header_HeaderImg" to="/"><img src={Logo_Home} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
   
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto navbar-brand-for-special-one-liste">
                        <li className="nav-item active">
                            <Link className="nav-link" to="#"> <img className='idsgqds' src={last1} alt="" /> </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#"><img src={last4} alt="" /></Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src={last2} alt="" />
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="#">Action</Link>
                            <Link className="dropdown-item" to="#">Another action</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="#">Something else here</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" to="#"><img src={last3} alt="" /></Link>
                        </li>
                        </ul>
                                <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0 btne" type="submit">Search</button>
                        </form>
                    </div>
            </nav>
    </div>
  )
}

export default Special_header
