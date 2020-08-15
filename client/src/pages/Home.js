import React from 'react';
import '../App.css';
import bannerImage from '../images/heroBox.svg';
import { motion } from "framer-motion"

function Home() {
  return (
    <div className="homeWrapper">
      <div className="banner">
        <motion.div animate={{ translateX: [-150, 0], opacity: [0, 1] }} transition={{ ease: "easeOut", duration: 2 }} className="bannerLeft">
            <div className="leftCTA">
                <h1>Hackatouille</h1>
                <motion.h3 animate={{ translateY: [75, 0], opacity: [0, 1] }} transition={{ ease: "easeOut", delay: 2, duration: 1 }}>
                    The central platform for selling and delivering care packages sourced from your local businesses
                </motion.h3>
                <motion.button animate={{ translateY: [75, 0], opacity: [0, 1] }} transition={{ ease: "easeOut", delay: 2.5, duration: 1 }} type="button" className="primaryButton">
                    GET STARTED
                </motion.button>
            </div>
        </motion.div>
        <motion.div animate={{ translateX: [150, 0], opacity: [0, 1] }} transition={{ ease: "easeOut", duration: 2 }} className="bannerRight">
            <img alt="Happy Man sitting" src={bannerImage} width="500px"/>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
