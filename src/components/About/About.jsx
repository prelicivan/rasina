import React from 'react'
import './About.css'
import { motion } from 'framer-motion';

function About({
    whiteFont,
    headline,
    text1,
    text2,
    img
}) {
    return(
        <div className="about-us-component" id="about"> 
            <div className="container">
                <div className="about-us-component__image">
                    <img src={img} />
                </div>
                <div className={whiteFont ? 'text-container whiteFont' : 'text-container'}>
                    <div className="about-us-component__text">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }} viewport={{ once: true}} >
                            <h3>{headline}</h3>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1.5 } }} viewport={{ once: true, margin: "-20px"}} >
                            <p>{text1}</p>
                            <p>{text2}</p>
                        </motion.div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default About;