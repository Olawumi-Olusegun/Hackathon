
import rewards_left from './../../assets/images/rewards_left.png';
import rewards_star1 from './../../assets/images/rewards_star1.svg';
import rewards_star2 from './../../assets/images/rewards__star2.svg';
import rewards_star3 from './../../assets/images/rewards__star3.svg';
import rewards_star4 from './../../assets/images/rewards__star4.svg';
import rewards_star5 from './../../assets/images/rewards__star5.svg';
import silver_medal from './../../assets/images/silver_medal.svg';
import gold_medal from './../../assets/images/gold_medal.svg';
import bronze_medal from './../../assets/images/bronze_medal.svg';



const Rewards = () => {
  return (
    <section className="rewards">

    <div className="rewards__header rewards-header-mobile">
            <h2 className="rewards_title ">
                Prices and <br /> <span className='pink-color'>Rewards</span>
            </h2>
            <p className='rewards__text'>Highlight of the prizes or rewards for winners 
                and for participants.
            </p>
    </div>


    <div className="rewards__left">
        <img id="reward_img" src={rewards_left} alt="rewards_left" />
    </div>

    <img src={rewards_star1} alt="rewards_star1" />
    <img src={rewards_star2} alt="rewards_star2" />
    <img src={rewards_star3} alt="rewards_star3" />
    <img src={rewards_star4} alt="rewards_star4" />
    <img src={rewards_star5} alt="rewards_star5" />

    <div className="rewards__right">

    <div className="rewards__header rewards-header-desktop">
            <h2 className="rewards_title ">
                Prices and <br /> <span className='pink-color'>Rewards</span>
            </h2>
            <p className='rewards__text'>Highlight of the prizes or rewards for winners 
                and for participants.
            </p>
    </div>

    <div className="price-container">
        <div className='rewards__prices'>
            <div className="price__one">
                <img id="silver_medal" src={silver_medal} alt="silver_medal" />
                <div className="price-content">
                    <h2 className='price-position'>2nd</h2>
                    <h4 className='prie-title'>Runner</h4>
                    <h2 className='price'>N300,000</h2>
                </div>
            </div>

            <div className="price__two">
                <img id="gold_medal" src={gold_medal} alt="silver_medal" />
                <div className="price-content">
                    <h2 className='price-position'>1st</h2>
                    <h4 className='prie-title'>Runner</h4>
                    <h2 className='price'>N400,000</h2>
                </div>
            </div>

            <div className="price__three">
                <img id="bronze_medal" src={bronze_medal} alt="silver_medal" />
                <div className="price-content">
                    <h2 className='price-position'>3rd</h2>
                    <h4 className='prie-title'>Runner</h4>
                    <h2 className='price'>N150,000</h2>
                </div>
            </div>

        </div>

    </div>

        
        {/* <div className="reward__item">
            <img src={secondPosition} alt="second position" />
        </div>
        <div className="reward__item">
            <img src={FirstdPosition} alt="second position" />
        </div>
        <div className="reward__item">
            <img src={ThirdPosition} alt="second position" />
        </div> */}
    </div>
    <div className="blur-1 blur__position1"></div>
    <div className="blur-2 blur__position2"></div>
</section>
  )
}

export default Rewards