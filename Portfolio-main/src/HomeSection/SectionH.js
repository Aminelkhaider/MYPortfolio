import React from 'react'
import "./SectionH.css"
import image from "../Assets/Images/Amine-img.jpg"
const SectionH = ({setNavbar}) => {
  return (
    <section className='SectionH' id='SectionH' onMouseEnter={()=>{
        console.log("change");
        setNavbar("Home")}} onMouseLeave={()=>
            setNavbar("Home")}>
        <div className='home-content' >
            <h1>Hi, I'm <span>EL KHAIDER AMINE</span></h1>
            <div className='text-animated'>
                <h3>
                    Web Developer
                </h3>
            </div>
            <p>
            Motivated until the last point, always striving for excellence and pushing beyond limits.</p>
            <div className='btn-box'>
                <a href='#about' className='btn'>About Me</a>

            </div>
        </div>
        <div className='home-rs'>
            <a href='https://www.linkedin.com/in/amine-el-khaider-271454243/' >
            <i class='bx bxl-linkedin'></i>
            </a>           
        </div>
        <div className='Image-Amine'><img className='Image-Amine-size' src={image} alt=''></img></div>
        <div className='Image-Amine-Hover'></div>
    </section>
  )
}

export default SectionH