import React from "react"
import Hero from "../Hero/Hero";
import { heroObjOne, aboutObjOne, contactObjOne, partnersObjOne, partnersObjTwo } from "./Data";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Statistics from "../Statistics/Statistics";
import Partners from "../Partners/Partners";
import './Home.css'

function Home() {
    return (
        <>
            <Hero {...heroObjOne} />
            <About {...aboutObjOne}/>
            <div className="stats-partners">
                <Statistics />
                <Partners {...partnersObjTwo} />
            </div>
            <Contact {...contactObjOne}/>
            <Footer />
        </>
    )
}

export default Home;