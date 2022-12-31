import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


export const Footer = () => {
  return (
    <>
        <footer className="text-center" id='contactMe'>
            <section className="d-flex justify-content-center justify-content-lg p-4 border-bottom">
                <div className="container icon">
                    <a href="https://www.instagram.com/arvind_rana545/" target="_blank">
                    <InstagramIcon style={{color:"#de1818", fontSize:"3rem" ,marginRight:"2rem"}} />
                    </a>
                    <a href="https://github.com/Arvind0012" target="_blank">
                    <GitHubIcon style={{color:"#beb29a", fontSize:"3rem", marginRight:"2rem"}} />
                    </a>
                    <a href="https://www.linkedin.com/in/arvindkumarrana/" target="_blank">
                      <LinkedInIcon style={{color:"rgba(55, 107, 191)", fontSize:"3rem",marginRight:"2rem" }}/>
                    </a>
                    <a href="mailto:arvindrana545@gmail.com" target="_blank">
                      <EmailIcon style={{color:"rgb(rgb(42 164 201))", fontSize:"3rem"}}/>
                    </a>
                </div>
            </section>
        </footer>
    </>
  )
}

export default Footer;