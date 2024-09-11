import React from 'react'
import { backendMenu } from '../../common/Menus'

const Backend = () => {
    return (
        <div className="skills_content">
            <h3 className="skills__title">Backend Developer</h3>

            <div className="skills__box">
                {backendMenu.map((menu, index) => {
                    return (
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
                    )
                })}
            </div>

        </div>
    )
}

export default Backend