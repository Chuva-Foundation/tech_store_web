import React from 'react'
import { Link } from 'react-router-dom';

const NavMenu = () => {


  return (
    <div>
      <div>
        <nav>
          <div className="menu">
              <nav>
                  <ul>
                    <li id='menu-item' >
                      <Link to='/homepage'>Home</Link> 
                    </li>
                    <li id='menu-item' >produtos</li>
                    <li id='menu-item' >serviços</li>
                  </ul>
              </nav>
          </div>
        </nav>
      </div>

    </div>
  )
}

export default NavMenu