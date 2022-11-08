
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';





const Navigation =   (props) => {
  
     if(props.pageView === 'Projects'){
        return <Projects/>
        
     }
     else if(props.pageView === 'About'){
        return<About/>
     }
     else if (props.pageView === 'Contact'){
        return <Contact/>
     }
     else if (props.pageView === 'Resume'){
        return<Resume/>
     }
     else{
        return <About/>
     }
    }

 

export default Navigation