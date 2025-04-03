import './intro.css';
import Typewriter from 'typewriter-effect';
const Intro = () => {
    return (
        <div className="cont" id='intro'> 
            <div className="intro">
            <div className="name">Swathi Amaravadi </div>
            <div className="titles"> Bridgeport '25</div>
                <div className="one">
                <Typewriter 
                onInit={(typewriter)=>{
                    typewriter
                    .typeString("COMPUTER SCIENCE GRADUATE STUDENT")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("COMPETITIVE PROGRAMMER")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("TECHNOLOGY ENTHUSIAST")
                    .pauseFor(2000)
                    .deleteAll()
                    .start();
                }}
                options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
                </div>
                {/* <p className="resume" >
                   <a href='https://drive.google.com/file/d/1P7f6X84wO7sjqO-vDnq29LmP_26TdIJG/view?usp=sharing'> Resume</a>
                </p> */}
            </div>
            <div className="ima">
            </div>
        </div>
     );
}
 
export default Intro;