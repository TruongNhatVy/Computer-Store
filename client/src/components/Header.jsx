import React, { useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/images/logoLaptop.jpg'
const NavItem = [
  {
    display: "Trang Chủ",
    path: "/"
  },
  {
    display: "Sản phẩm",
    path: "/catelog",

  },
  {
    display: "Phụ kiện",
    path: "/accessori",
  },
  {
    display: "Liên hệ",
    path: "/contact",

  }
]
const Header = () => {
  const { pathname } = useLocation()
  const activeNavBar = NavItem.findIndex(e => e.path === pathname)
  const headerRef = useRef(null) /// active param when handle 
  const menuLeft = useRef(null);/// toggle menuLefft
  const menuToggle =()=>{
    menuLeft.current.classList.toggle('active');
  }
  const handleScroll = () => {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop >40) {
      headerRef.current.classList.add("shrink")
    }
    else {
      
      headerRef.current.classList.remove("shrink")
    }

  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  // ------ DISUNMOUTED WHEN REMOVE FUNCTION -------------------------------- 
    return () => {
      window.removeEventListener("scroll", handleScroll)
    };
  }, []);
  return (
    // ----------------------Header----------------------
    <div className='header' ref={headerRef}>
      <div className='container'>
        <div className='header__logo'>
          <Link to='/Homepage'>
            <img src={logo} alt='logo' width='100' height='100' />
          </Link>
        </div>
        <div className='header__menu'>
          <div className='header__menu__mobile-toggle' onClick={menuToggle}>
            <box-icon type="bx" name="menu-alt-left"></box-icon>
          </div>
          <div className='header__menu__left' ref={menuLeft}>
            <div className='header__menu__left__close' onClick={menuToggle}>
              <box-icon type="bx" name="chevron-left"></box-icon>
            </div>
            {NavItem.map((item, index) => {
              return (
                <div key={index} 
                onClick={menuToggle}
                className={`header__menu__item header__menu__left__item ${index === activeNavBar ? 'active' : ''}`}>
                  <Link to={item.path}>
                    <span>{item.display}</span>
                  </Link>
                </div>
              )
            })}
          </div>
          <div className='header__menu__right'>
            <div className='header__menu__right__item header__menu__item '>
              <box-icon type="bx" name="search"></box-icon>
            </div>
            <div className='header__menu__right__item header__menu__item'>
              <Link to="/cart">
                <box-icon type="bx" name="cart"></box-icon>
              </Link>

            </div>
            <div className='header__menu__right__item header__menu__item'>
              <box-icon type="bx" name="user"></box-icon>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Header