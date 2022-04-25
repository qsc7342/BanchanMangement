import ImageWon from "../../assets/images/money.png";
import ImageCustomer from "../../assets/images/customer.png";
import styled, { keyframes } from "styled-components";
import "../../fonts/font.css";
import * as config from "../../config";
import { ReactFragment } from "react";
import React from "react";
import FadeIn from "react-fade-in";

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

function TodayInfo({ todaySale, todayCustomer }: any) {
  return (
    <>
      <FadeIn>
        <Floating>
          <img
            src={ImageWon}
            width="100"
            height="100"
            style={{ marginTop: "175px" }}
          />
          <div>
            <img
              src={ImageCustomer}
              width="100"
              height="100"
              style={{ marginTop: "125px" }}
            />
          </div>
        </Floating>
      </FadeIn>
      <FadeIn>
        <Floating>
          <div
            style={{
              fontSize: "40px",
              marginTop: "165px",
              marginLeft: "30px",
              fontFamily: "Doungle",
            }}
          >
            금일 매출액
          </div>
          <div
            style={{
              fontSize: "38px",
              marginTop: "10px",
              marginLeft: "45px",
              fontFamily: "Doungle",
            }}
          >
            {todaySale}원
          </div>
          <div
            style={{
              fontSize: "40px",
              marginTop: "105px",
              marginLeft: "30px",
              fontFamily: "Doungle",
            }}
          >
            금일 손님 수
          </div>
          <div
            style={{
              fontSize: "38px",
              marginTop: "10px",
              marginLeft: "90px",
              fontFamily: "Doungle",
            }}
          >
            {todayCustomer}명
          </div>
        </Floating>
      </FadeIn>
    </>
  );
}

TodayInfo.defaultProps = {
  todaySale: 100000,
  todayCustomer: 0,
};
export default TodayInfo;
