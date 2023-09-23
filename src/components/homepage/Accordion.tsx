import React, { useState } from 'react'
import purple_star from './../../assets/images/purple_star.svg';
import faq from './../../assets/images/faq.png';

interface AccordionSectionProps {
    section: {
        title: string;
        text: string;
    },
    isActiveIndex: boolean;
    setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
    sectionIndex: number;
}

const accordionData = [
    {
        title: "Can I work on a project I started before the hackathon?",
        text: "Can I work on a project I started before the hackathon?"
    },
    {
        title: "What happens if I need help during the hackathon?",
        text: "What happens if I need help during the hackathon?"
    },
    {
        title: "What happens if I don't have an idea for a project?",
        text: "What happens if I don't have an idea for a project?"
    },
    {
        title: "Can I join a team or do I have to come with one?",
        text: "Can I join a team or do I have to come with one?"
    },
    {
        title: "Can I work on a project I started before the hackathon?",
        text: "Can I work on a project I started before the hackathon?"
    },
];



const AccordionSection: React.FC<AccordionSectionProps> = ({ section, isActiveIndex, sectionIndex, setActiveIndex }) => {

    const handleToggle = () => {
        const nextIndex = isActiveIndex ? null : sectionIndex;
        setActiveIndex(nextIndex);
    }

    return (
        <>
            <div className="faq__item" onClick={handleToggle}>
                <div>
                    <p>{section?.title}</p>
                    {isActiveIndex ? <p>{section?.text}</p> : null }
                </div>
                <span className='pink-color'>{isActiveIndex ? "-" : "+" }</span>
            </div>
        </>
    )
}





const Accordion = () => {

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="faq">
                
    <div className="faq__left">
        <h2>Frequently asked<br/> 
            <span className='pink-color'>Question</span> 
        </h2>
        <p className='faq__text'>We got answers to the questions that you might
        want to ask about <span>getlinked Hackathon 1.0</span>
        </p>
        <div className="faq__items">
        {
            accordionData?.map((section, index) => (
                <AccordionSection
                key={index}
                section={section}
                isActiveIndex={index === activeIndex}
                setActiveIndex={setActiveIndex}
                sectionIndex={index}
                />
            ))
        }
    </div>

        {/* <div className="faq__items">
            <div className="faq__item">
                <p>Can I work on a project I started before the hackathon?</p>
                <span className='pink-color'>+</span>
            </div>
            <div className="faq__item">
                <p>What happens if I need help during the hackathon?</p>
                <span className='pink-color'>+</span>
            </div>
            <div className="faq__item">
                <p>What happens if I don't have an idea for a project?</p>
                <span className='pink-color'>+</span>
            </div>
            <div className="faq__item">
                <p>Can I join a team or do I have to come with one?</p>
                <span className='pink-color'>+</span>
            </div>
            <div className="faq__item">
                <p>What happens after the hackathon ends</p>
                <span className='pink-color'>+</span>
            </div>
            <div className="faq__item">
                <p>Can I work on a project I started before the hackathon?</p>
                <span className='pink-color'>+</span>
            </div>
        </div> */}


        <img src={purple_star} alt="purple_star" className='purple_star' />
    </div>
    <div className="faq__right">
        <img src={faq} alt="faq" />
        {/* <img className='q2' src={q2} alt="q2" />
        <img className='q1' src={q1} alt="q1" />
        <img className='q2' src={q2} alt="q2" />
        <img className='q2' src={star1} alt="q2" />
        <img className='q2' src={star2} alt="q2" />
        <img className='q2' src={star3} alt="q2" />
        <img className='q2' src={star4} alt="q2" /> */}
    </div>
</section>
  )
}

export default Accordion