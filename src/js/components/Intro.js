import React from "react";
import { FaFilePdf } from "react-icons/fa";
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";

const Intro = () => (
  <div id="home-intro">
    <section className="inner" id="intro">
      <div className="center">
        <img
          src={require("../../img/IMG_1166.jpg")}
          alt="Picture of Stephen Tyler"
          className="intro-img"
        />
        <h2>
          Hello, my name is <span className="my-name">Stephen Tyler</span>
          .
          <br />I am a student of web development and I enjoy learning new
          techonologies.
        </h2>
      </div>
      <div className="intro-contacts">
        {/* <h4>Contacts</h4> */}
        <div className="center intro-contacts-icons">
          <FaSquareGithub />
          <FaLinkedin />
          <FaFilePdf />
        </div>
      </div>
    </section>
  </div>
);
export default Intro;
