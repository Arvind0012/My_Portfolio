import React from "react";

const SkillsCard = (props) =>{
    // console.log(props);
    return(
        <>

            <div className="card text-center p-card mt-3" style={{width: "25rem", backgroundColor:'transparent', border:'none'}}>
                <div className="card-body">
                    <h2 className="card-title">{props.title}</h2>
                    <h4 style={{color:"grey"}}>{props.lan1}</h4>
                    <h4 style={{color:"grey"}}>{props.lan2}</h4>
                    <h4 style={{color:"grey"}}>{props.lan3}</h4>
                    <h4 style={{color:"grey"}}>{props.lan4}</h4>
                </div>
            </div>
            
        </>
    )
}

export default SkillsCard;