import React from 'react'
import './modal.css'

import successMan from './../../assets/images/modal/successful-man.svg';
import successCheck from './../../assets/images/modal/successfully-done.svg';
import wink from './../../assets/images/modal/wink.svg';
import star1 from './../../assets/images/modal/star1.svg';
import star2 from './../../assets/images/modal/star2.svg';
import star3 from './../../assets/images/modal/star3.svg';
import Confetti from '../confetti/Confetti';



interface ModalProps {
  goBack: () => void;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal: React.FC<ModalProps> = ({ setShowModal, goBack }) => {

 
  
  return (
    <div  
    className='modal-container' onClick={() => setShowModal((prev) => !prev)}>
<Confetti />

        <div className='modal-content' style={{  zIndex: 50 }}>
            <div className="success">
                <img src={successCheck} alt="successMan" />
                <img src={successMan} alt="successMan" />
            </div>
    
            <div className="message">
                <h2>Congratulations <br /> you have successfully registered!</h2>
                <p>
                    Yes, it was easy and you did it!
                    check your mail box for next step
                    </p>
                    
                    <img id='wink' src={wink} alt="wink" />
                
                    <button 
                      onClick={() => goBack()} 
                      type='button' 
                      className="btn success-btn">
                      Back
                    </button>
     
            </div>

          <img id='star1'  src={star1} alt="star1" />
          <img id='star2' src={star2} alt="star2" />
          <img id='star3' src={star3} alt="star3" />

        </div>
    </div>
  )
}

export default Modal