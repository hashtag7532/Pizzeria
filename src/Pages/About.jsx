import React from 'react'
import MultiplePizzas from "../assets/MultiplePizzas.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className='about'>
        <div className="aboutTop" style={{backgroundImage: `url${MultiplePizzas}`}}></div>
        <div className="aboutBottom">
            <h1>ABOUT US</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim voluptatem architecto unde dolores et neque, nostrum exercitationem quasi veritatis nam. Ullam impedit aliquid tempora rerum cumque, porro sint ea optio molestias dolores dolore quam quasi perferendis, delectus reprehenderit quibusdam similique blanditiis nostrum nesciunt. Maiores culpa quam quidem fuga, dicta quas.</p>
        </div>
    </div>
  )
}

export default About