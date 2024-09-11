import React from 'react'
import { frontendMenu } from '../../common/Menus'

const Frontend = () => {
    return (
        <div className="skills_content">
            <h3 className="skills__title">Frontend Developer</h3>
            <div className="skills__box">
                {frontendMenu.map((menu, index) => (
                    <div key={index} className="skills__group">
                        {menu.content.map((menu, index) => (
                            <div key={index} className="skills__data">
                                <i className='skills__icon'>{menu.icon}</i>

                                <div>
                                    <h3 className="skills__name">{menu.name}</h3>
                                    <span className="skills__level">{menu.level}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Frontend