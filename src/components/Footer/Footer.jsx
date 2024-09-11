import React from 'react'
import "./footer.css"
import { footerLink, homeMenu } from '../../common/Menus'

const Footer = () => {
    return (
        <footer className='footer' id='footer'>
            <div className="footer__container container">
                <h1 className="footer__title">Booren</h1>

                <ul className="footer__list">
                    {footerLink.map((menu, index) => (
                        <li key={index}>
                            <a href={menu.href} className="footer__link">{menu.title}</a>
                        </li>
                    ))}
                </ul>
                <ul className="footer__social">
                    {homeMenu.map((menu, index) => (
                        <li key={index} >
                            <a target='_blank' className="footer__social-link" href={menu.href}>{menu.icon}</a>
                        </li>
                    ))}
                </ul>

                <span className='footer__copy'>&#169; Crypticalcoder. All rigths reserved</span>
            </div>
        </footer>
    )
}

export default Footer