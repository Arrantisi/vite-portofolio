import React, { useState } from 'react'
import "./qualification.css"
import { MdOutlineCalendarMonth } from 'react-icons/md'
import { PiGraduationCapLight } from 'react-icons/pi'
import { IoBriefcaseOutline } from 'react-icons/io5'

const Qualification = () => {
    const [toggle, setToggle] = useState(1)

    return (
        <section className="qualification section" id="qualification">
            <h3 className='section__title'>Qualification</h3>
            <span className='section__subtitle'>My Personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">

                    <div
                        className={toggle === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => setToggle(1)}
                    >
                        <i className='qualification__icon'> <PiGraduationCapLight /></i>
                        Education
                    </div>

                    <div
                        className={toggle === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => setToggle(2)}
                    >
                        <i className='qualification__icon'> <IoBriefcaseOutline /></i>
                        Experiece
                    </div>

                </div>

                <div className="qualification__sections">
                    <div className={toggle === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Design</h3>
                                <span className="qualification__subtitle">Bartin university</span>
                                <div className="qualification__calender">
                                    <i className="qualification__calender-icon"><MdOutlineCalendarMonth /></i>
                                    2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Art Directory</h3>
                                <span className="qualification__subtitle">Bartin university</span>
                                <div className="qualification__calender">
                                    <i className="qualification__calender-icon"><MdOutlineCalendarMonth /></i>
                                    2021 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Developer</h3>
                                <span className="qualification__subtitle">Bartin university</span>
                                <div className="qualification__calender">
                                    <i className="qualification__calender-icon"><MdOutlineCalendarMonth /></i>
                                    2017 - 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">UX Experiece</h3>
                                <span className="qualification__subtitle">Bartin university</span>
                                <div className="qualification__calender">
                                    <i className="qualification__calender-icon"><MdOutlineCalendarMonth /></i>
                                    2015 - 2018
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggle === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Art Directory</h3>
                                <span className="qualification__subtitle">Bartin university</span>
                                <div className="qualification__calender">
                                    <i className="qualification__calender-icon"><MdOutlineCalendarMonth /></i>
                                    2021 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Developer</h3>
                                <span className="qualification__subtitle">Bartin university</span>
                                <div className="qualification__calender">
                                    <i className="qualification__calender-icon"><MdOutlineCalendarMonth /></i>
                                    2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">UX Experiece</h3>
                                <span className="qualification__subtitle">Bartin university</span>
                                <div className="qualification__calender">
                                    <i className="qualification__calender-icon"><MdOutlineCalendarMonth /></i>
                                    2015 - 2018
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Developer</h3>
                                <span className="qualification__subtitle">Bartin university</span>
                                <div className="qualification__calender">
                                    <i className="qualification__calender-icon"><MdOutlineCalendarMonth /></i>
                                    2017 - 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Qualification