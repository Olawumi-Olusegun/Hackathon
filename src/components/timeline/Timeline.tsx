import React from 'react'
import './timeline.css';


const Timeline = () => {
  return (
<section id="conference-timeline">
    <div className="timeline-start"></div>
    <div className="conference-center-line"></div>
    <div className="conference-timeline-content">
      
      <div className="timeline-article">
        
        <div className="content-left-container">
          <div className="content-left">
            <h2> Hackathon Announcement </h2>
            <p>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
          </div>
        </div>

        <div className="content-right-container">
          <div className="content-right">
            <h2>November 18, 2023</h2>
          </div>
         
        </div>
        <div className="meta-date">
          <span className="date">1</span>
        </div>
      </div>
      
      <div className="timeline-article">
        
        <div className="content-left-container">
          <div className="content-left">
            <h2>November 18, 2023</h2>
            {/* <p>Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</p> */}
          </div>
        </div>

        <div className="content-right-container">
          <div className="content-right">
            <h2>Teams Registration begins</h2>
            <p>Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</p>
          </div>
        </div>

        <div className="meta-date">
          <span className="date">2</span>
        </div>
      </div>

      <div className="timeline-article">
        <div className="content-left-container">
          <div className="content-left">
            <h2>Teams Registration ends</h2>
            <p>Interested Participants are no longer Allowed to register</p>
          </div>
        </div>
        <div className="content-right-container">
          <div className="content-right">
            <h2>November 18, 2023</h2>
          </div>

        </div>
        <div className="meta-date">
          <span className="date">3</span>
        </div>
      </div>
      
      <div className="timeline-article">
        <div className="content-left-container">
          <div className="content-left">
            <h2>November 18, 2023</h2>
          </div>
        </div>
        <div className="content-right-container">
          <div className="content-right">
            <h2>Announcement of the accepted teams and ideas</h2>
            <p>All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</p>
          </div>

        </div>
        <div className="meta-date">
          <span className="date">4</span>
        </div>
      </div>
      
      <div className="timeline-article">
        <div className="content-left-container">
          <div className="content-left">
            <h2>November 18, 2023</h2>
          </div>
        </div>
        <div className="content-right-container">
          <div className="content-right">
            <h2>Announcement of the accepted teams and ideas</h2>
            <p>All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</p>
          </div>

        </div>
        <div className="meta-date">
          <span className="date">5</span>
        </div>
      </div>
      
      <div className="timeline-article">
        <div className="content-left-container">
          <div className="content-left">
            <h2>November 18, 2023</h2>
          </div>
        </div>
        <div className="content-right-container">
          <div className="content-right">
            <h2>Demo Day</h2>
            <p>Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</p>
          </div>

        </div>
        <div className="meta-date">
          <span className="date">6</span>
        </div>
      </div>
      
    </div>
   
  </section>
  )
}

export default Timeline