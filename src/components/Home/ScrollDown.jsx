import React from 'react'
import { FaArrowDown } from 'react-icons/fa'
import { LuMouse } from 'react-icons/lu'

const ScroolDown = () => {
    return (
        <div className="home__scroll">
            <a href="#footer" className="home__scroll-button button-flex">
                <LuMouse className='home__scroll-mouse' />
                <span className='home__scroll-name'>
                    Scroll Down
                </span>
                <i className='home__scroll-arrow'>
                    <FaArrowDown />
                </i>
            </a>
        </div>
    )
}

export default ScroolDown