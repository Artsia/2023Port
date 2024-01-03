import advice from './Images/Advice.png';
import link from './Images/link.png';
import word from './Images/word.png';


function App() {
  return (
    <div className="App">

    
      <div className="intro">

        <div className='first-container'>
        
          <div id='myName'>
              <h1>Phillip Kataswa</h1>
          </div>

          <div id="skills-cert">

            <div className='skills'>
              <h3>Skills</h3>
              <ul>
                <li>Programming Languages: Java, Python, JavaScript</li>
                <li>Libraries/Frameworks: React</li>
                <li>Tools / Platforms: Visual Studio, Notepad++</li>
                <li>Databases: Mysql, PostgreSQL, MongoDB</li>
              </ul>

            </div>

            <div className='cert'>
              <h3>Certifications</h3>
              <ul>
                <li><a href="https://www.credly.com/badges/95236fa3-9eb5-4662-b378-b01772c3b434/linked_in_profile" rel="noreferrer" target="_blank">AWS Certified Cloud Practitioner</a></li>
                <li><a href="https://www.hackerrank.com/certificates/00ac2c061cee" rel="noreferrer" target="_blank">MySQL</a></li>
                <li><a href="https://www.credly.com/badges/30d2dbd4-aff5-412b-867a-0c873f1ce85d/linked_in_profile" rel="noreferrer" target="_blank">Web Development Fundamentals</a></li>
                <li><a href="https://www.freecodecamp.org/certification/Phillipkataswa/responsive-web-design" rel="noreferrer" target="_blank">Responsive Web Design</a></li>
              </ul>


            </div>

          </div>

        </div>

      </div>

      <div className="projects">
        
      <div id='plinks'>{/**300-317px height by 817 */}

        <div className='blackCirlce'>GitHub</div>
        <div className='blackCirlce'>Likendin</div>
        <div className='blackCirlce'>Email</div>

      </div>

      {/**209 by 871 */}

      <div className='p-Grid'>
        <div className='pPic'>
          {/**w=296px h=100% */}
          <img src={advice} />

        </div>

        <div className='pText-Repo'>
          <p>In this project I built a responsive app
            which generates random advice qoutes. 
            The app uses the fetch library to extract data 
            from the Advice API and displays it to the user.</p>
          <p><a>Repo</a></p>
        </div>
      </div>

      <div className='p-Grid'>
        <div className='pPic'>
          {/**w=296px h=100% */}
          <img src={link} />

        </div>
        <div className='pText-Repo'>
          <p>This is a website that shorttens long URLs. T
          he goal is to help bussiness rank higher 
          in search result and increase readabilty.</p>
          <p><a>Repo</a></p>
        </div>
      </div>

      <div className='p-Grid'>
        <div className='pPic'>
          {/**w=296px h=100% */}
          <img src={word} />

        </div>
        <div className='pText-Repo'>
          <p>Built to help improve english vocabulary for students. Comes with text-to audio
          features that help the user pronouce and define words</p>
          <p><a>Repo</a></p>
        </div>
      </div>
      
      </div>

      
     
    </div>
  );
}

export default App;
