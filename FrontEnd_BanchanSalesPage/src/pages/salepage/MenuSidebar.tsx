import styled, { keyframes } from "styled-components";
import FadeIn from "react-fade-in";
import * as config from "../../config";
import { useEffect, useState } from "react";
import "../../fonts/font.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "react-calendar";
import { ko } from "date-fns/esm/locale";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import Test from "../../assets/images/customer.png";
import "./custom.scss";
import { FiDroplet } from "react-icons/fi";
import { Scrollbars } from "react-custom-scrollbars";
import { Link } from "react-router-dom";
import internal from "stream";

function MenuSidebar({ menuType, menuList, changeValue, changeMenu }: any) {
  const onClick = (value: any) => {
    changeValue(value);
  };
  const onClickWithValue = (value: any, menu: any) => {
    changeValue(value);
    changeMenu(menu);
  };
  return (
    <div>
      <Scrollbars style={{ width: 500, height: 300 }}>
        <ProSidebar>
          <Menu>
            <MenuItem icon={<FiDroplet />} onClick={() => onClick(1)}>
              날짜별 매출 조회
            </MenuItem>

            <MenuItem icon={<FiDroplet />} onClick={() => onClick(2)}>
              품목별 매출 조회
            </MenuItem>
            {menuType.map((type: any, index: any) => {
              let obj = menuList[index];
              let menus = obj.menus;
              return (
                <SubMenu key={index} title={type} icon={<FiDroplet />}>
                  {menus.map((menu: any, index2: any) => {
                    return (
                      <MenuItem
                        key={index2}
                        icon={<FiDroplet />}
                        onClick={() => onClickWithValue(3, menu)}
                      >
                        {menu}
                      </MenuItem>
                    );
                  })}
                </SubMenu>
              );
            })}
          </Menu>
        </ProSidebar>
      </Scrollbars>
    </div>
  );
}

MenuSidebar.defaultProps = {
  menuType: ["구이류", "국", "김치"],
  menuList: [
    { menus: ["고등어구이", "갈치구이"], type: 1 },
    { menus: ["고등어구이", "갈치구이"], type: 1 },
    { menus: ["고등어구이", "갈치구이"], type: 1 },
  ],
};
export default MenuSidebar;
