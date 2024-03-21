import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ReChart = () => {
  const studentData = [
    {
      name: "John Doe",
      class: 1,
      marks: { math: 80, science: 75, english: 85 },
    },
    {
      name: "Jane Smith",
      class: 2,
      marks: { math: 70, science: 65, english: 75 },
    },
    {
      name: "Alice Johnson",
      class: 3,
      marks: { math: 85, science: 80, english: 90 },
    },
    {
      name: "Bob Brown",
      class: 4,
      marks: { math: 75, science: 70, english: 80 },
    },
    {
      name: "Emily Davis",
      class: 5,
      marks: { math: 90, science: 85, english: 95 },
    },
    {
      name: "Michael Wilson",
      class: 1,
      marks: { math: 85, science: 80, english: 90 },
    },
    {
      name: "Olivia Martinez",
      class: 2,
      marks: { math: 75, science: 70, english: 80 },
    },
    {
      name: "Sophia Anderson",
      class: 3,
      marks: { math: 90, science: 85, english: 95 },
    },
    {
      name: "James Taylor",
      class: 4,
      marks: { math: 80, science: 75, english: 85 },
    },
    {
      name: "Emma Thomas",
      class: 5,
      marks: { math: 70, science: 65, english: 75 },
    },
  ];

  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={studentData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="marks.math"
            fill="#8884d8"
            shape={<Rectangle fill="#8884d8" stroke="blue" />}
          />
          <Bar
            dataKey="marks.science"
            fill="#82ca9d"
            shape={<Rectangle fill="#82ca9d" stroke="purple" />}
          />
          <Bar
            dataKey="marks.english"
            fill="red"
            shape={<Rectangle fill="red" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReChart;
