
import location from './../../assets/images/location.png';
import telephone from './../../assets/images/telephone.png';
import instagram from './../../assets/images/instagram.svg';
import x from './../../assets/images/x.svg';
import facebook from './../../assets/images/facebook.svg';
import linkdline from './../../assets/images/linkdline.svg';

import footer_star1 from './../../assets/images/footer_star1.svg';
import footer_star2 from './../../assets/images/footer_star2.svg';
import footer_star3 from './../../assets/images/footer_star3.svg';
import footer_star4 from './../../assets/images/footer_star4.svg';

const Footer = () => {
  return (
    <div className="footer-wrapper">
        <footer className='footer'>
            {/* <img src={footer_star1} alt="footer_star1" />
            <img src={footer_star2} alt="footer_star2" />
            <img src={footer_star3} alt="footer_star3" />
            <img src={footer_star4} alt="footer_star4" /> */}
            
            <div className="footer__left">
                    <h2>get<span className='pink-color'>linked</span></h2>
                    <p className='footer__text'>Getlinked Tech Hackathon is a technology innovation program 
                        established by a group of organizations with the aim of showcasing 
                        young and talented individuals in the field of technology
                    </p>
                

                <div className='terms-privacy'>
                    <span>Terms of Use</span>
                    <span></span>
                    <span>Privacy Policy</span>
                </div>

            </div>

            <div className="footer__center">
                <h2 className='footer__heading pink-color'>Useful Links</h2>
                <ul className="footer__links">
                    <li className="footer__link-item">
                        <a href="#" className="footer__link">Overview</a>
                    </li>
                    <li className="footer__link-item">
                        <a href="#" className="footer__link">Timeline</a>
                    </li>
                    <li className="footer__link-item">
                        <a href="#" className="footer__link">FAQs</a>
                    </li>
                    <li className="footer__link-item">
                        <a href="#" className="footer__link">Register</a>
                    </li>

                    <li className="footer__link-item">
                        <h2 className='footer__heading pink-color'>Follow us</h2>
                        <div className="footer__socials">
                            <a href="#" className="social__link">
                                <img src={instagram} alt="instagram" />
                            </a>
                            <a href="#" className="social__link">
                                <img src={x} alt="x" />
                            </a>
                            <a href="#" className="social__link">
                                <img src={facebook} alt="facebook" />
                            </a>
                            <a href="#" className="social__link">
                                <img src={linkdline} alt="linkdline" />
                            </a>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="footer__right">
                <h2 className='footer__heading pink-color'>Contact Us</h2>
                
                <div className="telephone">
                    <img src={telephone} alt="telephone" />
                    <p>+234 679 81819</p>
                </div>

                <div className="location">
                    <img src={location} alt="location" />
                    <p>27,Alara Street Yaba 100012 Lagos State</p>
                </div>
            </div>


        </footer>
        <p className="footer__copyright"> All rights reserved. &copy; getlinked Ltd. </p>
    </div>
  )
}

export default Footer