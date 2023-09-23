import React, { useState } from 'react'
import registerVector from './../../assets/images/registerationVector.svg'

import movement from './../../assets/images/movement.svg'
import movementMale from './../../assets/images/movementMale.svg'

import reg_star1 from './../../assets/images/reg/reg_star1.svg';
import reg_star2 from './../../assets/images/reg/reg_star2.svg';
import reg_star3 from './../../assets/images/reg/reg_star3.svg';
import reg_star4 from './../../assets/images/reg/reg_star4.svg';
import reg_star5 from './../../assets/images/reg/reg_star5.svg';

import "./register.css";
import Modal from '../../components/modal/Modal';
import { useNavigate } from 'react-router-dom';

interface RegisterProps {
    team_name: string; 
    phone_number: string;
    email: string;
    project_topic: string;
    category: string;
    group_size: string;
    checked: boolean;
    privacy_poclicy_accepted?: boolean;
}

const API_URL = import.meta.env.VITE_API_URL;


const Register = () => {

    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);


    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [formState,setFormState] = useState<RegisterProps>({
        team_name: "",
        phone_number: "",
        email: "",
        project_topic: "",
        category: "",
        group_size: "",
        checked: false,
    });

    const goBack = () => navigate("/", { replace: true })


    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement >) => {
        event.preventDefault();
        const { name, value, } = event.target;
        setFormState((prevState) => ({ ...prevState, [name]: value }));
    }


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement> ) => {

        event.preventDefault();

        const formReguest = {
            "email": formState.email,
            "team_name": "Landing Page",
            "phone_number": formState.phone_number,
            "project_topic": formState.project_topic,
            "group_size": Number(formState.group_size),
            "privacy_poclicy_accepted": formState.checked,
            "category": Number(formState.category),
        }

        try {
            setIsSuccess(false)
            setIsLoading(true)
            const response = await fetch(API_URL, {
                method:"POST",
                body: JSON.stringify(formReguest),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            } );

            const data = await response.json();

            // check response
            if(data && data?.id && data?.date_created) {
                setShowModal(true)
            }

            setIsLoading(false)

            console.log(isSuccess)
            
        } catch (error) {
            setIsSuccess(false)
            setIsLoading(false)
        }


        
    }


  return (
    <>
        { showModal ?  <Modal goBack={goBack} setShowModal={setShowModal} /> : null }
        <section id='reg-section' className="container"> 

            <div className="flex-cols">
                
            <div className="flex-col">
                <img src={registerVector} alt="registerVector" />
            </div>

            <div className="flex-col">
                <div className="form-container">
                
                    <form onSubmit={handleSubmit}>

                    <div className='form-header col-100'>
                    <h2 className='pink-color'>Register</h2>
                            <div className='movement'>
                                <p>Be a part of the movement!</p>
                                <div className="movement__container">
                                    <img src={movement} alt="movement" />
                                    <img src={movementMale} alt="movementMale" />
                                </div>
                            </div>
                            <h2 className=''>CREATE AN ACCOUNT</h2>
                    </div>
                        
                        <div className="form-row">

                        <div className='form__group form-col my'>
                            <label className="label" htmlFor="name">Team's Name</label>
                            <input className="" 
                            type="text" 
                            value={formState?.team_name}
                            onChange={handleChange}
                            name="team_name" 
                            id="team_name" 
                            autoComplete='off'
                            required 
                            placeholder="Enter the name of your group"
                            />
                            <span>Team Name</span>
                        </div>

                        <div className="form__group form-col my ">
                            <label className="label" htmlFor="phone_number">Phone Number</label>
                            <input className="" 
                            type="text" 
                            value={formState?.phone_number} 
                            onChange={handleChange} 
                            name="phone_number"
                            autoComplete='off'
                            required 
                            id="phone_number" placeholder="Enter you phone number" 
                            />
                            <span>Enter phone number</span>
                        </div>

                        </div>

                        <div className="form-row">

                        <div className="form__group form-col my">
                            <label className="label" htmlFor="emailAddress">Email Address</label>
                            <input className="" 
                            type="email" 
                            value={formState?.email} 
                            onChange={handleChange} 
                            name="email" id="email" 
                            autoComplete='off'
                            required 
                            placeholder="Enter your email address" 
                            />
                            <span>Enter a valid email</span>
                        </div>

                        <div className="form__group form-col my">
                            <label className="label" htmlFor="project_topic">Project Topic</label>
                            <input className="" 
                            type="text" 
                            value={formState?.project_topic} 
                            onChange={handleChange} 
                            name="project_topic" 
                            id="project_topic" 
                            autoComplete='off'
                            required 
                            placeholder="What is your group project topic" 
                            />
                            <span>Select Project Topic</span>
                        </div>
                        
                        </div>

                    <div className="form-row select-section">

                        <div className="form-col category ">
                            <label className="label" htmlFor="Category">Category</label>
                            
                            <select 
                            onChange={handleChange}  
                            value={formState?.category} 
                            className="" 
                            required
                            name="category" 
                            id="category">
                                <option>select group Category</option>
                                <option value={1}>1</option>
                                <option value={1}>2</option>
                                <option value={3}>3</option>
                            </select>
                            <span>Select categrory</span>
                        </div>

                        <div className="form-col size ">
                            <label className="label" htmlFor="group_size">Group Size</label>
                            
                            <select  
                            onChange={handleChange}
                            className=""
                            required
                            name="group_size" 
                            id="group_size">
                                <option>select group size</option>
                                <option value={1}>MOBILE</option>
                                <option value={1}>WEB</option>
                                <option value={3}>UI/UX</option>
                            </select>
                            <span>Select Group size</span>
                        </div>
                        
                    </div>
                        

                        
                        <div className="form-row">

                            <div className="form-col my agreement-container">
                                <p className='pink-color'>Please review your registration details before submitting</p>
                            
                                <div className="agreement">
                    
                                <div className='check'>
                                        <input
                                         className='checkbox'
                                        onChange={() => setFormState((prev) => ({...prev, checked: !prev.checked}))}
                                        name='checkbox'
                                        id="checkbox" 
                                        type="checkbox"
                                        checked={formState.checked}
                                        required
                                        />
                                    <label htmlFor="checkbox">I agreed with the event terms and conditions  and privacy policy</label>
                                </div>

                                </div>

                            </div>
                        
                        </div>

                        <div className="form-row">
                            <div className="form-col btn-col">
                                <button type='submit' className="btn">
                                    { isLoading ? "submiting" : "Submit" }
                                </button>
                            </div>
                        </div>


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

export default Register