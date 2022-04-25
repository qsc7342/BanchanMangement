import { findByLabelText } from "@testing-library/react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import styled from "styled-components";
import profile from "../../assets/images/profile.jpeg";
import SidebarItem from "./SidebarItem";
import "../../fonts/font.css";

const Side = styled.div`
  display: flex;
  border-right: 3px solid #e0e0e0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
  width: 60%;
  margin-left: 150px;
  text-align: center;
`;

const Menu = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
`;

const Profile = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
`;

const Logo = styled.div`
  border-bottom: solid gray;
  font-family: "Doungle";
  font-size: 40px;
`;
const isActiveStyle = {
  textDecoration: "none",
  color: "black",
};

function Sidebar() {
  const menus = [
    { name: "메인 화면", path: "/" },
    { name: "매출 조회", path: "/sales" },
    { name: "예약 관리", path: "/reservation" },
    { name: "리뷰 관리", path: "/review" },
  ];
  return (
    <FadeIn transitionDuration={1000}>
      <Side>
        <Profile src={profile}></Profile>
        <br />
        <Logo>The 엄마</Logo>
        <Menu>
          {menus.map((menu, index) => {
            return (
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? isActiveStyle
                    : { color: "gray", textDecoration: "none" }
                }
                to={menu.path}
                key={index}
              >
                <SidebarItem menu={menu} />
              </NavLink>
            );
          })}
        </Menu>
      </Side>
    </FadeIn>
  );
}

export default Sidebar;
