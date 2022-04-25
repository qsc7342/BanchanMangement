// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsivePie } from "@nivo/pie";
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
              id: it.menuType,
              label: it.menuType,
              value: it.sales,
            },
          ];
          weekData = weekData.concat(obj);
        });
        setDailySale(weekData);
      });
  };
  return (
    <ResponsivePie
        data={dailySale}
        colors={{scheme: 'paired'}}
        margin={{ top: 40, right: 300, bottom: 80, left: 80 }}
        innerRadius={0}
        padAngle={1}
        cornerRadius={3}
        sortByValue={true}
        activeOuterRadiusOffset={8}
        borderWidth={3}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        enableArcLabels={false}
        arcLabelsRadiusOffset={0.5}
        arcLabel="id"
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    3
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 40,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 80,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
  );
};

export default TypeSalesbar;
