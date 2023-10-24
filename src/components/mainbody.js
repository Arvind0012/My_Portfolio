import React from "react";
import './mainbody.css'

const Mainbody = () =>{
    return(
        <>
            <div className="main-body">
            <h1 className="text-center" style={{fontWeight:'bold'}}>Hello Developers, <br /></h1>
            <h2 className="text-center">I am Arvind Kumar Rana !<br /></h2>
            <h3 className="text-center">I am Associate Engineer ...  &#129409;</h3>    
            </div> 
            <div className="resume">
            <a href="./resume.pdf" download>
                <button className="resume-btn">Resume</button>
            </a>
            </div>
            {/* <hr className="h-line" /> */}
            <div className="unline" style={{border:"0.2px solid white", width:'40rem', marginLeft:'16rem',marginTop:'3rem', boxShadow:'5px 5px 5px rgb(0, 234, 255)', marginBottom:'1.8rem'}}></div>

            <p className="start-scroll">Start Scrolling and take a look at my Portfolio :-</p>
        </>
    )
}

export default Mainbody;