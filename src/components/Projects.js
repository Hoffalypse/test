

function Projects() {
  let works = [
    {
      img:'./img-files/bando.jpg',
      alt:"Band Search App",
      link: "https://joseeenrique.github.io/Music-App/",
      name: 'Band Search App',
      gitlink: 'https://github.com/joseeenrique/Music-App'
    },
    {
      img:'./img-files/mythic.jpg',
      alt:"WOW Team Builder",
      link: "https://mythic-plus-team.herokuapp.com/",
      name: 'WOW Team Builder',
      gitlink: ' https://github.com/Hoffalypse/mythic-plus-team'
    },
    {
      img:'./img-files/weather.jpg',
      alt:"Weather App",
      link: "https://hoffalypse.github.io/Current-Weather/",
      name: 'Current Weather',
      gitlink: 'https://github.com/Hoffalypse/Current-Weather'
    },
    {
      img:'./img-files/comment.jpg',
      alt:"Tech Blog",
      link: "https://stormy-mesa-72944.herokuapp.com/",
      name: 'The Tech Blog',
      gitlink: 'https://github.com/Hoffalypse/Tech-Blog'
    },
    {
      img:'./img-files/03-javascript-homework-demo.png',
      alt:"Password Generator",
      link: "https://hoffalypse.github.io/Password-Generator/",
      name: 'Password Generator',
      gitlink: 'https://github.com/Hoffalypse/Password-Generator'
    },
    {
      img:'./img-files/notes.png',
      alt:"Note Taker App",
      link: "https://note-taker92380.herokuapp.com/",
      name: 'Note Taker App',
      gitlink: 'https://github.com/Hoffalypse/Note-Taker'
    },
  
  ]
 
    return (  
      
<main className="bg-img"> 

    <section className="pad-img">
      <div className="row">
        <p className="head">My Work</p>
        { works.map((result) => (
        <div className="col-xxl-4 col-lg-6">
        
          
          <a href={result.link} 
          target="_blank" rel="noreferrer">
          <img 
          src={result.img} 
          className="box together" 
          alt={result.alt}></img></a>
          <button 
          onClick={result.link} 
          className = 'text-on-image'>
          {result.name}</button>
          <a 
          href= {result.gitlink} 
          target="_blank"rel='noreferrer'>
          <img className = "cat" src="./img-files/icons8-github.gif" alt='github cat'></img></a>
          
          </div>
         ))}
      </div>
   
  </section>
</main>
        
      )}
  
  export default Projects;