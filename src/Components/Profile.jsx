import React, { useState } from "react";
import { Modal } from 'antd';
import "../Components/style/profile.css";
import profileImage from "../assets/myimg.png";
import hire from "../assets/hireme.png"
import { Link } from 'react-scroll'
import Contact from "./Contact";


const Profile = () => {
    const [modal , setmodal] = useState(false);

    const toggleModal =() =>{
        setmodal(!modal);
    }

    return (
        <div id="intro" className="intro-section">
            <div className="intro-content">
                <div className="text-content">
                    <h2>Hello,</h2>
                    <h1>I’m <span className="highlight">Lourdez Parker</span></h1>
                    <h2>FullStack Developer</h2>
                    <p>
                        Full Stack Developer skilled in Spring Boot, React,AWS and DevOps dedicated to building seamless, scalable applications across the tech stack.
                    </p>
                    <Link><button onClick={toggleModal} className="hire-button" ><img src={hire} alt="" className="hireimg" />
                        Hire me</button></Link>

                     <div className="overlay">
                        <div className="modal-content"></div>
                        <Modal title="Hire Me" open={modal} onCancel={toggleModal} footer={null} >
                            <div className="modalcont">
                            <p className="modalcont">Thank you for your interest in hiring me. Please feel free to reach out to me at <a href="mailto:lourdezparker@gmail.com">lourdezparker@gmail.com</a>  for any inquiries or opportunities.</p>
                            {/* <p className="modalconte">OR</p>
                            <p className="modalcont">Please fill this form so that could reach you in No time</p> */}
                            <Contact/> 
                            </div>
                           
                        </Modal>

                     </div>


                </div>
                <div className="image-container"> 
                    <img src={profileImage} alt="Profile" className="profile-image" />
                </div>
            </div>
        </div>
    );
};

export default Profile;
