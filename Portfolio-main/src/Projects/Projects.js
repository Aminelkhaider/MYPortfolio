import React ,{useState} from 'react'
import "./Projects.css"
const Projects = ({setNavbar}) => {

    const [show ,setShow]=useState(false);
    
  return (
    <div className='Projet'>
        <section className='Projet' id='project'  onMouseEnter={()=>{
        console.log("change");
        setNavbar("project")}} onMouseLeave={()=>
            setNavbar("Home")}>
        <h2 className='Heading'>My <span className='Me'>Projects</span> </h2>

        <div className='skills-row'>
            <div className='projects'>
                <div id="image" className='project-container' >
                    <div className='project-information'>
                        <p>Landing Page<span className='Me'>-WADIDEV</span></p>
                        <a href='https://github.com/Aminelkhaider/LandingPage'><box-icon id="github" type='logo' name='github' color="var(--main-color)"
                                size="xs"></box-icon></a>
                    </div>
                </div>
            </div>
            <div className='projects'>
                <div id="image1" className='project-container'  >
                    <div className='project-information'>
                        <p>Identity<span className='Me'> Verification</span></p>
                        <a href='https://github.com/Aminelkhaider/Identity-Verification'><box-icon id="github" type='logo' name='github' color="var(--main-color)"
                                size="xs"></box-icon></a>
                    </div>
                </div>
            </div>
            <div className='projects'>
                <div id="image2" className='project-container'  >
                    <div className='project-information'>
                        <p>Micro<span className='Me'> E-commerce</span></p>
                        <a href='https://github.com/Aminelkhaider/Micro-E-commerce'><box-icon id="github" type='logo' name='github' color="var(--main-color)"
                                size="xs"></box-icon></a>
                    </div>
                </div>
            </div>
            <div id='position-project' className='projects'>
                <div id="image3" className='project-container'  >
                    <div className='project-information'>
                        <p id='Admin'>Employee<span className='Me'>-App</span></p>
                        <a href='https://github.com/Aminelkhaider/Employee_App'><box-icon id="github" type='logo' name='github' color="var(--main-color)"
                                size="xs"></box-icon></a>
                    </div>
                </div>
            </div>
            <div className='projects'>
                <div id="image4" className='project-container'  >
                    <div className='project-information'>
                        <p>Real-Time<span className='Me'> Chat App</span></p>
                        <a href='https://github.com/Aminelkhaider/Real_Time_ChatAPP'><box-icon id="github" type='logo' name='github' color="var(--main-color)"
                                size="xs"></box-icon></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Projects