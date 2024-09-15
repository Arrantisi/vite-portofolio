import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"
import { FaAirbnb, FaArrowRight, FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa'
import { MdOutlineMailOutline } from 'react-icons/md'


const Contact = () => {
    const form = useRef();
    const [snackbar, setSnackbar] = useState(true)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lytvafl', 'template_jqfj80d', form.current, {
            publicKey: 'iZwshNWaoK4R-BYUB',
        })
        e.target.reset();
        setSnackbar(!snackbar)
        setTimeout(() => {
            setSnackbar(snackbar)
        }, 3000);
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">talk to me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="contact__card-icon"><MdOutlineMailOutline /></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">User@gmail.com</span>

                            <a href="mailto:examplemail@gmail.com.com" className="contact__button">
                                write me
                                <i className="contact__button-icon"><FaArrowRight /></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="contact__card-icon"><FaWhatsapp /></i>

                            <h3 className="contact__card-title">whatsaap</h3>
                            <span className="contact__card-data">(501) 008 76 07</span>

                            <a href="https://api.whatsapp.com/send?phone=5010087607&text=Hello, more information!" target='_blank' className="contact__button">
                                write me
                                <i className="contact__button-icon"><FaArrowRight /></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="contact__card-icon"><FaFacebookMessenger /></i>

                            <h3 className="contact__card-title">Massenger</h3>
                            <span className="contact__card-data">user.12m3</span>

                            <a href="https://m.me/crypticalcoder" className="contact__button">
                                write me
                                <i className="contact__button-icon"><FaArrowRight /></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me your project</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label
                                className="contact__form-tag">Name</label>
                            <input
                                type="text"
                                name='name'
                                className="contact__form-input"
                                placeholder='Insert your name' />
                        </div>
                        <div className="contact__form-div">
                            <label
                                className="contact__form-tag">Email</label>
                            <input
                                type="email"
                                name='email'
                                className="contact__form-input"
                                placeholder='Insert your email' />
                        </div>
                        <div className="contact__form-div contact__form-area">
                            <label
                                className="contact__form-tag">Project</label>
                            <textarea
                                name="project"
                                cols="30"
                                rows="10"
                                className='contact__form-input'
                                placeholder='write your project'
                            ></textarea>
                        </div>
                        <button type='submit' className='button button--flex'>
                            Send Massage
                            <FaAirbnb className='home__contact-icon' />
                        </button>

                    </form>
                </div>
            </div>
            <div className={`contact__snackbar ${snackbar ? "" : "show-snackbar"}`}>
                <p className='contact__snackbar-content'>your massage has been sended</p>
            </div>
        </section>
    )
}

export default Contact