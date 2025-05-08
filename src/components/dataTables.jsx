import React, { useState } from 'react';
import {
  technicalIssuesLog,
  upcomingReservations,
  serviceRequestSubmissions,
  maintenancePlans,
} from './data';

const TableSection = ({ columns, keys, data }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <table className="w-full text-sm text-left border border-gray-200">
      <thead className="bg-gray-100">
        <tr>
          {columns.map((col) => (
            <th key={col} className="px-4 py-2">{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="border-t">
            {keys.map((key, j) => (
              <td key={j} className="px-4 py-2">{row[key] !== undefined ? row[key] : '-'}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const DataTables = () => {
  const [activeTab, setActiveTab] = useState('issues');

  const tabs = [
    {
      id: 'issues',
      label: 'Technical Issues Log',
      columns: ["Date", "Ticket ID", "Subject", "User", "Source", "Status"],
      keys: ["date", "ticketId", "subject", "user", "source", "status"],
      data: technicalIssuesLog,
    },
    {
      id: 'reservations',
      label: 'Upcoming Reservations',
      columns: ["Instrument", "Facility", "User", "Session Type", "Start", "End"],
      keys: ["instrument", "facility", "user", "sessionType", "start", "end"],
      data: upcomingReservations,
    },
    {
      id: 'requests',
      label: 'Service Requests',
      columns: ["Date", "Form Name", "User", "Type", "Status"],
      keys: ["date", "formName", "user", "type", "status"],
      data: serviceRequestSubmissions,
    },
    {
      id: 'maintenance',
      label: 'Maintenance Plans',
      columns: ["Plan Name", "In-Charge", "Start Date", "Duration", "Status"],
      keys: ["planName", "inCharge", "startDate", "duration", "status"],
      data: maintenancePlans,
    },
  ];

  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <div className="mt-10">
      {/* Tab Buttons */}
      <div className="flex space-x-4 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-t-lg font-medium ${
              activeTab === tab.id
                ? 'bg-white shadow text-blue-700 border-t border-l border-r border-gray-300'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <TableSection
        columns={currentTab.columns}
        keys={currentTab.keys}
        data={currentTab.data}
      />
    </div>
  );
};

export default DataTables;
