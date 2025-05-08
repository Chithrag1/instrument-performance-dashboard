import React, { useState } from 'react';
import { Rectangle } from 'recharts';
import TotalHoursGauge from './charts/TotalHoursGauge';
import UptimeGauge from './charts/UptimeGauge';

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend
} from 'recharts';
// 🔹 Custom Cone Bar shape
const ConeBar = ({ x, y, width, height, fill }) => {
    const topX = x + width / 2;
    const bottomX1 = x;
    const bottomX2 = x + width;
    const topY = y;
    const bottomY = y + height;
  
    return (
      <path
        d={`M${bottomX1},${bottomY} Q${topX},${topY - 20} ${bottomX2},${bottomY} Z`}
        fill={fill}
      />
    );
  };
  
const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444'];
const ROLE_COLORS = ['#bfdbfe', '#93c5fd', '#60a5fa', '#3b82f6'];

const sessionData = [
  { type: 'Supervised', value: 120 },
  { type: 'Training', value: 80 },
  { type: 'Unsupervised', value: 160 }
];

const roleData = [
  { name: 'Facility Admins', value: 45 },
  { name: 'Users', value: 30 },
  { name: 'Analysts', value: 20 },
  { name: 'Lab Admins', value: 25 }
];

const activityData = [
  { day: 'Mon', most: 24, least: 5 },
  { day: 'Tue', most: 30, least: 8 },
  { day: 'Wed', most: 28, least: 6 },
  { day: 'Thu', most: 35, least: 10 },
  { day: 'Fri', most: 32, least: 7 },
  { day: 'Sat', most: 20, least: 4 },
  { day: 'Sun', most: 18, least: 3 }
];

const monthlyUsageData = [
    { month: 'Jan 2025', hours: 12 },
    { month: 'Feb 2025', hours: 10 },
    { month: 'Mar 2025', hours: 20 },
    { month: 'Apr 2025', hours: 12 },
    { month: 'May 2025', hours: 3 },
    { month: 'Jun 2025', hours: 18 },
    { month: 'Jul 2025', hours: 7 },
    { month: 'Aug 2025', hours: 15 },
    { month: 'Sep 2025', hours: 9 },
    { month: 'Oct 2025', hours: 22 },
    { month: 'Nov 2025', hours: 13 },
    { month: 'Dec 2025', hours: 17 },
  ];


  const timeSlots = ['8am', '10am', '12pm', '2pm', '4pm', '6pm'];

  const heatmapData = [
    { day: 'Mon', hours: [2, 5, 8, 6, 1, 0] },
    { day: 'Tue', hours: [3, 7, 6, 4, 2, 1] },
    { day: 'Wed', hours: [1, 2, 5, 7, 6, 2] },
    { day: 'Thu', hours: [4, 6, 7, 5, 3, 1] },
    { day: 'Fri', hours: [2, 5, 4, 6, 7, 0] },
    { day: 'Sat', hours: [0, 2, 3, 4, 1, 0] },
    { day: 'Sun', hours: [1, 1, 2, 3, 0, 0] }
  ];
  
  const getColor = (value) => {
    const colors = [
      '#e0f2fe', // 0
      '#bae6fd', // 1–2
      '#7dd3fc', // 3–4
      '#38bdf8', // 5–6
      '#0ea5e9', // 7–8
      '#0284c7'  // 9+
    ];
    if (value >= 8) return colors[5];
    if (value >= 6) return colors[4];
    if (value >= 4) return colors[3];
    if (value >= 2) return colors[2];
    if (value >= 1) return colors[1];
    return colors[0];
  };
  ;
  const labUsageData = [
    { lab: 'Lab 1', min: 2, q1: 4, median: 6, q3: 7, max: 11 },
    { lab: 'Lab 2', min: 3, q1: 5, median: 6, q3: 8, max: 10 },
    { lab: 'Lab 3', min: 1, q1: 3, median: 5, q3: 6, max: 9 },
    { lab: 'Lab 4', min: 4, q1: 6, median: 7, q3: 9, max: 12 },
    { lab: 'Lab 5', min: 1, q1: 2, median: 4, q3: 5, max: 8 },
  ];
  
  const userUsageData = [
    { name: 'Jolene Archer', hours: 0.5 },
    { name: 'Super Admin', hours: 0.5 },
    { name: 'Facility Admin', hours: 1.5 },
    { name: 'Inst Admin', hours: 2.5 },
    { name: 'John Amelia', hours: 6 },
    { name: 'Williams Olivia', hours: 10.5 },
    { name: 'Joseph Zabner', hours: 22 }
  ];
  
  
