import React from "react";
import './about-me.css'

const AboutMe = () =>{
    return(
        <>
            <div className="intro" id="about">
                <div className="about-me">
                    <div className="imag">
                    <a href="https://github.com/Arvind0012" target='_blank'><img className="profile-img" src="./out.jpg" alt="Profile-photo"/></a>
                    </div>
                    <h2>About Me </h2>
                    <p>I'm currently a final year student pursuing my B.Tech in the field of Computer Science and Engineering from Silicon Institute of Technology, Sambalpur.</p><br />
                    <p>With a keen interest in programming and coding, aiming to build a career in the field of software development. I am a competitive programmer with some descent knowledge of Data Structure and Algorithm.</p><br />
                    <p>I am also a Full Stack Web Developer and have worked with various languages and tools like HTML, CSS, JavaScript, React Js, PHP, MongoDB and MYSQL.</p><br />
                    <p>Apart from academics, I am Sports Secretary, If you are a person who loves to discuss about Cricket and vollyball then feel free to hit me up!</p>
                </div>
            </div>
        </>
    )
}

export default AboutMe;