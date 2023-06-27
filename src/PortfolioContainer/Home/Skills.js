import React from "react";
import "./Skills.css";
import { SkillBars } from "react-skills";
export default function Skills() {
  const skillsData1 = [
    {
      name: "JavaScript",
      level: 100,
      color: "#0080fe",
    },
    {
      name: "Ruby",
      level: 85,
      color: "#ff5823",
    },
    {
      name: "HTML/CSS",
      level: 100,
      color: "#0080fe",
    },
    {
      name: "Node Js",
      level: 90,
      color: "#ff5823",
    },
    {
      name: "JQuery",
      level: 70,
      color: "#0080fe",
    },
    {
      name: "SQl",
      level: 95,
      color: "#ff5823",
    },
  ];
  const skillsData2 = [
    {
      name: "ReactJS",
      level: 100,
      color: "#0080fe",
    },
    {
      name: "Ajax",
      level: 90,
      color: "#ff5823",
    },
    {
      name: "Express",
      level: 100,
      color: "#0080fe",
    },
    {
      name: "Bootsrap",
      level: 85,
      color: "#ff5823",
    },
    {
      name: "Rails",
      level: 60,
      color: "#0080fe",
    },
    {
      name: "MongoDB",
      level: 100,
      color: "#ff5823",
    },
  ];
  return (
    <div>
      <h1 className="abt-title">Skills</h1>
      <div className="skills">
        <div className="skills-left">
          <SkillBars skills={skillsData1} />
        </div>
        <div className="skills-right">
          <SkillBars skills={skillsData2} />
        </div>
      </div>
    </div>
  );
}
