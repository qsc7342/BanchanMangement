// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLine } from "@nivo/line";
import { useEffect, useState } from "react";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { start } from "repl";
import * as config from "../../config";

// const getWeeklySales = () => {
//   fetch(config.Server_URL + "/pos/sales/day", {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify({
//       next:
//       prev:
//     }),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       let cnt = 0;
//       data.map((it) => {
//         ++cnt;
//         console.log(it.date);
//         const obj = [
//           {
//             name: it.date.substr(5),
//             매출액: it.sales,
//           },
//         ];
//         if (cnt === 1) {
//           weekData = weekData.concat([
//             {
//               name: "",
//               매출액: it.sales,
//             },
//           ]);
//         }
//         weekData = weekData.concat(obj);
//       });
//       setWeeklySale(weekData);
//     });
//   };

const Salesbar = ({ startDate, endDate }) => {
  useEffect(() => {
    getDailySale();
  }, [startDate, endDate]);
  let stDate = JSON.stringify(startDate);
  let edDate = JSON.stringify(endDate);
  let weekData = [];
  stDate = stDate.slice(1, 11).replaceAll("-", "");
  edDate = edDate.slice(1, 11).replaceAll("-", "");
  const [dailySale, setDailySale] = useState([{ name: "", 매출액: 0 }]);
  const data = [
    { name: " ", 매출액: 456000 },
    { name: "04.11", 매출액: 456000 },
    { name: "04.12", 매출액: 374000 },
    { name: "04.13", 매출액: 274000 },
    { name: "04.14", 매출액: 174000 },
    { name: "04.15", 매출액: 274000 },
    { name: "04.16", 매출액: 374000 },
    { name: "04.17", 매출액: 474000 },
  ];
  const getDailySale = () => {
    fetch(config.Server_URL + "/pos/sales/day", {
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
        let cnt = 0;
        data.map((it) => {
          ++cnt;
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
        setDailySale(weekData);
      });
  };

  return (
    <LineChart
      width={800}
      height={350}
      data={dailySale}
      margin={{ top: 30, right: 90, bottom: 20, left: 10 }}
    >
      <Line type="monotone" dataKey="매출액" stroke="#2667d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};

export default Salesbar;
