import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const RoundedBar = (props) => {
  const { x, y, width, height } = props;
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} rx={5} fill="#ff7b004f" />
    </g>
  );
};

const data = [
  { day: 'Sun', revenue: 2000 },
  { day: 'Mon', revenue: 3000 },
  { day: 'Tue', revenue: 2500 },
  { day: 'Wed', revenue: 3500 },
  { day: 'Thu', revenue: 3200 },
  { day: 'Fri', revenue: 2800 },
  { day: 'Sat', revenue: 3300 },
  { day: 'Sun', revenue: 2000 },
  { day: 'Mon', revenue: 3000 },
];

const BarChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%" aspect={8.0/3.0}>
      <BarChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="revenue" shape={<RoundedBar />} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
