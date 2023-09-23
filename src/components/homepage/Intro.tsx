import React from 'react'
import idea from './../../assets/images/idea.png';
import idea_star from './../../assets/images/idea_star.svg';
import arrow from './../../assets/images/arrow.svg';
import starpu from './../../assets/images/starpu.svg';


const Intro = () => {
  return (
    <section className="intro">
    <div className="intro__left">
        <img src={idea} alt="idea" />
        <img src={idea_star} alt="idea_star" />
        <img src={arrow} alt="arrow" />
        
    </div>
    <div className="intro__right">
        <h2>Introduction to getlinked<br />
            <span className='pink-color'>techHackathon1.0</span>
        </h2>

        <img src={starpu} alt="starpu" />

        <p className="intro__text">
        Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as 
        day: to shape the future. Whether you're 
        a coding genius, a design maverick, or a 
        concept wizard, you'll have the chance to transform your ideas into reality. Solving 
        real-world problems, pushing the boundaries
        of technology, and creating solutions that can change the world, that's what we're all about!
        </p>
    
    </div>


</section>
  )
}

export default Intro