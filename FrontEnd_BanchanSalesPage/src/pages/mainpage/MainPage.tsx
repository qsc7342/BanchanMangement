import styled from "styled-components";
import { ResponsiveBar } from "@nivo/bar";
import Salesbar from "./Salesbar";
import FadeIn from "react-fade-in";
import TodayInfo from "./TodayInfo";
import * as config from "../../config";
import { useEffect, useState } from "react";
import "../../fonts/font.css";
const Container = styled.div`
  display: flex;
`;
const First = styled.div`
  display: flex;
  width: 20vw;
  // background-color: wheat;
  // height: 50vh;
  margin-left: 100px;
  flex-direction: column;
  margin-top: 30px;
`;
const Second = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 140px;
`;

const SaleBarCss = styled.div`
  flex: 1;
  // background-color: white;
  // border: 1px solid gray;
  // justify-content: center;
`;
const TestCss = styled.div`
  // background-color: gray;
  // border: 1px solid gray;
`;

const ColumnFlex = styled.div`
  display: flex;
  flex: 1;
`;

function MainPage() {
  useEffect(() => {
    getTodaySale();
    getTodayCustomer();
    getWeeklySales();
  }, []);
  const [todaySale, setTodaySale] = useState(undefined);
  const [todayCustomer, setTodayCustomer] = useState(undefined);
  const [weeklySale, setWeeklySale] = useState([{ name: "", 매출액: 0 }]);

  const getTodaySale = () => {
    fetch(config.Server_URL + "/pos/sales/day", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        next: getFormatDate(today),
        prev: getFormatDate(today),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTodaySale(data[0].sales);
      });
  };
  const today = new Date();
  function getFormatDate(date: any) {
    var year = date.getFullYear();
    var month = 1 + date.getMonth();
    month = month >= 10 ? month : "0" + month;
    var day = date.getDate();
    day = day >= 10 ? day : "0" + day;
    return year + "" + month + "" + day;
  }

  function lastWeek() {
    var d = new Date();
    var dayOfMonth = d.getDate();
    d.setDate(dayOfMonth - 8);
    return d;
  }

  function lastDay() {
    var d = new Date();
    var dayOfMonth = d.getDate();
    d.setDate(dayOfMonth - 1);
    return d;
  }

  const getTodayCustomer = () => {
    fetch(config.Server_URL + "/pos/customer/day", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        next: getFormatDate(today),
        prev: getFormatDate(today),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTodayCustomer(data[0].number);
      });
  };
  let weekData: any = [];
  const getWeeklySales = () => {
    fetch(config.Server_URL + "/pos/sales/day", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        next: getFormatDate(lastDay()),
        prev: getFormatDate(lastWeek()),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        let cnt = 0;
        data.map((it: any) => {
          ++cnt;
          console.log(it.date);
          const obj = [
            {
              name: it.date.substr(5),
              매출액: it.sales,
            },
          ];
          if (cnt === 1) {
            weekData = weekData.concat([
              {
                name: "",
                매출액: it.sales,
              },
            ]);
          }
          weekData = weekData.concat(obj);
        });
        setWeeklySale(weekData);
      });
  };
  return (
    <div>
      {/* <div>DashBoard</div> */}
      <Container>
        <First>
          <TestCss>
            <ColumnFlex>
              <TodayInfo todaySale={todaySale} todayCustomer={todayCustomer} />
            </ColumnFlex>
          </TestCss>
        </First>

        <Second>
          <div
            style={{
              fontFamily: "NanumBrush",
              fontSize: "36px",
              textAlign: "center",
            }}
          >
            최근 7일 간 매출 변화!
          </div>
          <SaleBarCss>
            <Salesbar data={weeklySale} />
          </SaleBarCss>
        </Second>
      </Container>
    </div>
  );
}
export default MainPage;
