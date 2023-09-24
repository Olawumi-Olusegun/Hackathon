
import smartGear from './../../assets/images/man-wearing-smart-glasses-touching-virtual-screen.png';
import spark from './../../assets/images/world-spark.png';
import curvedLine from './../../assets/images/curvedLine.svg';

const Hero = () => {
  return (
    <section className="hero">
    <img className='curvedLine' src={curvedLine} alt="curvedLine"  />

        
        {/* <h2 className='hero__top-text'>Igniting a Revolution in HR Innovation</h2> */}
        {/* <img className='curvedLine' src={curvedLine} alt="curvedLine" />
        <img className='hero_star1' src={hero_star1} alt="hero_star1" />
        <img className='hero_star2' src={hero_star2} alt="hero_star2" />
        <img className='hero_bulb' src={hero_bulb} alt="hero_bulb" />
        <img className='hero_chain' src={hero_chain} alt="hero_chain" />
        <img className='hero_spark' src={hero_spark} alt="hero_spark" />
        <img className='hero_star3' src={hero_star3} alt="hero_star3" /> */}
        
        <div className="hero__left">
            <h2>
                getlinkedTech<br/>Hackathon 
                <span> 1.0</span> 
            </h2>
            <p className="hero__bottom-text">
                Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize
            </p>
            <button className='btn hero__btn'>Register</button>
            <div className="hero__count-down">
                <div className="hero__countdown_item">
                <h4>00 </h4> <span>H</span>
                </div>
                <div className="hero__countdown_item">
                <h4>00 </h4> <span>M</span>
                </div>
                <div className="hero__countdown_item">
                <h4>00 </h4> <span>S</span>
                </div>
            </div>
        </div>

        <div className="hero__right">
            <div>
                <h2 className='hero__top-text mobile-text'>Igniting a Revolution in HR Innovation</h2>

            </div>
            <picture>
                <img src={smartGear} alt="man-wearing-smart-gears" className='gears' />
                <img className='spark' src={spark} alt="spark" />
            </picture>
        </div>

    </section>
  )
}

export default Hero