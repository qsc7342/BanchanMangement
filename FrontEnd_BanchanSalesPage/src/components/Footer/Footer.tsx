import React from "react";
import styled from "styled-components";
import "../../fonts/font.css";
import GithubIcon from "../../assets/images/github.png";
import TheMomIcon from "../../assets/images/themom.png";
const FooterCss = styled.div`
  height: 100px;
  width: 100vw;
  background-color: #3c3c3c;
  position: absolute;
  bottom: 0;
  text-align: center;
  justify-content: center;
  z-index: 1;
  // background: rgba(255, 255, 255, 0.95);
  color: white;
  padding-top: 10px;
`;
const Footer = () => {
  return (
    <FooterCss>
      <a href="http://github.com/qsc7342">
        <img src={GithubIcon} width="50" height="50"></img>
      </a>
      <div style={{ fontFamily: "Doungle", fontSize: "32px" }}>
        Copyright © 2022 by Um Taeho, All Rights Reserved.
      </div>
    </FooterCss>
  );
};

export default Footer;
