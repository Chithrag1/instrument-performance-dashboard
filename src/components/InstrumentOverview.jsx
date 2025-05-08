import React from 'react';
import {
  FaMicroscope,
  FaClock,
  FaDollarSign,
  FaExclamationTriangle,
  FaBookOpen,
  FaArrowUp,
  FaArrowDown,
} from 'react-icons/fa';
import InstrumentImage from '../assets/lsm880_750x500.png';

const InstrumentOverview = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[320px_1fr] gap-6 w-full mb-6">
      {/* Left: Instrument Details */}
      <div className="bg-white p-6 rounded-xl shadow-xl h-full">
        <img
          src={InstrumentImage}
          alt="Instrument"
          className="w-full h-36 object-contain mb-4 rounded-lg"
        />
        <h2 className="text-lg font-bold text-gray-700 mb-2">Instrument Details</h2>
        <p><strong>Name:</strong> Mass Spectrometer XRF-5000</p>
        <p><strong>Manufacturer:</strong> ThermoFisher Scientific</p>
        <p><strong>Asset Tag:</strong> LAB-MS-001</p>
        <p><strong>Category:</strong> Analytical Equipment</p>
        <p><strong>Booking Rate:</strong> $120/hour</p>
      </div>

      {/* Right: KPI Cards Section */}
      <div className="grid grid-cols-1 gap-4 h-full">
        {/* Row 1: 3 KPI cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <KPI icon={<FaClock size={28} className="text-blue-500" />} label="Utilization Rate" value="78%" trend="+5%" isPositive bgColor="bg-blue-50" />
          <KPI icon={<FaExclamationTriangle size={28} className="text-red-500" />} label="Downtime" value="2.3%" bgColor="bg-red-50" />
          <KPI icon={<FaDollarSign size={28} className="text-green-600" />} label="Total Revenue" value="$45,280" trend="-3.2%" isPositive={false} bgColor="bg-green-50" />
        </div>

        {/* Row 2: 2 KPI cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <KPI icon={<FaMicroscope size={28} className="text-orange-500" />} label="Technical Issues" value="12" bgColor="bg-orange-50" />
          <KPI icon={<FaBookOpen size={28} className="text-purple-600" />} label="Publications" value="23" trend="+2" isPositive bgColor="bg-purple-50" />
        </div>
      </div>
    </div>
  );
};

// KPI Card Component with animation and colored background
const KPI = ({ icon, label, value, trend, isPositive, bgColor = 'bg-gray-50' }) => (
  <div
    className={`rounded-xl border border-gray-200 p-4 flex flex-col items-center text-center justify-center transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg ${bgColor}`}
  >
    {icon}
    <h3 className="text-sm text-gray-600 mt-2">{label}</h3>
    <p className="text-2xl font-bold mt-1">{value}</p>
    {trend !== undefined && (
      <div className={`flex items-center text-sm mt-1 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {isPositive ? <FaArrowUp className="mr-1" /> : <FaArrowDown className="mr-1" />}
        {trend}
      </div>
    )}
  </div>
);

export default InstrumentOverview;
