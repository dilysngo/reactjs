import React, { useState } from 'react';
import './styles.scss';
import Header from './Header';
import Footer from 'components/Footer';
import { links } from './config';

const Menu = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    document.querySelector('body').style.overflow = showMenu ? 'unset' : 'hidden';
    setShowMenu((prev) => !prev);
  };

  return (
    <>
      <Header showMenu={showMenu} toggleMenu={toggleMenu} links={links} />
      {children}
      <Footer links={links} />
    </>
  );
};

export default Menu;
