
import criteriaImage from './../../assets/images/criteria_image.png';
import faq_star from './../../assets/images/faq_star.svg';


const Criteria = () => {
  return (
    <section className="criteria">
                
    <div className="criteria__left">
        <img src={criteriaImage} alt="Criteria" />
        {/* <img className='criteria_star2' src={criteria_star2} alt="Criteria star2" />
        <img className='criteria_star3' src={criteria_star3} alt="Criteria star2" /> */}
                   <div className="blur-1 blur__position1"></div>
    </div>
    
    <div className="criteria__right">
        <h2>Judging Criteria <br/> 
            <span className='pink-color'>key attributes</span>
        </h2>

        <div className="criteria__list">

            <div className="criteria__item">
            
                <p className="criteria_text">
                <span className="pink-color criteria_heading">Innovation and Creativity:</span>
                Evaluate the uniqueness and creativity of the
                solution. Consider whether it addresses a real-world problem in a novel 
                way or introduces innovative features.
                </p>
            </div>

            <div className="criteria__item">
                
                <p className="criteria_text">
                <span className="pink-color criteria_heading"> Functionality:</span>
                Assess how well the solution works. Does it perform its 
                intended functions effectively and without major issues? Judges would
                consider the completeness and robustness of the solution.
                </p>
            </div>

            <div className="criteria__item">
            
                <p className="criteria_text">
                <span className="pink-color criteria_heading"> Impact and Relevance:</span>
                Determine the potential impact of the solution 
                in the real world. Does it address a significant problem, and is it relevant 
                to the target audience? Judges would assess the potential social, 
                economic, or environmental benefits.
                </p>
            </div>

            <div className="criteria__item">
                
                <p className="criteria_text">
                <span className="pink-color criteria_heading"> Technical Complexity:</span>
                Evaluate the technical sophistication of the solution. 
                Judges would consider the complexity of the code, the use of advanced 
                technologies or algorithms, and the scalability of the solution.
                </p>
            </div>

            <div className="criteria__item">
            

                <p className="criteria_text">
                <span className="pink-color criteria_heading"> Adherence to Hackathon Rules:</span>
                Judges will Ensure that the team adhered 
                to the rules and guidelines of the hackathon, including deadlines, use of 
                specific technologies or APIs, and any other competition-specific requirements.
                </p>
            </div>

            <button className='btn'>Read More</button>
            <img className='criteria_star' src={faq_star} alt="faq_star" />

 
            <div className="blur-2 blur__position2"></div>
        </div>
    </div>

</section>
  )
}

export default Criteria