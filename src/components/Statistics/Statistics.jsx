import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import "./Statistics.css";
import { motion } from 'framer-motion';

function Statistics() {
    const [hasAnimated, setHasAnimated] = useState(false);
    const { ref, inView } = useInView({ triggerOnce: true });

    if (inView && !hasAnimated) {
        setHasAnimated(true);
    }

    return (
        <div className="statistics-component" ref={ref}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }} viewport={{ once: true}} >
                <h3>Statistika</h3>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1.5 } }} viewport={{ once: true, margin: "-20px" }} >
            <div className="stat-items">
                <div className="stat">
                    <h2>Dužina mreže</h2>
                    <p>
                        <CountUp end={550} duration={2} start={hasAnimated ? 0 : 550} />
                        km
                    </p>
                </div>
                <div className="stat">
                    <h2>Broj priključaka</h2>
                    <p>
                        <CountUp end={1000} duration={2} start={hasAnimated ? 0 : 1000} />
                        +
                    </p>
                </div>
            </div>            
            <div className="stat-items">
                <div className="stat">
                    <h2>Ukupno</h2>
                    <p>
                        <CountUp end={790} duration={2} start={hasAnimated ? 0 : 790} />
                        km
                    </p>
                </div>
                <div className="stat">
                    <h2>Broj saradnika</h2>
                    <p>
                        <CountUp end={1000} duration={2} start={hasAnimated ? 0 : 1000} />
                        +
                    </p>
                </div>
            </div>
            </motion.div>
        </div>
    );
}

export default Statistics;
