// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from "@nivo/bar";
import * as config from "../../config";
import { useState, useEffect } from "react";
import { start } from "repl";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [
  {
    type: "반찬",
    매출액: 450000,
  },
  {
    type: "국",
    매출액: 150000,
  },
  {
    type: "구이류",
    매출액: 550000,
  },
  {
    type: "김치",
    매출액: 250000,
  },
  {
    type: "김치2",
    매출액: 250000,
  },
  {
    type: "김치3",
    매출액: 250000,
  },
  {
    type: "김치4",
    매출액: 250000,
  },
  {
    type: "김치5",
    매출액: 250000,
  },
  {
    type: "김치6",
    매출액: 250000,
  },
  {
    type: "김치7",
    매출액: 250000,
  },
  {
    type: "김치8",
    매출액: 250000,
  },
];

const TypeSalesbar = ({ startDate, endDate }) => {
  let 매출액 = ["매출액"];
  let stDate = JSON.stringify(startDate);
  let edDate = JSON.stringify(endDate);
  let weekData = [];
  stDate = stDate.slice(1, 11).replaceAll("-", "");
  edDate = edDate.slice(1, 11).replaceAll("-", "");
  useEffect(() => {
    getDailySale();
  }, [startDate, endDate]);
  const [dailySale, setDailySale] = useState([{ name: "", 매출액: 0 }]);
  const getDailySale = () => {
    fetch(config.Server_URL + "/pos/sales/menu/type", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        next: edDate,
        prev: stDate,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        data.map((it) => {
          const obj = [
            {
              type: it.menuType,
              매출액: it.sales,
            },
          ];
          weekData = weekData.concat(obj);
        });
        setDailySale(weekData);
        console.log(dailySale);
      });
  };
  return (
    <ResponsiveBar
      data={dailySale}
      keys={매출액}
      indexBy="type"
      margin={{ top: 50, right: 130, bottom: 50, left: 120 }}
      padding={0.4}
      groupMode="grouped"
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "paired" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "fries",
          },
          id: "dots",
        },
        {
          match: {
            id: "sandwich",
          },
          id: "lines",
        },
      ]}
      borderWidth={0.5}
      borderRadius={0}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "품목별 매출",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      enableGridX={true}
      enableGridY={false}
      enableLabel={false}
      labelSkipWidth={13}
      labelSkipHeight={12}
      labelTextColor={{ theme: "background" }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "top-right",
          direction: "column",
          justify: false,
          translateX: 80,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      motionConfig="molasses"
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in type: " + e.indexValue;
      }}
    />
  );
};

export default TypeSalesbar;
