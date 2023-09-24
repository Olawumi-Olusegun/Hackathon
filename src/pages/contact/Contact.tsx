import React, { useState } from 'react';
import toast from 'react-hot-toast/headless';

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
import APIs from '../../utils/APIs';
import Loader from '../../components/loader/Loader';




interface ContactInputs {
    email: string;
    phone_number: string;
    first_name: string;
    message: string;
}

const Contact = () => {


    const [isLoading, setIsLoading] = useState(false);
    const [formState, setFormState] = useState<ContactInputs>({
        email:"",
        phone_number: "",
        first_name: "",
        message: ""
    });


    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
        event.preventDefault();
        const { name, value, } = event.target;
        setFormState((prevState) => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement> ) => {

        event.preventDefault();

        const formReguest = {
            email:formState.email,
            phone_number: formState.phone_number,
            first_name: formState.first_name,
            message: formState.message
        }

        try {
            setIsLoading(true)
            const response = await fetch(`${APIs?.baseUrl}/hackathon/contact-form`, {
                method:"POST",
                body: JSON.stringify(formReguest),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            } );

            const data = await response.json();

            console.log({ data })
            setIsLoading(false)

            toast.success("success😋")
            
        } catch (error) {
            toast.error("An error occured😋!")
        } finally {
            setIsLoading(false)
        }

    }

  

  return (
    <>
        {isLoading 
        ? (<Loader>  <span>submitting your data...</span>
           </Loader> ) 
        : null }

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

                        <form onSubmit={handleSubmit} className='contact__form'>

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
                                    <input 
                                    className="" 
                                    type="text" 
                                    name="first_name" 
                                    value={formState.first_name}
                                    id="name" 
                                    placeholder="First Name" 
                                    required 
                                    onChange={handleChange}
                                    />
                                </div>

                                <div className="form__input  my">
                                    <input 
                                    className="" 
                                    type="email" 
                                    name="email" 
                                    value={formState.email}
                                    id="emailAddress" 
                                    placeholder="Email Address" 
                                    required  
                                    onChange={handleChange}
                                    />
                                </div>

                                <div className="form__input  my">
                                    <input 
                                    className="" 
                                    type="text" 
                                    name="phone_number" 
                                    value={formState.phone_number}
                                    id="emailAddress" 
                                    placeholder="Phone number" 
                                    required  
                                    onChange={handleChange}
                                    />
                                </div>

                                <div className="form__input">
                                    <textarea 
                                    placeholder='Message' 
                                    name="message" 
                                    id="" 
                                    cols={20} 
                                    rows={4} 
                                    value={formState.message}
                                    onChange={handleChange}></textarea>
                                </div>
                            </div>

                            <div className=" btn-col">
                                <button 
                                type='submit'
                                disabled={isLoading}
                                className="btn">
                                    { isLoading ? "submitting..." : "Submit"}
                                </button>
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