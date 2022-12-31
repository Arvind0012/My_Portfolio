import React from "react";
import './my-projects.css'

const Project = (props) =>{
    return(
        <>

            <div className="card p-card" id="projects">
                <div className="card-body text-dark">
                    <h2 className="card-title text-center">{props.title}</h2>
                    <h5 style={{color:"grey"}}>{props.des}</h5>
                </div>
            </div>

        </>
    )
}

export default Project;