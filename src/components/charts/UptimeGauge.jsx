import React from 'react';

const UptimeGauge = ({ value = 98.36 }) => {
  const radius = 120;
  const centerX = 150;
  const centerY = 180;
  const needleLength = radius - 10;

  const percentage = Math.min(Math.max(value, 0), 100);
  const angleDeg = -180 + (percentage * 180) / 100;
  const angleRad = (angleDeg * Math.PI) / 180;
  const needleX = centerX + needleLength * Math.cos(angleRad);
  const needleY = centerY + needleLength * Math.sin(angleRad);

  const getLabel = (val) => {
    if (val < 40) return 'POOR';
    if (val < 60) return 'FAIR';
    if (val < 75) return 'GOOD';
    if (val < 90) return 'VERY GOOD';
    return 'EXCELLENT';
  };

  const zones = [
    { color: '#ef4444', label: 'POOR', range: [0, 20] },
    { color: '#f97316', label: 'FAIR', range: [20, 40] },
    { color: '#facc15', label: 'GOOD', range: [40, 60] },
    { color: '#4ade80', label: 'VERY GOOD', range: [60, 80] },
    { color: '#22c55e', label: 'EXCELLENT', range: [80, 100] },
  ];

  const createArcPath = (startPercent, endPercent, r) => {
    const startAngle = (-180 + (startPercent * 180) / 100) * (Math.PI / 180);
    const endAngle = (-180 + (endPercent * 180) / 100) * (Math.PI / 180);
    const x1 = centerX + r * Math.cos(startAngle);
    const y1 = centerY + r * Math.sin(startAngle);
    const x2 = centerX + r * Math.cos(endAngle);
    const y2 = centerY + r * Math.sin(endAngle);
    return `M${x1},${y1} A${r},${r} 0 0,1 ${x2},${y2}`;
  };

  const getLabelPosition = (percent, distance = radius + 20) => {
    const angle = (-180 + (percent * 180) / 100) * (Math.PI / 180);
    return {
      x: centerX + distance * Math.cos(angle),
      y: centerY + distance * Math.sin(angle),
    };
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
      <h2 className="text-lg font-semibold mb-4">Uptime %</h2>
      <svg width="320" height="220">
        {/* Arcs */}
        {zones.map((zone, idx) => (
          <path
            key={idx}
            d={createArcPath(zone.range[0], zone.range[1], radius)}
            fill="none"
            stroke={zone.color}
            strokeWidth="16"
          />
        ))}

        {/* Labels on arc */}
        {zones.map((zone, idx) => {
          const mid = (zone.range[0] + zone.range[1]) / 2;
          const { x, y } = getLabelPosition(mid);
          return (
            <text
              key={idx}
              x={x}
              y={y}
              textAnchor="middle"
              fontSize="10"
              fill="#374151"
              fontWeight="bold"
            >
              {zone.label}
            </text>
          );
        })}

        {/* Needle */}
        <line
          x1={centerX}
          y1={centerY}
          x2={needleX}
          y2={needleY}
          stroke="#111827"
          strokeWidth="4"
        />
        <circle cx={centerX} cy={centerY} r="5" fill="#111827" />

        {/* Value */}
        <text
          x={centerX}
          y={centerY + 30}
          textAnchor="middle"
          fontSize="20"
          fontWeight="bold"
          fill="#16a34a"
        >
          {value.toFixed(2)}%
        </text>
        <text
          x={centerX}
          y={centerY + 50}
          textAnchor="middle"
          fontSize="14"
          fill="#16a34a"
        >
          {getLabel(value)}
        </text>
      </svg>
    </div>
  );
};

export default UptimeGauge;
