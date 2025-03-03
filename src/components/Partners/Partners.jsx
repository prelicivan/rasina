import React from "react";
import './Partners.css'
import { motion } from "framer-motion";

function Partners({
    img1,
    img2,
    img3,
    img4
}
) {
    return (
        <div className="partners-component">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }} viewport={{ once: true}} className="heading-partners">
                <h3>Naši partneri</h3>
            </motion.div>
            <motion.div initial={{ opacity: 0.2 }} whileInView={{ opacity: 1, transition: { duration: 2 } }} viewport={{ once: true, margin: "-20px"}} >
            <div className="partners-list">
                <div className="partner">
                    <a href="https://www.srbijagas.com/" target="_blank" rel="noopener noreferrer" className="partner-link">
                        <img src={img2} />
                    </a>
                </div>
                <div className="partner">
                    <a href="https://www.tekgas.co.rs/" target="_blank" rel="noopener noreferrer" className="partner-link">
                        <img src={img3} />
                    </a>
                </div>
            </div>
            <div className="partners-list-two">
                <div className="partner">
                    <a href="https://krusevac.ls.gov.rs/" target="_blank" rel="noopener noreferrer" className="partner-link">
                            <img src={img1} />
                        </a>
                </div>
                <div className="partner">
                    <a href="https://cestorveks.com/" target="_blank" rel="noopener noreferrer" className="partner-link">
                        <img src={img4} />
                    </a>
                </div>
            </div>
            </motion.div>
        </div>
    )
}

export default Partners;