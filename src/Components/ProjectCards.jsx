import React from 'react';
import '../Components/style/ProjectCards.css';
import flappybird from "../assets/Capture.png"; // You can replace this with the image you uploaded or any other images
import bankapp from "../assets/bankapp.png";
import tier from "../assets/arch.png"; // Example image for demo
import Event from "../assets/event.png"; // Example image for demo


const projects = [
  {
    name: 'Banking App',
    description: 'Developed a secure banking app with Java, Servlet, and JSP for account management.',
    techStack: 'Java, Spring Boot, MySQL, AWS, Maven, Docker, Jenkins, Sonar Qube',
    impact: 'Improved app speed by 20% through Optimization',
    link: 'https://github.com/Lourdez/bankapp',
    image: bankapp
  },
  {
    name: 'Flappy Bird Game in Java',
    description: 'Developed a Flappy Bird game in Java using OOP principles.',
    techStack: 'JAVA, AWT',
    impact: 'Increased user engagement with a streamlined UX design.',
    link: 'https://github.com/Lourdez/Flappy-bird-java',
    image: flappybird
  },
  {
    name: 'AWS - 2-3 Tier Architecture',
    description: 'Designed and implemented a scalable 3-tier AWS architecture, ensuring availability and security using Terraform.',
    techStack: 'Terraform , Shell Script , AWS - EC2 , S3 , VPC , DB',
    impact: 'Enhanced productivity with 30% faster task tracking.',
    link: 'https://github.com/Lourdez/AWS-Architecture-2-3-tier',
    image: tier
  },
  {
    name: 'S3 - Event Trigger',
    description: 'Crafted a shell script leveraging AWS Lambda to trigger email notifications through SNS, mirroring industry-standard practices',
    techStack: 'Python , ShellScript , AWS- S3 , Lambda',
    impact: 'Improved data load speed',
    link: 'https://github.com/Lourdez/AWS-S3-Event-Trigger',
    image: Event
  },
];

const ProjectCards = () => {
  return (
    <div id='Projects'>
      <h1 className="projects-title">My Projects</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-name">{project.name}</h3>
            <img src={project.image} alt={project.name} className="project-image" />
            <p className="project-description"><strong>Description:</strong> {project.description}</p>
            <p><strong>Tech Stack:</strong> {project.techStack}</p>
            <p><strong>Impact:</strong> {project.impact}</p>
            <p>
              <strong>Link:</strong> 
              <a href={project.link} target="_blank" rel="noopener noreferrer"> {project.name} </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
