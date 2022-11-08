function Resume() {
    return (  
        <main className="bg-img"> 
        
            <section className="pads">
                <p className="middle resume">Download My <a  href= "./img-files/Current-Resume-2022.pdf" download= "Resume-2022.pdf">Resume</a></p>
                 <div className="container">
                  <div className="row">
                    <div className= "col-md-12 col-lg-6"> 
                    <ul>
                        <p className="res">Front-end Proficiencies</p> 
                        <li className="list">HTML</li>
                        <li className="list">CSS</li>
                        <li className="list">JavaScript</li>
                        <li className="list">jQuery</li>
                        <li className="list">Responsive Design</li>
                        <li className="list">React</li>
                        <li className="list">Bootstrap</li>
                    </ul>
                    </div>
                    <div className= "col-md-12 col-lg-6"> 
                    <ul>
                        <p className="res">Back-end Proficiencies</p>
                        <li className="list">APIs</li>
                        <li className="list">Node</li>
                        <li className="list">Express</li>
                        <li className="list">MySQL, Sequelize</li>
                        <li className="list">MongoDB, Mongoose</li>
                        <li className="list">REST</li>
                        <li className="list">GraphQL</li>
                    </ul> 
                    </div>
                </div> 
                </div>
                <img className="mern"src="./img-files/mern3.png" alt="MERN Stack"></img>
        </section>
      </main>
    );
  }
  
  export default Resume;