import React, { useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { serviceMenu } from '../../common/Menus'
import { IoClose } from 'react-icons/io5'
import { FaRegCheckCircle } from 'react-icons/fa'
import "./service.css"

const Service = () => {
    const [toggle, setToggle] = useState(0);

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offer</span>

            <div className="services__container container grid">
                {serviceMenu.map((menu) => (
                    <div key={menu.index} className="services__content">
                        <div className="">
                            <i className="services__icon">{menu.icon}</i>
                            <h3 className="services_title">{menu.title[0]} <br /> {menu.title[1]}</h3>
                        </div>

                        <span className="services__button" onClick={() => setToggle(menu.index)}>
                            view more
                            <i className='services__button-icon'><FaArrowRightLong /></i>
                        </span>

                        <div className={toggle === menu.index ? "services__modal active-modal" : "services__modal"}>
                            <div className="services__modal-content">
                                <i className="services__modal-close" onClick={() => setToggle(!toggle)}>
                                    <IoClose />
                                </i>

                                <h3 className="services__modal-title">
                                    {menu.modal.title}
                                </h3>
                                <p className="services__modal-desciption">
                                    {menu.modal.description}
                                </p>

                                <ul className="services__modal-services grid">
                                    {menu.modal.services.map((menu, index) => (
                                        <li key={index} className='services__modal-service'>
                                            <i className="services__modal-icon"><FaRegCheckCircle /></i>
                                            <p className="services__modal-info">
                                                {menu.info}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Service