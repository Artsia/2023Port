import advice from './Images/Advice.png';
import link from './Images/link.png';
import word from './Images/word.png';


function projComp(){
    return (
        <div className="projects">
        
          <div id='plinks'>{/**300-317px height by 817 */}

            <div className='blackCirlce'><a href="https://github.com/Artsia" target="_blank" rel="noreferrer">GitHub</a></div>
            <div className='blackCirlce'><a href="https://www.linkedin.com/in/phillip-kataswa-work/?originalSubdomain=ca" target="_blank" rel="noreferrer">Likendin</a></div>
            <div className='blackCirlce'><a href="mailto:tomphillip756@gmail.com" target="_blank" rel="noreferrer">Email</a></div>

          </div>

          {/**209 by 871 */}

          <div className='p-Grid'>
          
            <div className='pPic'>
              {/**w=296px h=100% */}
              <img src={advice} alt="adice app "/>

            </div>

            <div className='pText-Repo'>
              <p>In this project I built a responsive app
                which generates random advice qoutes. 
                The app uses the fetch library to extract data 
                from the Advice API and displays it to the user.</p>
              <p><a href="https://github.com/Artsia/Generate-Advice" target="_blank" rel="noreferrer">Repo</a></p>
            </div>
          </div>

          <div className='p-Grid'>
            <div className='pPic'>
              {/**w=296px h=100% */}
             <img src={link} alt="url app" />

            </div>
            <div className='pText-Repo'>
              <p>This is a website that shorttens long URLs. T
              he goal is to help bussiness rank higher 
              in search result and increase readabilty.</p>
              <p><a href="https://github.com/Artsia/LinkShort" target="_blank" rel="noreferrer">Repo</a></p>
            </div>
          </div>

          <div className='p-Grid'>
            <div className='pPic'>
              {/**w=296px h=100% */}
              <img src={word} alt="dictionary app" />

            </div>
            <div className='pText-Repo'>
              <p>Built to help improve english vocabulary for students. Comes with text-to audio
              features that help the user pronouce and define words</p>
              <p><a href="https://github.com/Artsia/searchwordapp" target="_blank" rel="noreferrer">Repo</a></p>
            </div>
          </div>
      
      </div>
    );
}

export default projComp;