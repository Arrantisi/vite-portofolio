import React from 'react'
import "./scrollUp.css"
import { FaArrowUp } from 'react-icons/fa'

const ScrollUp = () => {

    window.addEventListener('scroll', () => {
        const scrollUp = document.querySelector(".scroll");
        if (window.scrollY >= 560) scrollUp.classList.add("scroll-show")
        else scrollUp.classList.remove("scroll-show")
    })

    return (
        <a href='#' className="scroll scroll__container" onClick={() => scrollToTop()}>
            <i className="scroll__icon"><FaArrowUp /></i>
        </a>
    )
}

export default ScrollUp