import React from "react";
import {
  FaPlus,
  FaSearch,
  FaBell,
  FaGlobe,
  FaCog,
  FaUser,
} from "react-icons/fa";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl">Home</h1>
        <a href="#" className="text-white text-lg">
          AI Heatmap
        </a>
        <nav className="flex space-x-4 items-center">
          <div className="flex space-x-4 items-center">
            <FaPlus className="text-white text-2xl cursor-pointer" />
            <FaSearch className="text-white text-2xl cursor-pointer" />
            <FaBell className="text-white text-2xl cursor-pointer" />
            <FaGlobe className="text-white text-2xl cursor-pointer" />
            <FaCog className="text-white text-2xl cursor-pointer" />
            <FaUser className="text-white text-2xl cursor-pointer" />
          </div>
        </nav>
      </header>

      <main className="p-4">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="bg-white p-4 rounded shadow flex flex-col items-center">
            <h2 className="text-xl">Project</h2>
            <p className="text-2xl">0</p>
          </div>
          <div className="bg-white p-4 rounded shadow flex flex-col items-center">
            <h2 className="text-xl">Device</h2>
            <p className="text-2xl">0</p>
          </div>
          <div className="bg-white p-4 rounded shadow flex flex-col items-center">
            <h2 className="text-xl">Alarm</h2>
            <p className="text-2xl">0</p>
          </div>
        </div>

        {/* <div className="flex items-center space-x-4 mb-4">
          <button className="bg-green-500 text-white p-2 rounded">Add</button>
          <button className="bg-gray-200 text-black p-2 rounded">
            Project Management
          </button>
          <button className="bg-gray-200 text-black p-2 rounded">
            Unfind Device
          </button>
          <input
            type="text"
            placeholder="Enter project name"
            className="border p-2 rounded flex-1"
          />
        </div> */}

        {/* <div className="bg-white p-4 rounded shadow mb-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl">Quick Add</h2>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-green-500">
                Quick Start Guide
              </a>
              <a href="#" className="text-green-500">
                Add Demo Project
              </a>
            </div>
          </div>
        </div> */}

        {/* <div className="bg-white p-4 rounded shadow">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th>Status</th>
                <th>Alias</th>
                <th>Model</th>
                <th>SN</th>
                <th>Config Status</th>
                <th>Group</th>
                <th>Management IP</th>
                <th>Egress IP</th>
                <th>Firmware Version</th>
                <th>MAC</th>
                <th>Offline Time</th>
                <th>Remark</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="13" className="text-center py-4">
                  No Data
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}

        <div className="p-6">
          <div className="flex justify-between items-center border-b mb-4">
            <div className="flex space-x-4 text-blue-500">
              <button className="px-4 py-2 border-b-2 border-blue-500">
                Created (0)
              </button>
              <button className="px-4 py-2">Received (0)</button>
              <button className="px-4 py-2">Shared (0)</button>
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-green-500 text-white rounded">
                Add
              </button>
              <button className="px-4 py-2 bg-gray-200 rounded">
                Project Management
              </button>
              <button className="px-4 py-2 bg-gray-200 rounded">
                Unfind Device
              </button>
            </div>
            <input
              type="text"
              placeholder="Enter project name"
              className="border px-4 py-2 rounded"
            />
          </div>
          <div className="flex flex-col items-center">
            <button className="mb-4 px-6 py-2 bg-green-500 text-white rounded">
              Quick Add
            </button>
            <button className="mb-2 px-6 py-2 bg-white border rounded">
              Quick Start Guide
            </button>
            <button className="px-6 py-2 bg-white border rounded">
              Add Demo Project
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
