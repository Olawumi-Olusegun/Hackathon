

// import smartGear from './../../assets/images/man-wearing-smart-glasses-touching-virtual-screen.png';
// import spark from './../../assets/images/world-spark.png';

// import rulesRightImage from './../../assets/images/rules_right_image.png';
// import criteriaImage from './../../assets/images/criteria_image.png';
// import faq from './../../assets/images/faq.png';
// import rewards_left from './../../assets/images/rewards_left.png';
// import FirstdPosition from './../../assets/images/1stPosition.png';
// import secondPosition from './../../assets/images/2ndPosition.png';
// import ThirdPosition from './../../assets/images/3rdPosition.png';
// import PartnerAndSponsors from './../../assets/images/PartnerandSponsors.png';
// import guard from './../../assets/images/gaurd.png';
// import security from './../../assets/images/security.png';


// import q1 from './../../assets/images/q1.png';
// import q2 from './../../assets/images/q2.png';
// import star1 from './../../assets/images/star1.svg';
// import star2 from './../../assets/images/star2.svg';
// import star3 from './../../assets/images/star3.svg';
// import star4 from './../../assets/images/star4.svg';
// import purple_star from './../../assets/images/purple_star.svg';
// import faq_star from './../../assets/images/faq_star.svg';
// import criteria_star2 from './../../assets/images/criteria_star2.svg';
// import criteria_star3 from './../../assets/images/criteria_star3.svg';



// import metrix from './../../assets/images/metrix.svg';
// import menuIcon from './../../assets/images/menuIcon.svg';
// import curvedLine from './../../assets/images/curvedLine.svg';


// import hero_star1 from './../../assets/images/hero_star1.svg';
// import hero_star2 from './../../assets/images/hero_star2.svg';
// import hero_star3 from './../../assets/images/hero_star3.svg';
// import hero_chain from './../../assets/images/hero_chain.svg';
// import hero_spark from './../../assets/images/hero_spark.svg';
// import hero_bulb from './../../assets/images/hero_bulb.svg';


// import silver_medal from './../../assets/images/silver_medal.svg';
// import gold_medal from './../../assets/images/gold_medal.svg';
// import bronze_medal from './../../assets/images/bronze_medal.svg';


// import rewards_star1 from './../../assets/images/rewards_star1.svg';
// import rewards_star2 from './../../assets/images/rewards__star2.svg';
// import rewards_star3 from './../../assets/images/rewards__star3.svg';
// import rewards_star4 from './../../assets/images/rewards__star4.svg';
// import rewards_star5 from './../../assets/images/rewards__star5.svg';

// import privacy_star from './../../assets/images/privacy_star.svg';
// import privacy_starr from './../../assets/images/privacy_starr.svg';
// import privacy_star3 from './../../assets/images/privacy_star3.svg';
// import privacy_star4 from './../../assets/images/privacy_star4.svg';







import Timeline from '../../components/timeline/Timeline';
import Accordion from '../../components/homepage/Accordion';
import Intro from '../../components/homepage/Intro';
import Rules from '../../components/homepage/Rules';
import Criteria from '../../components/homepage/Criteria';
import Rewards from '../../components/homepage/Rewards';
import Sponsors from '../../components/homepage/Sponsors';
import Privacy from '../../components/homepage/Privacy';
import Hero from '../../components/homepage/Hero';

import "./homepage.css"

const Homepage = () => {


  return (
    <>
    <div className="">
       
        {/* End of header */}

        <div className="hero_wrapper">
            <Hero />
        </div>

        <div className="intro__wrapper">
            <Intro />
        </div>

        <div className="rules__wrapper">
            <Rules />
        </div>

        <div className="criteria__wrapper">
            <Criteria />
        </div>

        <div className="faq__wrapper">
            <Accordion />
        </div>

        <div className="timeline__wrapper">
            <Timeline />
        </div>

        <div className="rewards-wrapper">
            <Rewards />
        </div>

        <div className="sponsors__wrapper">
            <Sponsors />
        </div>

        <div className="privacy__wrapper">
            <Privacy />
        </div>

    </div>

    </>
  )
}

export default Homepage