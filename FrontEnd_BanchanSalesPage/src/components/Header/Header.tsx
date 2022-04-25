import styled from "styled-components";
import "../../fonts/font.css";
import GithubIcon from "../../assets/images/github.png";
import TheMomIcon from "../../assets/images/themom.png";

const BackBlack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 160px;
  width: 100%;
  background-color: #f4ffff;
  text-align: center;
  justify-content: center;
`;
function Header() {
  return (
    <BackBlack>
      <div style={{ marginTop: "20px" }}></div>
      <img src={TheMomIcon}></img>
    </BackBlack>
  );
}

export default Header;
