import React from 'react';

const TotalHoursGauge = ({ value = 560, max = 1000 }) => {
  const percentage = Math.min(value / max, 1);
  const radius = 100;
  const centerX = 150;
  const centerY = 200;
  const needleLength = radius - 10;

  const angleDeg = -180 + percentage * 180;
  const angleRad = (angleDeg * Math.PI) / 180;
  const needleX = centerX + needleLength * Math.cos(angleRad);
  const needleY = centerY + needleLength * Math.sin(angleRad);

  const tickValues = Array.from({ length: 11 }, (_, i) => i * (max / 10));

  return (
    <div className="flex flex-col items-center h-[360px]">
      <h2 className="text-xl font-semibold mb-2">Total Hours Used</h2>

      <svg width="300" height="280" viewBox="0 0 300 240">
        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>
        </defs>

        {/* Background Arc */}
        <path
          d="M50,200 A100,100 0 0,1 250,200"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="16"
        />

        {/* Foreground Arc */}
        <path
          d="M50,200 A100,100 0 0,1 250,200"
          fill="none"
          stroke="url(#gaugeGradient)"
          strokeWidth="16"
          strokeDasharray={`${Math.PI * radius * percentage} ${Math.PI * radius * (1 - percentage)}`}
          strokeDashoffset="0"
          strokeLinecap="round"
        />

        {/* Needle */}
        <line
          x1={centerX}
          y1={centerY}
          x2={needleX}
          y2={needleY}
          stroke="#1e3a8a"
          strokeWidth="5"
        />
        <circle cx={centerX} cy={centerY} r="6" fill="#1e3a8a" />

        {/* Ticks */}
        {tickValues.map((val) => {
          const tickAngle = -180 + (val / max) * 180;
          const tickRad = (tickAngle * Math.PI) / 180;
          const tickX = centerX + (radius + 18) * Math.cos(tickRad);
          const tickY = centerY + (radius + 18) * Math.sin(tickRad);
          return (
            <text
              key={val}
              x={tickX}
              y={tickY}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="12"
              fill="#6b7280"
            >
              {val}
            </text>
          );
        })}
      </svg>

      <div className="text-2xl font-bold text-indigo-700 mt-3">
        {value} / {max}
      </div>
    </div>
  );
};

export default TotalHoursGauge;
