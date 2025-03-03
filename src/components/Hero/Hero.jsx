import React from 'react'
import './Hero.css'
import { motion } from 'framer-motion';

function Hero({
    flip,
}) {
    return(
        <div className={flip ? 'hero-section-flip' : 'hero-section'} id="hero">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 1.5 } }} viewport={{ once: true}} >
                <img src="/pictures/RAG logo-Osnovni-Medium.png" className="hero-logo"></img>
            </motion.div>
        </div>
    )
}

export default Hero;