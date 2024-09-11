import React from 'react'
import { homeMenu } from '../../common/Menus'

const Social = () => {
    return (
        <div className='home__social'>
            {homeMenu.map((menu, index) => (
                <a key={index}
                    href={menu.href}
                    target='_blank'
                    className="home__social-icon">
                    {menu.icon}
                </a>
            ))}
        </div>
    )
}

export default Social