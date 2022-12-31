import React from "react";
// import './my-experience.css';

const MyExperience = (props) =>{
    return(
        <>
            <div className="card p-card" id='myExperience'>
                <div className="card-body text-dark">
                    <h2 className="card-title text-center">{props.title}</h2>
                    <h4 style={{color:'grey'}}>{props.des} </h4>
                </div>
            </div>

        </>
    )
}

export default MyExperience;