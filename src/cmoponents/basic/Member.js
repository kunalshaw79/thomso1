import React from 'react'
import './style.css'
import pattern from './media/Pattern.png'
import man from './media/smilingman.png'
import 'bootstrap/dist/css/bootstrap.min.css'
const Members = () => {
    return (
        <>
        <div className="members">
       <div className="memtxt">
            <em className='smalltext'>become a member ----------</em><br />
            <em className="heading">Ready to try to grow <br /> your business?</em> <br />
            <em className="smalltext1">Get the best working experience that you <br /> never feel before</em>
            <br />
            <button className="book1">Book a Demo</button>
        </div>
        <div className="photomem">
            <img id='pattern' src={pattern} alt="pattern" />
            <img id='smile' src={man} alt="smile" />
        </div>
        </div>
        </>
    )
}
export default Members