import React from "react";
import Whoarey from "../PageComponent/About/Whoarey";
import Ourmission from "../PageComponent/About/Ourmission";
import Ourdoctors from "../PageComponent/About/Ourdoctors";
import { motion } from "framer-motion";
const About = () => {
  return (
    <>
      <div>
        <Whoarey />
        <Ourmission />
        <Ourdoctors />
      </div>
    </>
  );
};

export default About;