const Charts = () => {
  const [filter1, setFilter1] = useState('week');
  const [filter2, setFilter2] = useState('week');
  const [filter3, setFilter3] = useState('week');

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
      {/* 3D Bar Chart (Session Type) */}
      <div className="bg-white p-4 rounded-lg shadow min-w-0">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Usage by Session Type</h2>
          <select
            className="border px-3 py-1 rounded text-sm text-gray-600"
            value={filter1}
            onChange={(e) => setFilter1(e.target.value)}
          >
            <option value="week">Last 7 days</option>
            <option value="month">Last 30 days</option>
            <option value="year">Last 12 months</option>
          </select>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={sessionData}>
            <XAxis dataKey="type" />
            <YAxis label={{ value: 'Hours', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Bar dataKey="value">
                {sessionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={["#a5b4fc", "#818cf8", "#6366f1"][index]} />
                 ))}
            </Bar>  
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Donut Chart (Role) */}
      <div className="bg-white p-4 rounded-lg shadow min-w-0">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Usage by Role</h2>
          <select
            className="border px-3 py-1 rounded text-sm text-gray-600"
            value={filter2}
            onChange={(e) => setFilter2(e.target.value)}
          >
            <option value="week">Last 7 days</option>
            <option value="month">Last 30 days</option>
            <option value="year">Last 12 months</option>
          </select>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={roleData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {roleData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={ROLE_COLORS[index % ROLE_COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex justify-center mt-4 space-x-4 text-sm">
  {roleData.map((entry, index) => (
    <div key={index} className="flex items-center space-x-2">
      <span
        className="inline-block w-4 h-4 rounded-full"
        style={{ backgroundColor: ROLE_COLORS[index % COLORS.length] }}
      ></span>
      <span>{entry.name}</span>
    </div>
  ))}
</div>

      </div>
    {/* Gauge Chart */}
        <div className="bg-white p-6 rounded-lg shadow min-w-0">
            <TotalHoursGauge value={560} max={1000} />
        </div>

        <div className="col-span-1 md:col-span-2 xl:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* 📈 User Activity Over Week */}
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">User Activity Over Week</h2>
        <select
          className="border px-3 py-1 rounded text-sm text-gray-600"
          value={filter3}
          onChange={(e) => setFilter3(e.target.value)}
        >
          <option value="week">Last 7 days</option>
          <option value="month">Last 30 days</option>
          <option value="year">Last 12 months</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={activityData}>
          <XAxis dataKey="day" />
          <YAxis label={{ value: 'Hours', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="most" stroke="#10b981" strokeWidth={2} />
          <Line type="monotone" dataKey="least" stroke="#ef4444" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>

    {/* 📊 Monthly Usage Chart */}
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Monthly Usage (Last 12 Months)</h2>
        <select
          className="border px-3 py-1 rounded text-sm text-gray-600"
          defaultValue="annual"
        >
          <option value="quarter">Quarterly View</option>
          <option value="annual">Annual View</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={monthlyUsageData}>
          <XAxis
            dataKey="month"
            angle={-45}
            textAnchor="end"
            interval={0}
            height={60}
          />
          <YAxis
            domain={[0, 25]}
            label={{ value: 'Hours', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip />
          <Bar dataKey="hours" shape={<ConeBar />}>
            {monthlyUsageData.map((entry, index) => (
              <Cell
                key={`bar-${index}`}
                fill={[
                  "#a5b4fc", "#93c5fd", "#60a5fa", "#3b82f6",
                  "#2563eb", "#1d4ed8", "#1e40af", "#1e3a8a",
                  "#172554", "#0f172a", "#3b82f6", "#6366f1"
                ][index]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>

  </div>




         {/* Heatmap */}
            <div className="bg-white p-6 rounded-lg shadow col-span-1 md:col-span-2 xl:col-span-3">
            <h2 className="text-lg font-semibold mb-6">Usage Frequency by Day & Time (By Hours)</h2>
            <div className="overflow-x-auto">
                <div className="grid grid-cols-[100px_repeat(6,minmax(40px,1fr))] gap-1">
                {/* Header */}
                <div className="bg-gray-100 font-semibold py-2 px-3 text-center rounded">Day</div>
                {timeSlots.map((slot, i) => (
                    <div key={i} className="bg-gray-100 font-semibold py-2 px-3 text-center rounded">{slot}</div>
                ))}

                {/* Heatmap Rows */}
                {heatmapData.map((row, rowIndex) => (
                    <React.Fragment key={rowIndex}>
                    <div className="font-semibold py-2 px-3 text-center bg-gray-50 rounded">{row.day}</div>
                    {row.hours.map((val, colIndex) => (
                        <div
                        key={colIndex}
                        className="flex items-center justify-center py-3 text-sm font-semibold rounded transition duration-150 transform hover:scale-105"
                        style={{
                            backgroundColor: getColor(val),
                            color: val >= 6 ? '#ffffff' : '#1e3a8a',
                        }}
                        >
                        {val}
                        </div>
                    ))}
                    </React.Fragment>
                ))}
                </div>
            </div>

</div>

             {/* ✅ Uptime Gauge – Standalone */}
                <div className="col-span-1 md:col-span-1 xl:col-span-1 bg-white p-4 rounded-lg shadow">
                <UptimeGauge value={98.36} />
                </div>

                            {/* ✅ Box Plot – Separate but spans 2 columns */}
                <div className="col-span-1 md:col-span-2 xl:col-span-2 bg-white p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-4">Usage by Lab (Box Plot)</h2>
                <ResponsiveContainer width="100%" height={280}>
                    <BarChart data={labUsageData}>
                    <XAxis dataKey="lab" />
                    <YAxis label={{ value: 'Usage (hrs)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Bar
                        dataKey="q1"
                        shape={({ x, y, width, height, payload }) => {
                            const { min, q1, median, q3, max } = payload;
                            const scaleY = 10; // Scale factor for visual height
                            const centerX = x + width / 2;

                            const yQ1 = y + (8 - q1) * scaleY;
                            const yQ3 = y + (8 - q3) * scaleY;
                            const yMedian = y + (8 - median) * scaleY;
                            const yMin = y + (8 - min) * scaleY;
                            const yMax = y + (8 - max) * scaleY;

                            const boxHeight = Math.abs(yQ3 - yQ1);
                            const boxY = Math.min(yQ1, yQ3);

                            return (
                            <>
                                {/* Box from Q1 to Q3 */}
                                <rect
                                x={x + width / 4}
                                y={boxY}
                                width={width / 2}
                                height={boxHeight}
                                fill="#3b82f6"
                                rx="2"
                                />
                                {/* Median Line */}
                                <line
                                x1={x + width / 4}
                                x2={x + (3 * width) / 4}
                                y1={yMedian}
                                y2={yMedian}
                                stroke="#1e40af"
                                strokeWidth={2}
                                />
                                {/* Whiskers */}
                                <line
                                x1={centerX}
                                x2={centerX}
                                y1={yQ3}
                                y2={yMax}
                                stroke="#1e3a8a"
                                strokeWidth={1}
                                />
                                <line
                                x1={centerX}
                                x2={centerX}
                                y1={yQ1}
                                y2={yMin}
                                stroke="#1e3a8a"
                                strokeWidth={1}
                                />
                            </>
                            );
                        }}
                        />
                    </BarChart>
                </ResponsiveContainer>
                </div>
            {/* Line Charts – Most & Least Used Users */}
                <div className="col-span-1 md:col-span-2 xl:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Least Used Users */}
                <div className="bg-white p-4 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-2">📉 Least Used Users</h2>
                    <ResponsiveContainer width="100%" height={280}>
                    <LineChart
                        data={[...userUsageData].sort((a, b) => a.hours - b.hours)}
                        margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
                    >
                        <XAxis 
                            dataKey="name" 
                            angle={-30} 
                            textAnchor="end" 
                            interval={0}
                            height={60}
                            tick={{ fontSize: 12 }}
                            />
                        <YAxis label={{ value: 'Hours', angle: -90, position: 'insideLeft' }} />
                        <Tooltip />
                        <Line
                        type="monotone"
                        dataKey="hours"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        />
                    </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Most Used Users */}
                <div className="bg-white p-4 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-2">📈 Most Used Users</h2>
                    <ResponsiveContainer width="100%" height={280}>
                    <LineChart
                        data={[...userUsageData].sort((a, b) => b.hours - a.hours)}
                        margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
                    >
                        <XAxis 
                        dataKey="name" 
                        angle={-30} 
                        textAnchor="end" 
                        interval={0}
                        height={60}
                        tick={{ fontSize: 12 }}
                        />
                        <YAxis label={{ value: 'Hours', angle: -90, position: 'insideLeft' }} />
                        <Tooltip />
                        <Line
                        type="monotone"
                        dataKey="hours"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        />
                    </LineChart>
                    </ResponsiveContainer>
                </div>
                </div>

    </div>
       
  );
};

export default Charts;
