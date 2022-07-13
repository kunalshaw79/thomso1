import React from 'react'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import icon1 from './media/Frame 239.png'
import icon2 from './media/Frame 240.png'
import icon3 from './media/Frame 241.png'
import icon4 from './media/Frame 242.png'
import icon6 from './media/Frame 252.svg'
import icon5 from './media/image 6.png'
const Sponsors = () => {
    return (
        <>
            <div className="sponsors">
                <em className="heading">Integrated Providers </em><br /><br />
                <em className="smalltext">N2O Gaming has quality gaming providers that integrated with 
                <br /> <em className="col">  more than 3000 games and increasing</em></em>
                <div className="iconbox">
               <img className='icon' src={icon1} alt="icon" />
               <img className='icon' src={icon2} alt="icon" />
               <img className='icon' src={icon3} alt="icon" />
               <img className='icon' src={icon4} alt="icon" />
               <img className='icon' src={icon5} alt="icon" /><br />
                </div>
                <object className='icon2' data={icon6}> </object>
                <button className="explore">All Partners</button>
            </div>
        </>

    )
}
export default Sponsors