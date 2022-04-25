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
import MenuSidebar from "./MenuSidebar";
import Salesbar from "./Salesbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TypeSalesbar from "./TypeSalesbar";
import MenuSalesbar from "./MenuSalesbar";
// import "./datepicker.css";
// const getMenuList = () => {
//   menuType.map((it, index) => {
//     fetch(config.Server_URL + "/pos/menu/type", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify({
//         menuType: it,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setMenuList(data);
//       });
//   });
// };

const floating = keyframes`
    0 {
        transform: translateY(0);    
    }
    50% {
        transform: translateY(-5px);
    }
    100% {
        transform: translateY(0);
    }
`;

const Floating = styled.div`
  animation: ${floating} 2s ease infinite;
`;
const Container = styled.div`
  display: flex;
`;
const First = styled.div`
  display: flex;
  width: 70vw;
  // background-color: wheat;
  height: 10vh;
  margin-left: 100px;
  flex-direction: column;
  margin-top: 60px;
`;
const Second = styled.div`
  display: flex;
  flex-direction: row;
  // background-color: gray;
  // justify-content: center;
  // text-align: center;
  margin-left: 330px;
`;

const Third = styled.div`
  display: flex;
  // background-color: gray;
`;
const Fourth = styled.div`
  display: flex;
  background-color: yellow;
`;
const TestCss = styled.div`
  // background-color: gray;
  // border: 1px solid gray;
`;

const ColumnFlex = styled.div`
  display: flex;
  flex: 1;
`;

const Title = styled.div`
  font-size: 48px;
  margin-top: 70px;
  text-align: center;
`;
function SalePage() {
  const [menuType, setMenuType] = useState([]);
  const [menuList, setMenuList] = useState([]);
  const [curPage, setCurPage] = useState(0);
  const getMenuType = () => {
    fetch(config.Server_URL + "/pos/menu/type", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.length !== menuType.length) {
          console.log("Type : " + menuType);
          console.log("Data : " + data);
          setMenuType(data);
        }
      });
  };

  const getMenuList = () => {
    fetch(config.Server_URL + "/pos/menu/type", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.length !== menuType.length) {
          setMenuList(data);
        }
      });
  };

  useEffect(() => {
    getMenuType();
    getMenuList();
  }, []);

  useEffect(() => {
    console.log(curPage);
  });
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [curMenu, setCurMenu] = useState("");
  function startDateChange(date: any) {
    setStartDate(date);
  }
  function endDateChange(date: any) {
    setEndDate(date);
  }
  const changeValue = (x: any) => {
    setCurPage(x);
  };
  const changeMenu = (x: any) => {
    setCurMenu(x);
  };
  return (
    <div>
      <Container>
        <First>
          <Title>
            <span
              style={{
                fontFamily: "Binggrae",
              }}
            >
              <Floating>매출 관리 페이지입니다.</Floating>
              <hr />
            </span>
          </Title>
          <Second>
            <div style={{ paddingRight: "75px" }}>
              <DatePicker
                locale={ko}
                dateFormat={"yyyy-MM-dd"}
                selected={startDate}
                customInput={
                  <input
                    style={{
                      fontFamily: "Binggrae",
                      fontSize: "32px",
                      textAlign: "center",
                      borderRadius: "2em",
                    }}
                  />
                }
                onChange={(date: Date) => {
                  if (date <= endDate) setStartDate(date);
                }}
              />
            </div>
            <div
              style={{
                paddingRight: "75px",
                fontFamily: "Doungle",
                verticalAlign: "top",
              }}
            >
              <span style={{ fontSize: "36px" }}>
                <strong>~</strong>
              </span>
            </div>
            <div>
              <DatePicker
                locale={ko}
                dateFormat={"yyyy-MM-dd"}
                selected={endDate}
                customInput={
                  <input
                    style={{
                      fontFamily: "Binggrae",
                      fontSize: "32px",
                      textAlign: "center",
                      // border: "groove 1em red",
                      borderRadius: "2em",
                    }}
                  />
                }
                onChange={(date: Date) => {
                  if (date >= startDate) setEndDate(date);
                }}
              />
            </div>
          </Second>
          <Third>
            <div style={{ width: "300px" }}>
              {menuList.length > 0 ? (
                <MenuSidebar
                  menuType={menuType}
                  menuList={menuList}
                  changeValue={changeValue}
                  changeMenu={changeMenu}
                ></MenuSidebar>
              ) : (
                <MenuSidebar
                  changeValue={changeValue}
                  changeMenu={changeMenu}
                ></MenuSidebar>
              )}
            </div>
            <div>
              {curPage <= 1 ? (
                <div>
                  <Salesbar startDate={startDate} endDate={endDate} />
                </div>
              ) : curPage === 2 ? (
                <div style={{ height: "350px", width: "800px" }}>
                  <TypeSalesbar startDate={startDate} endDate={endDate} />
                </div>
              ) : (
                <div>
                  <div
                    style={{
                      fontFamily: "Binggrae",
                      fontSize: "32px",
                      textAlign: "center",
                      paddingTop: "12px",
                    }}
                  >
                    현재메뉴 : {curMenu}
                  </div>
                  <MenuSalesbar
                    startDate={startDate}
                    endDate={endDate}
                    curMenu={curMenu}
                  />
                </div>
              )}
            </div>
          </Third>
        </First>
      </Container>
    </div>
  );
}

export default SalePage;
