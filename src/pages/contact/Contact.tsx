import React from 'react'
import registerVector from './../../assets/images/registerationVector.svg'

import movement from './../../assets/images/movement.svg'
import movementMale from './../../assets/images/movementMale.svg'

import reg_star1 from './../../assets/images/reg/reg_star1.svg';
import reg_star2 from './../../assets/images/reg/reg_star2.svg';
import reg_star3 from './../../assets/images/reg/reg_star3.svg';
import reg_star4 from './../../assets/images/reg/reg_star4.svg';
import reg_star5 from './../../assets/images/reg/reg_star5.svg';


import instagram from './../../assets/images/instagram.svg';
import x from './../../assets/images/x.svg';
import facebook from './../../assets/images/facebook.svg';
import linkdline from './../../assets/images/linkdline.svg';


import "./contact.css";

const Contact = () => {
  return (
    <>
        <section id='contact__section'> 

            <div className="flex__container">
                
                <div className="flex-column left">
                    
                    <div className="contact__container">
                        <h2 className='pink-color'>Get in touch</h2>
                        
                        <p>Contact information</p>
                        <p>27,Alara Street Yaba 100012 Lagos State</p>
                        <p>Call Us : 07067981819</p>
                        <p>we are open from Monday-Friday 08:00am - 05:00pm</p>

                        <div className="socials">
                            <span>Share</span>
                            <div className="footer__socials">
                                <a href="#" className="footer__link">
                                    <img src={instagram} alt="instagram" />
                                </a>
                                <a href="#" className="footer__link">
                                    <img src={x} alt="x" />
                                </a>
                                <a href="#" className="footer__link">
                                    <img src={facebook} alt="facebook" />
                                </a>
                                <a href="#" className="footer__link">
                                    <img src={linkdline} alt="linkdline" />
                                </a>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="flex-column right">
                    <div className="contact__form-container">

                        <form action="" className='contact__form'>

                        <div className='form-heading'>
                                
                            <h4 className='pink-color my'>
                                Questings or need assistance?
                            </h4>
                            <h4 className='pink-color my'>
                            Let us know about it
                            </h4>
                            <p>
                                Email us below to any question related to our event
                            </p>
                        </div>

                            <div className='form__input-group'>
                                <div className='form__input  my'>
                                    <input className="" type="text" name="name" id="name" placeholder="First Name" required />
                                </div>

                                <div className="form__input  my">
                                    <input className="" type="email" name="emailAddress" id="emailAddress" placeholder="Mail" required  />
                                </div>

                                <div className="form__input">
                                    <textarea placeholder='Message' name="" id="" cols={20} rows={4}></textarea>
                                </div>
                            </div>

                            <div className=" btn-col">
                                <button type='submit' className="btn">Submit</button>
                            </div>

                        {/* <div className=" hidden-footer-social">
                            <div className="">
                                <h2 className='share pink-color'>Share on</h2>
                                <div className="footer__socials ">
                                    <a href="#" className="footer__link">
                                        <img src={instagram} alt="instagram" />
                                    </a>
                                    <a href="#" className="footer__link">
                                        <img src={x} alt="x" />
                                    </a>
                                    <a href="#" className="footer__link">
                                        <img src={facebook} alt="facebook" />
                                    </a>
                                    <a href="#" className="footer__link">
                                        <img src={linkdline} alt="linkdline" />
                                    </a>
                            </div>

                            </div>
                        </div> */}



                        </form>
                    </div>
                </div>

            </div>

            <img id='reg_star1' src={reg_star1} alt="reg_star1" />
            <img id='reg_star2' src={reg_star2} alt="reg_star2" />
            <img id='reg_star3' src={reg_star3} alt="reg_star3" />
            <img id='reg_star4' src={reg_star4} alt="reg_star4" />
            <img id='reg_star5' src={reg_star5} alt="reg_star5" />

            <div className="blur-1"></div>
            <div className="blur-2"></div>

        </section>
    </>
  )
}

export default Contact