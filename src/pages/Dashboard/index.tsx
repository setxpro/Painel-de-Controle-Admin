import React, { useEffect, useState } from 'react';
import * as C from './styles';

import { data, options, animationOptions } from '../../db/Charts';
import { Chart } from "react-google-charts";
import { faker } from '@faker-js/faker';

const Dashboard: React.FC = () => {
  
  const [chartData, setChartData] = useState(getData);

  function getData() {
    return [
      ["Age", "Weight"],
      ...Array.from({ length: 16 }, () => [
        faker.datatype.number({ min: 1, max: 100 }),
        faker.datatype.number({ min: 1, max: 100 }),
      ]),
    ];
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setChartData(getData());
    }, 900);

    return () => {
      clearInterval(intervalId);
    };
  });
  
  return (

    <C.Container>
         <C.ContainerTitle>
                    <h2>Dashboards</h2>
                </C.ContainerTitle>
          <C.AreaChart>
                  <C.AreaCharts>
                    <Chart
                          chartType="LineChart"
                          width="500px"
                          height="280px"
                          data={data}
                          options={options}
                          loader={<C.Spinner><div className="lds-ripple"><div></div><div></div></div></C.Spinner>}
                      />
                  </C.AreaCharts>
                  <C.AreaCharts>
                  <Chart
                      width="500px"
                      chartType="BarChart"
                      loader={<C.Spinner><div className="lds-ripple"><div></div><div></div></div></C.Spinner>}
                      data={data}
                  rootProps={{ "data-testid": "6" }}
                  chartPackages={["corechart", "controls"]}
                  render={({ renderControl, renderChart }) => {
                    return (
                      <div>
                        <div style={{ width: "40%" }}>{renderControl(() => true)}</div>
                        <div style={{ width: "60%" }}>{renderChart()}</div>
                      </div>
                    );
                  }}
                  controls={[
                    {
                      controlType: "StringFilter",
                      options: {
                        filterColumnIndex: 0,
                        matchType: "any", // 'prefix' | 'exact',
                        ui: {
                          label: "Search by name",
                        },
                      },
                    },
                    {
                      controlType: "NumberRangeFilter",
                      controlID: "age-filter",
                      options: {
                        filterColumnIndex: 1,
                        ui: {
                          labelStacking: "vertical",
                          label: "Age Selection:",
                          allowTyping: false,
                          allowMultiple: false,
                        },
                      },
                    },
                  ]}
                  />
                  </C.AreaCharts>
          </C.AreaChart>
        <C.AreaMiniCharts>
          <C.MiniChart>
          <Chart
            chartType="ScatterChart"
            width="265px"
            height="165px"
            data={chartData}
            loader={<C.Spinner><div className="lds-ripple"><div></div><div></div></div></C.Spinner>}
            options={animationOptions}
          />
          </C.MiniChart>
          <C.MiniChart>
          <Chart
            chartType="PieChart"
            width="265px"
            height="165px"
            data={data}
            loader={<C.Spinner><div className="lds-ripple"><div></div><div></div></div></C.Spinner>}
            options={options}
          />
          </C.MiniChart>
          <C.MiniChart>
            <Chart
              chartType="AreaChart"
              width="265px"
              height="165px"
              data={data}
              loader={<C.Spinner><div className="lds-ripple"><div></div><div></div></div></C.Spinner>}
              options={options}
            />
          </C.MiniChart>
        </C.AreaMiniCharts>
    </C.Container>
  );
}

export default Dashboard;