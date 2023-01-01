import React from "react";
import './my-projects.css'

const Project = (props) =>{
    return(
        <>

            <div className="card p-card" style={{backgroundColor:'transparent', border:'none'}}>
                <div className="card-body text-dark">
                    <h2 className="card-title text-center">{props.title}</h2>
                    <h5 style={{color:"grey"}}>{props.des}</h5>
                </div>
            </div>

        </>
    )
}

export default Project;