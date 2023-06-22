import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "./Experience.css";
export default function Experience() {
  return (
    <div className="experience">
      <h1 className="exp-title">Experience</h1>
      <VerticalTimeline lineColor="#0080fe">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2021"
          iconStyle={{ background: "#0080fe", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            École Alpha Secondary School, Burnaby BC
          </h4>
          <p>High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="03/2022 - 12/2022"
          iconStyle={{ background: "#ff5823", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            After School Program Helper - Gracie Barra Vancouver
          </h4>
          <p>
            • Demonstrated responsibility for the safety and comfort of multiple
            children at a time, developing strong attention to detail skills
            <br></br>• Provided timely and accurate information to parents via
            phone and email, showcasing excellent communication skills <br></br>
            • Updated after-school program information on the website,
            highlighting technical skills and familiarity with website
            maintenance<br></br>• Collaborated effectively with team members to
            maintain clear communication and shared information, highlighting
            strong teamwork skills
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="01/2023 - 04/2023"
          iconStyle={{ background: "#0080fe", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            Lighthouse Labs, Vancouver BC
          </h4>
          <p>Web Development Diploma</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
