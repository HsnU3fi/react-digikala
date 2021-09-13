import {Header} from '../../component/header/header'
import imageHeader from "./header2.jpg"
import digiax from "../../component/slider/imags/digiax.jpg"
import bakhsh2 from "./bakhsh2.png"
import "./home.css"
import Silder from "../../component/slider/slider";


function Home() {


    return (
        <div>
            <Header/>
            <img src={imageHeader} className="image-header"/>
            <div   className="container">


            <div className="column">
             <img src={digiax} className="styleImage"/>
             <img src={digiax}  className="styleImage"/>

            </div>
                <Silder/>
            </div>
            <div className="bakhsh2">
                <img src={bakhsh2}/>
            </div>
        </div>

)

}

export default Home