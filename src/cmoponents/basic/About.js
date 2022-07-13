import React from 'react'
import './style.css'
import man from './media/man.png'
import vector from './media/bird.png'
import 'bootstrap/dist/css/bootstrap.min.css'
const About = () => {
    return (
        <>
            <div className="about">
                <img id='bird' src={vector} alt="bird" />
                <img id='man' src={man} alt="man" />
                <div className="txt">
                    <em className="fir">About N20 Gaming</em><br />
                    <em className="heading">Sometimes Technology <br /> Can Be Entertaining</em><br />
                    <em className="smalltext">Our online digital gaming entertainment solutions support a unique and unparalleled competition experience to achieve your business goals.
                        Nitro Interactive Inc. delivers all the tools and technology. Our licenses need to present their players with the ultimate entertainment experience.</em>
                        <div className="stats">
                    <div className="statsbox">
                        <em className="fir">1M+</em><br />
                        <em className="smalltext">Total users</em>
                    </div>
                    <div className="statsbox">
                    <em className="fir">200+</em><br />
                        <em className="smalltext">client</em>
                    </div>
                    <div className="statsbox">
                    <em className="fir">100%</em><br />
                        <em className="smalltext">satisfaction</em>
                    </div>
                </div>
                </div>
                
            </div>
        </>
    )
}
export default About