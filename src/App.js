import './App.css';
import Navbar from './components/navbar';
import Mainbody from './components/mainbody';
import AboutMe from './components/about-me';
import SkillsCard from './components/skills-card';
import Project from './components/my-projects';
import Footer from './components/footer';
import MyExperience from './components/my-experience';

function App() {
  return (
    <>

      <Navbar />
      <Mainbody />
      <section id="about">
        <AboutMe />
      </section>

      {/* Skills Card */}
      <section id='skills'>
        <div className="">
          <h1 className="text-center mt-5" style={{color:"#7f138c"}}>My Skills <div className="unline" style={{display:'flex',border:"1px solid white", width:'14rem', margin:'3px auto', boxShadow:'5px 5px 5px green', marginBottom:'1.8rem'}}></div></h1>

          <div className="container-fluid d-flex justify-content-center">
            <div className="row">
              <div className="col-md-4">
                <SkillsCard title="Language" lan1="C" lan2="Java" lan3="Python" lan4="C++"/>
              </div>
              <div className="col-md-4">
                <SkillsCard title="Frontend" lan1="HTML" lan2="CSS" lan3="JavaScript" lan4="ReactJs"/>
              </div>
              <div className="col-md-4">
                <SkillsCard title="Other Skills" lan1="PHP" lan2="MySQL" lan3="MongoDB" lan4="Git"/>
              </div>
            </div>
          </div>
        </div>
        
      </section>

      {/* Projects */}

      <section id="projects">
        <h1 className='text-center mt-5'style={{color: "#ee9b2b"}}>My Projects <div className="unline" style={{border:"1px solid white", width:'17rem', margin:'0 auto', boxShadow:'5px 5px 5px green'}}></div></h1>

        <div className="container-fluid mt-4">
          <div className="row">
            <div className="col-md-6">
              <a href="https://github.com/Arvind0012/Basic_Banking_System" target='_blank' style={{textDecoration:'none'}}>
              <Project title="Basic Banking System" des="This project is made by HTML, CSS, Bootstrap as Frontend and Django as Backend. I have Provided the functionality to make the Transaction and can see the Transaction History."/>
              </a>
            </div>
            <div className="col-md-6" >
              <a href="https://github.com/Arvind0012/Covid_Tracker/tree/master" target='_blank' style={{textDecoration:'none'}}>
                <Project title="Covid Tracker" des=" This project is made by HTML, CSS and JavaScript and openWeather API. In this project we can see the number of people that are affected by Covid-19 and people Recovered by Covid-19."/>
              </a>
            </div>
            <div className="col-md-6 mt-4 ">
              <a href="https://github.com/Arvind0012/Analog_clock" target='_blank' style={{textDecoration:'none'}}>
                <Project title="Analog Clock" des="This Project is made by the help of HTML, CSS and JavaScript. In this, real time will show."/>
              </a>
            </div>
            <div className="col-md-6 mt-4 ">
              <a href="https://github.com/Arvind0012/Snake_Game" target='_blank' style={{textDecoration:'none'}}>
                <Project title="Snake Game" des=" This Project is made by the use of HTML, CSS, JavaScript. In this a user can play and can see their score."/>
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* MY Experience */}

      <h1 className="text-center mt-5" style={{color: "#04f583"}}>My Experience <div className="unline" style={{border:"1px solid white", width:'20rem', margin:'0 auto', boxShadow:'5px 5px 5px green'}}></div></h1>

      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-6">
            <a href="./sparks-certificate.jpeg" target='_blank' style={{textDecoration:'none'}}>
              <MyExperience title="Web Development and Design Intern at The Sparks Foundation" des="Worked as an intern at The Sparks Foundation on Web Development and Design.Completed a Project on Basic Banking System where I created a website by HTML, CSS and Bootstrap as frontend Django as backend and MYSQL as Database."/>
            </a>
          </div>
          <div className="col-md-6" >
            <a href="./php-certificate.jpeg" target='_blank' style={{textDecoration:'none'}}>
              <MyExperience title="Full Stack php Developer" des="I had a certification course in Full Stack php Developer where i have learned the best practices to write an efficient code, and have learned HTML, CSS, JavaScript, Bootstrap, MySQL and PHP. Most thing that i have learned is how development worked in industries."/>
            </a>
          </div>
        </div>
      </div>


      {/* Contact Me */}

      <h1 className="text-center mt-5" style={{color:"grey"}}>Contact Me <div className="unline" style={{border:"1px solid white", width:'16rem', margin:'0 auto', boxShadow:'5px 5px 5px green'}}></div></h1>
      <Footer />

      

      
    </>
  );
}

export default App;
