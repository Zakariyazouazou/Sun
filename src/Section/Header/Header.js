import React from 'react'
import'./Header.css'
import { Link } from 'react-router-dom'
import logo1 from '../../assets/Symbol/Symbol2 (1).png'
import logo2 from '../../assets/Symbol/Symbol2 (2).png'
import logo3 from '../../assets/Symbol/Symbol2 (3).png'
import Symbol from '../../assets/Symbol/Symbol1 (1).png'
const Header = () => {
  return (    
    < > 
        <nav className="navbar navbar-expand-lg  my_barre">
  <Link className="navbar-brand" to="/"><img src={Symbol} /></Link>
  <button className="navbar-toggler My_class" data-toggle="collapse" data-target="#navbarSupportedContent"  aria-expanded="false" aria-label="Toggle navigation">
    <input className='forcheckHeader' type="checkbox" id="active"/>
    <label htmlFor="active" className="menu-btn menu-btn-Header"><span></span></label>
    <label htmlFor="active" className="close menu-btn-close-Header"></label>
  </button>
  

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="#"><i className='form'>Home</i> <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#"><i className='form'>Link</i></Link>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className='form'>Dropdown </i>
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/Classic_home">Classic_home</Link>
          <Link className="dropdown-item" to="#">Another action</Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" to="#">Something</Link>
        </div>
      </li>
      <li className="nav-item dropdown">
      <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className='form'>Disabled</i></Link>
      </li>
    </ul>
    
    <htmlForm className="htmlForm-inline my-2 my-lg-0">
  <div className="search-box">
    <button className="btn-search btn-search-Header"><i className="fas fa-search"></i></button>
    <input type="text" className="input-search searchboxheader" placeholder="Type to Search..."/>
  </div>
    </htmlForm>
  </div>
  <ul className='listeMother'>
        <li className='children'><Link to="/Settings"><img src={logo1} alt="" /></Link></li>
        <li className='children'><Link to="/Messenger"><img src={logo2} alt="" /></Link></li>
        <li className='children'><Link to="/Messenger"><img src={logo3} alt="" /></Link></li>
    </ul>
</nav>
    </>
  )
}

export default Header


// <input className="htmlForm-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
// <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>