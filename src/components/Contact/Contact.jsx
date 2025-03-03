import React from "react";
import './Contact.css'
import { motion } from "framer-motion";

function Contact({
    address,
    phoneNumber,
    email
}) {
    return (
        <div className="contact-component" id="contact">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }} viewport={{ once: true, margin: "-30px"}} >
            <h3>Kontaktirajte nas!</h3>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1.5 } }} viewport={{ once: true}} >
            <div className="contact-component__information">
                <div className="contact-info">
                    <div className="contact">
                        <h4>Adresa:</h4>
                        <p>{address}</p>
                    </div>
                    <div className="contact">
                        <h4>Broj telefona:</h4>
                        <p>{phoneNumber}</p>
                    </div>
                    <div className="contact">
                        <h4>E-mail:</h4>
                        <p>{email}</p>
                    </div>
                </div>
                <div className="conatct-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23118.261622084345!2d21.29472550460292!3d43.59024228409999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475687e116c62d91%3A0x8ec96c9cea6a44f1!2sRasina%20Energogas!5e0!3m2!1sen!2srs!4v1737973476437!5m2!1sen!2srs" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            </motion.div>
        </div>
    )
}

export default Contact;