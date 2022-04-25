// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLine } from "@nivo/line";
import { useEffect } from "react";
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

const Salesbar = ({ data }) => (
  <LineChart
    width={750}
    height={400}
    data={data}
    margin={{ top: 30, right: 20, bottom: 20, left: 10 }}
  >
    <Line type="monotone" dataKey="매출액" stroke="#2667d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
);

Salesbar.defaultProps = {
  data: [
    { name: " ", 매출액: 456000 },
    { name: "04.11", 매출액: 456000 },
    { name: "04.12", 매출액: 374000 },
    { name: "04.13", 매출액: 274000 },
    { name: "04.14", 매출액: 174000 },
    { name: "04.15", 매출액: 274000 },
    { name: "04.16", 매출액: 374000 },
    { name: "04.17", 매출액: 474000 },
  ],
};
export default Salesbar;
