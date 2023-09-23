
import checkIcon from './../../assets/images/check.svg';
import guard from './../../assets/images/gaurd.png';
import security from './../../assets/images/security.png';


const Privacy = () => {
  return (
    <section className="privacy">
    {/* <img src={privacy_star} alt="privacy_star" />
    <img src={privacy_star} alt="privacy_star" />
    <img src={privacy_starr} alt="privacy_starr" />
    <img src={privacy_star} alt="privacy_star" />
    <img src={privacy_star3} alt="privacy_star3" />
    <img src={privacy_star4} alt="privacy_star4" />
    <img src={privacy_star3} alt="privacy_star3" /> */}

        <div className="privacy__left">

            <div className="privacy__header-top">
                
                <h2 className="heading privacy__heading">
                    Privacy Policy and 
                    <span className='pink-color'> Terms</span>
                </h2>

                <p>Last updated on September 12, 2023</p>

            <p className='header-top-description'>Below are our privacy & policy, which outline a lot of goodies. 
                it’s our aim to always take of our participant
            </p>

            </div>


            <div className="privacy__description">
                <p className="text">
                At getlinked tech Hackathon 1.0, we value your privacy
                and are committed to protecting your personal information.
                This Privacy Policy outlines how we collect, use, disclose, 
                and safeguard your data when you participate in our tech 
                hackathon event. By participating in our event, you consent 
                to the practices described in this policy.
                </p>
                
                <div className='privacy__headings'>
                    <h2 className="heading pink-color">Licensing Policy</h2>
                    <h3 className="heading-3">Here are terms of our Standard License:</h3>
                </div>
                
                <div className='privacy__lists'>

                    <div className="privacy__listItem">
                        <img className='location' src={checkIcon} alt="checkIcon" />
                        <p>The Standard License grants you a non-exclusive right to
                            navigate and register for our event </p>
                    </div>

                    <div className="privacy__listItem">
                        <img className='telephone' src={checkIcon} alt="checkIcon" />
                        <p>You are licensed to use the item available at any free source
                            sites, for your project developement 
                        </p>
                    </div>

                    <button className="btn">Read More</button>

                </div>

            </div>

        </div>
        
        <div className="privacy__right">
            <img id='guard' src={guard} alt="guard" />
            <img id="security" src={security} alt="security" />
        </div>


    <div className="blur-1 blur__position1"></div>

    </section>
  )
}

export default Privacy