import React from "react";
import './navbar.css';

const Navbar = () => {
    return(
        <>
            <header>
                <h2><a href="https://github.com/Arvind0012">Arvind</a></h2>
                <nav>
                    <div className="navbar">
                        <ul>
                            <a href="#"><li>Home</li></a>
                            <a href="#about"><li>About Me</li></a>
                            <a href="#skills"><li>Skills</li></a>
                            <a href="#projects"><li>Projects</li></a>
                            <a href="#myExperience"><li>Experience</li></a>
                            <a href="#contactMe"><li>Conatct Me</li></a>
                        </ul>
                    </div>
                </nav>
            </header>   

        </>
    )
}

export default Navbar;