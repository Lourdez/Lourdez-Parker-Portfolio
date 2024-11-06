import React from "react";
import "../Components/style/about.css";
import ReactIcon from "../assets/react.png";  // Replace with the actual image path
import JavaIcon from "../assets/java.png";  // Replace with the actual image path
import DevopsIcon from "../assets/devops.png";  // Replace with the actual image path

const About = () => {
    return (
        <section id="about" className="what-i-do-section">
            <h2 className="section-title">Who Am I / What I do </h2>
            <p className="section-description">
                I’m a Full Stack Developer skilled in React, Java, Spring Boot, and AWS.
                I build responsive, user-centered web applications and manage cloud-ready infrastructures using DevOps tools. Passionate about solving real-world challenges,
                I constantly explore new ways to expand my expertise in full stack and cloud development.
            </p>
            <div className="cards-container">
                <div className="card">
                    <img src={ReactIcon} alt="UI/UX Design" className="card-icon1" />
                    <h3 className="card-title">FrontEnd Design</h3>
                    <p className="card-description">
                        Experienced in building responsive, user-focused interfaces with React, blending clean design with optimized performance.
                    </p>
                </div>
                <div className="card">
                    <img src={JavaIcon} alt="Website Design" className="card-icon" />
                    <h3 className="card-title">Backend Development</h3>
                    <p className="card-description">
                        Proficient in building robust backends with Java and Spring Boot, focusing on scalability and efficient data management.
                    </p>
                </div>
                <div className="card">
                    <img src={DevopsIcon} alt="App Design" className="card-icon" />
                    <h3 className="card-title">CI/CD pipeline Deployment</h3>
                    <p className="card-description">
                        Experienced in AWS and DevOps tools, streamlining deployment, automation, and cloud infrastructure management.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
