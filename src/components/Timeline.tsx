import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="career">
      <div className="items-container">
        <h1>Career</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(46, 42, 42)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2021 - present"
            iconStyle={{ background: 'rgb(130, 109, 162)', color: 'rgb(46, 42, 42)' }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">AIN, Founder & CTO</h3>
            <h4 className="vertical-timeline-element-subtitle">Belgrade, Serbia</h4>
            <p>
              Building products, raising capital. Started <a className="innerlink" href="https://web3.ain.rs">Web3 Academy</a>. Winner of <a className="innerlink" href="https://katapult-akcelerator.rs/" target="_blank">Katapult25 Accelerator Program</a>.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(46, 42, 42)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2020 - 2021"
            iconStyle={{ background: 'rgb(130, 109, 162)', color: 'rgb(46, 42, 42)' }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">Footballerista, CTO</h3>
            <h4 className="vertical-timeline-element-subtitle">Lucerne, Switzerland</h4>
            <p>
              Building a private blockchain and social media platform for football players and fans alike. (Loopback, Terraform, Docker orchestration)
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - 2020"
            iconStyle={{ background: 'rgb(130, 109, 162)', color: 'rgb(46, 42, 42)' }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">Zepter, Head of Development</h3>
            <h4 className="vertical-timeline-element-subtitle">Belgrade, Serbia</h4>
            <p>
              Microservice development, protocol improvement, compliance strategy, performance tracking, in-house software development (C++, Scala)
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2019"
            iconStyle={{ background: 'rgb(130, 109, 162)', color: 'rgb(46, 42, 42)' }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">Outfit7, Senior Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Ljubljana, Slovenia</h4>
            <p>
              Game Engine Development (C++, LLVM)
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 - 2017"
            iconStyle={{ background: 'rgb(130, 109, 162)', color: 'rgb(46, 42, 42)' }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">Mad Head Games, Engine Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Belgrade, Serbia</h4>
            <p>
              Custom multiplayer engine in C++
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2014 - 2016"
            iconStyle={{ background: 'rgb(130, 109, 162)', color: 'rgb(46, 42, 42)' }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
         <h3 className="vertical-timeline-element-title">Tab Tale Games, Game Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Belgrade, Serbia</h4>
            <p>
              Unity3D game development (C#)
            </p>
          </VerticalTimelineElement>
          
        </VerticalTimeline>
        
        <p className="download"><a href="https://drive.google.com/file/d/1BBxsEibsr4s7Ohz1_S1ZIOkl4AcMyryS/view?usp=sharing" target="_blank" rel="noreferrer">Download resume in PDF</a></p>

      </div>
    </div>
  );
}

export default Timeline;