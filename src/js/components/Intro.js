import React from "react";
import { FaFilePdf } from "react-icons/fa";
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

const helloVariant = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const nameVariant = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const positionVariant = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 2,
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const focusVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 3,
      duration: 2,
      staggerChildren: 0.1,
    },
  },
};

const Intro = () => (
  <section className="inner" id="home-intro">
    <div>
      <div className="center">
        <img
          src={require("../../img/IMG_1166.jpg")}
          alt="Picture of Stephen Tyler"
          className="intro-img"
        />
      </div>
      <motion.div
        className="mx-auto center"
        initial="initial"
        animate="animate"
      >
        <motion.span span id="hello-my-name-is" variants={helloVariant}>
          Hello, my name is{" "}
        </motion.span>
        <motion.h2 className="name" variants={nameVariant}>
          Stephen Tyler
        </motion.h2>
        <motion.h1 className="position" variants={positionVariant}>
          Fullstack Webdeveloper
        </motion.h1>
        <motion.span
          class="damp"
          variants={focusVariant}
          initial="initial"
          animate="animate"
        >
          Focused in frontend development and making websites beautiful.
        </motion.span>
      </motion.div>
    </div>
    <div className="intro-contacts">
      {/* <h4>Contacts</h4> */}
      <div className="center intro-contacts-icons">
        <a href="https://github.com/leggosteveo" target="_blank">
          <FaSquareGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/stephen-tyler-2674b745/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          href={require("../../docs/Stephen_Tyler_Resume_24.pdf")}
          target="blank"
        >
          <FaFilePdf />
        </a>
      </div>
    </div>
  </section>
);
export default Intro;
