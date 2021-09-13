import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';


import image from "./1.jpg"


function Silder(){

    return(
            <AwesomeSlider animation="cubeAnimation" bullets={false}>
                    <div >
                        <img src={image}/>
                    </div>
                    <div>
                        <img src={image}/>
                    </div>
                    <div>
                        <img src={image}/>
                    </div>
            </AwesomeSlider>


    )



}

export default Silder