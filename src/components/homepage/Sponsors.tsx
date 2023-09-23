
import PartnerAndSponsors from './../../assets/images/PartnerandSponsors.png';
import rewards_star4 from './../../assets/images/rewards__star4.svg';
import star1 from './../../assets/images/star1.svg';


const Sponsors = () => {
  return (
    <section className="sponsors">
    <h2 className="heading sponsors__heading">
        Partners and Sponsors
    </h2>

    <p className='sponsors__text'>
        Getlinked Hackathon 1.0 is honored to have the following major 
        companies as its partners and sponsors
    </p>

    <div className="sponsors__logos">
        <div className="logos__container">
            <img src={PartnerAndSponsors} alt="PartnerAndSponsors" />
        </div>
    </div>
    <img src={rewards_star4} alt="star-icon" />
    <img src={star1} alt="star-icon" />
</section>
  )
}

export default Sponsors