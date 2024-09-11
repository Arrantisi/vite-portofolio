import React from 'react'
import { infoMenu } from '../../common/Menus'

const Info = () => {
    return (
        <div className="about__info grid">
            {infoMenu.map((menu, index) => (
                <div key={index} className="about__box">
                    <i className='about__icon'>{menu.icon}</i>
                    <h3 className="about__title">{menu.title}</h3>
                    <span className="about__subtitle">{menu.subtitle}</span>
                </div>
            ))}
        </div>
    )
}

export default Info