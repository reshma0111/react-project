import React from 'react'
import {Link} from 'react-router-dom' ;
const Header = props=> {
    const {branding} = props;
    return (



        <nav className="navbar navbar-expand-sm navbar-dark bg-warning mb-3 py-0">
          <div className="container ">
            <a className="navbar-brand  ">{branding}</a>
          <ul className="navbar-nav mr-4 ">
            <li className="nav-item px-2">
              <Link to ="/"href="nav-link">
                <i className="fas fa-home"></i>Home</Link>
                </li>
                <li class="nav-item px-2">
              <Link to ="add"href="nav-link">
              <i className="fas fa-plus"></i>Add</Link>
                </li>
                <li class="nav-item">
              <Link to ="/about"href="nav-link px-2">
              <i className="fas fa-question"></i>About</Link>
                </li>

          </ul>
          </div>
     
      </nav>
    )
}

export default Header
