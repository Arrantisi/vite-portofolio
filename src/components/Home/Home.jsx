import React from 'react'
import "./home.css"
import Social from './Social'
import Data from './Data'
import ScrollDown from './ScrollDown'
import { useTheme } from '../../common/themeContext'
import { LuMoonStar } from 'react-icons/lu'
import { FiSun } from 'react-icons/fi'

const Home = () => {

    const { theme, toggleTheme } = useTheme()

    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />
                    <div className="home__img">
                        <i onClick={toggleTheme} className='home__theme'>
                            {theme === 'light' ? <FiSun /> : <LuMoonStar />}
                        </i>
                    </div>
                    <Data />
                </div>
                <ScrollDown />
            </div>
        </section>
    )
}

export default Home