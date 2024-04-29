import React , {useEffect , useState} from 'react'

import Loading from './Loading/Loading';
import Navbar from './Navbar/Navbar';
import SectionH from './HomeSection/SectionH';
import About from './About/About';
import Education from './Education/Education';


import Footer from './Footer/Footer';
import DevSkills from './DevSkills/DevSkills';
import Projects from './Projects/Projects';


function App() {

  
  const [loading ,setLoading]=useState(true)

  const [Nav , setNavbar]=useState("Home");

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    },6000)
  },[])

  return (
    <div >
      {
        loading? <Loading /> : <div className="App"> 
        <Navbar Nav={Nav}/>
        <SectionH setNavbar={setNavbar}/>
        <About setNavbar={setNavbar}/>
        <Education setNavbar={setNavbar}/>
        <DevSkills setNavbar={setNavbar} />
        <Projects setNavbar={setNavbar}/>
        
        
        
        <Footer />
         </div>
      } 
      
      
    </div>
  );
}

export default App;
/* {
        loading? <Loading /> : <div> home </div>
      } */