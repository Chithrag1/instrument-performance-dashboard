import React from 'react';
const TotalHoursGauge = ({ value, max = 1000 }) => {
  const radius = 90;
  const cx = 100;
  const cy = 100;
  const needleLength = radius - 10;
  const angle = (value / max) * 180;
  const angleRad = (angle - 90) * (Math.PI / 180);

  const needleX = cx + needleLength * Math.cos(angleRad);
  const needleY = cy + needleLength * Math.sin(angleRad);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Total Hours Used</h2>
      <svg width="200" height="120">
        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a5b4fc" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>
        </defs>

        {/* Semicircle Arc */}
        <path
          d="M10,100 A90,90 0 0,1 190,100"
          fill="none"
          stroke="url(#gaugeGradient)"
          strokeWidth="20"
        />

        {/* Needle */}
        <line
          x1={cx}
          y1={cy}
          x2={needleX}
          y2={needleY}
          stroke="#1e3a8a"
          strokeWidth="4"
        />

        {/* Center dot */}
        <circle cx={cx} cy={cy} r="5" fill="#1e3a8a" />

        {/* Scale ticks */}
        {[...Array(11)].map((_, i) => {
          const tickAngle = (i * 18 - 90) * (Math.PI / 180);
          const x1 = cx + (radius - 5) * Math.cos(tickAngle);
          const y1 = cy + (radius - 5) * Math.sin(tickAngle);
          const x2 = cx + (radius + 5) * Math.cos(tickAngle);
          const y2 = cy + (radius + 5) * Math.sin(tickAngle);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#6b7280"
              strokeWidth="2"
            />
          );
        })}
      </svg>
      <p className="text-center mt-2 text-xl font-bold text-indigo-700">{value} / {max}</p>
    </div>
  );
};

export default TotalHoursGauge;
