import React from "react";
import styled from "styled-components";

const Item = styled.p`
  &:hover {
    color: black;
  }
`;
function SidebarItem({ menu }: any) {
  return (
    <div className="sidebar-item">
      <Item>{menu.name}</Item>
    </div>
  );
}

export default SidebarItem;
