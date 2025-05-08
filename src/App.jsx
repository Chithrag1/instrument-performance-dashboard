import React from 'react';
import InstrumentOverview from './components/InstrumentOverview';
import Charts from './components/charts';
import DataTables from './components/DataTables';
import './index.css';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 font-sans p-8">
      {/* Dashboard Header */}
      <div className="w-full flex justify-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800 text-center">
          365 Instrument Performance Dashboard
        </h1>
      </div>

      {/* Section: Instrument Details + KPI Cards */}
      <InstrumentOverview />

      {/* Section: Interactive & Visual Charts */}
      <Charts />
      
      {/* Data Tables */}
      <DataTables />
    </div>
  );
};

export default App;
