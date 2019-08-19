import React from 'react';
import styles from './Navbar.module.scss';
import User from './User';

// Imagenes del sidebar
import logout from '../../static/img/Icons/logout.svg';

const NavbarComponent = () => {
  return (
    <div className="flex justify-between items-center w-full shadow-md navbar ">
      <div className="p-3 text-xl border-r-2 border-gray ">
        <strong className="text-4xl">BITA</strong> Dashboard
      </div>
      <div className="flex">
        <User />
        <div className="flex items-center mr-4">
          <img src={logout} alt="Logo" className={styles.img} />
          Log out
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
