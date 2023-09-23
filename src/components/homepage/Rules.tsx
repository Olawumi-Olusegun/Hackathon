
import rulesRightImage from './../../assets/images/rules_right_image.png';
import rules_star from './../../assets/images/rules_star.svg';
import rules_star2 from './../../assets/images/rules_star2.svg';
import rules_star_3 from './../../assets/images/rules_star_3.svg';

const Rules = () => {
  return (
    <section className="rules">
    <div className="rules__left">
        <h2>Rules and <br /> <span>Guidelines</span> </h2>
        <p className='rules__text'>Our tech hackathon is a melting pot of visionaries, and its purpose is as
            clear as day: to shape the future. Whether you're a coding genius, a 
            design maverick, or a concept wizard, you'll have the chance to transform 
            your ideas into reality. Solving real-world problems, pushing the boundaries
            of technology, and creating solutions that can change the world,
            that's what we're all about!
        </p>
    </div>

    <div className="rules__right">
        <img src={rulesRightImage} alt="rules_right_image" />
        <img src={rules_star} alt="rules_star" />
    </div>

  <img src={rules_star_3} alt="rules_star3" />
  <img src={rules_star2} alt="rules_star2" />

  <div className="blur-1 blur__position1"></div>
    <div className="blur-2 blur__position2"></div>
</section>
  )
}

export default Rules