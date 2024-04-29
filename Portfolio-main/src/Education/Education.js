import React from 'react'
import "./Education.css"
const Education = ({setNavbar}) => {
  return (
    <section className='education' id='education' onMouseEnter={()=>{
        console.log("change");
        setNavbar("Education")}} onMouseLeave={()=>
            setNavbar("Home")}>
        <h2 className='Heading'>My <span className='Me'>Journey</span></h2>

        <div className='education-row'>
            <div className='education-column'>
                <h3 className='education-title'>
                    Education
                </h3>
                <div className='education-box'>
                    <div className='education-content'>
                    <div className='content'>
                        <div className='year'>
                        <i class='bx bxs-calendar'></i> 2022 - 2025
                        </div>
                        <h3>Engineering Degree, Softaware Engineering</h3>
                        <h4>Institut National de statistique et d'économie apliquée <span className='Me'>INSEA</span></h4>
                    </div></div>
                
                    <div className='education-content educ'>
                        <div className='content'>
                        <div className='year'>
                        <i class='bx bxs-calendar'></i> 2020 - 2022
                        </div>
                        <h3>Preparatory Classes , MP</h3>
                        <h4>Lycée Technique Mohammadia  <span className='Me'> LTM</span></h4>
                    </div></div>
                </div>
            </div>

            <div className='education-column'>
                <h3 className='education-title'>
                    Experience
                </h3>
                <div className='education-box'>
                    <div className='education-content  educ'>
                        <div className='content'><div className='year'>
                        <i class='bx bxs-calendar'></i> Jul 2023 - Aug 2023
                        </div>
                        <h3>Frontend Developer, WADIDEV</h3>
                        <p>Proposed a tailored UX/UI approach and created a compelling design for
website.</p>
                        <p>Developed the website's frontend using JAVASCRIPT and Tailwind CSS framework and ensured its responsiveness.</p>
                    </div></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Education