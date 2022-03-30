/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import './styles.scss';
import ProfileAccount from 'components/ProfileAccount';
import MenuContentMobile from './MenuContentMobile';

const { Header: HeaderContainer } = Layout;

const Header = ({ links, showMenu, toggleMenu }) => {
  const location = useLocation();
  return (
    <HeaderContainer>
      <div className="menu-container">
        <div className="content-header">
          <div className="header-left">
            <Link to="/">
              <div className="header-logo">
                <img src="/images/logo.png" title="HC Software" alt="HC Software" />
                <span>Reactjs</span>
              </div>
            </Link>
            <ul className="menu-link">
              {links.map((item, index) => {
                const isHttp = item?.href?.startsWith('http');
                const Tag = isHttp ? 'a' : Link;
                const propsLink = isHttp ? { href: item.href, target: item.target } : { to: item.href };
                return (
                  <li key={`menu-${index}`} className={location.pathname === item.href ? 'active' : ''}>
                    <Tag {...propsLink} rel="noreferrer">
                      {item.label}
                    </Tag>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="header-right">
            <div className="header-right-desktop">
              <ProfileAccount className="custom-account" isMobile={false} />
            </div>
            <div className="header-right-mobile">
              <input type="checkbox" id="menu" checked={showMenu} onChange={toggleMenu} />
              <label htmlFor="menu" className="icon">
                <div className="menu" />
              </label>
            </div>
          </div>
        </div>
        {window.innerWidth <= 576 && <MenuContentMobile visible={showMenu} links={links} toggleMenu={toggleMenu} />}
      </div>
    </HeaderContainer>
  );
};

export default Header;
