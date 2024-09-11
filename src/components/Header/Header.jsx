import React, { useState } from 'react'
import "./header.css"
import { NavMenu } from '../../common/Menus'
import { IoClose } from 'react-icons/io5'
import { RxDashboard } from 'react-icons/rx'

const Header = () => {

  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("#home");

  return (
    <header className='header'>
      <nav className="nav container">
        <a href="index.html" className='nav__logo'>Booren.</a>

        <div className={!toggle ? "nav__menu" : "nav__menu show-menu"}>
          <ul className="nav__list ">
            {NavMenu.map((menu, index) => (
              <li key={index} className="nav__item">
                <a href={menu.href}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(menu.href)
                  }}
                  className={active === menu.href ? "nav__link active-link" : "nav__link"}>
                  <i className='nav__icon'>{menu.icon}</i>
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>

          <i className='nav__close' onClick={() => setToggle(!toggle)}>
            <IoClose />
          </i>
        </div>
        <div className='nav__toggle' onClick={() => setToggle(!toggle)}>
          <i><RxDashboard /></i>
        </div>
      </nav>
    </header>
  )
}

export default Header