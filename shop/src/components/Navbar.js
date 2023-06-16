import React from 'react';
import '../styles/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'


const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className='nav-box'>
        <span className='my-shop' onClick={() => setShow(true)}>My shopping</span>
          <div className='cart' onClick={() => setShow(false)}>
            <span className='icon'>
            <FontAwesomeIcon icon={faCartShopping} />
            </span>
            <span>
              {size}
            </span>
          </div>
        
      </div>
    </nav>
  );
};

export default Navbar;