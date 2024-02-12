import advice from './Images/Advice.png';
import link from './Images/link.png';
import word from './Images/word.png';


function projComp(){
    return (
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
    );
}

export default projComp;