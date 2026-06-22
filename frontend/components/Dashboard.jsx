import React, { useEffect, useState } from "react";
import { getDashboardStats } from "../api/dashboardApi";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalVisits: 0,
    totalInquiries: 0,
    conversion: 0,
  });

  const [loading, setLoading] = useState(true);

  const fetchDashboardStats = async () => {
    try {
      const res = await getDashboardStats();

      setStats({
        totalVisits: res.data.totalVisits || 0,
        totalInquiries: res.data.totalInquiries || 0,
        conversion: res.data.conversion || 0,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  return (
    <div className="bg-black min-h-screen text-white p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-semibold">
          Dashboard
        </h1>

        <select className="bg-[#111111] border border-gray-700 px-4 py-2 rounded-lg outline-none">
          <option>Last 24 Hours</option>
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
        </select>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-[60vh]">
          <p className="text-gray-400 text-lg">
            Loading Dashboard...
          </p>
        </div>
      ) : (
        <>
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-[#111111] border border-gray-700 rounded-3xl p-8">
              <p className="text-gray-400 mb-4">
                Total Visits / Footfall
              </p>

              <h2 className="text-6xl font-bold">
                {stats.totalVisits}
              </h2>
            </div>

            <div className="bg-[#111111] border border-gray-700 rounded-3xl p-8">
              <p className="text-gray-400 mb-4">
                Total Inquiries Received
              </p>

              <h2 className="text-6xl font-bold">
                {stats.totalInquiries}
              </h2>
            </div>

            <div className="bg-[#111111] border border-gray-700 rounded-3xl p-8">
              <p className="text-gray-400 mb-4">
                Conversion
              </p>

              <h2 className="text-6xl font-bold">
                {stats.conversion}%
              </h2>
            </div>
          </div>

          {/* Graph Section */}
          <div className="bg-[#111111] border border-gray-700 rounded-3xl p-8 h-[450px]">
            <h3 className="text-xl font-medium mb-6">
              Analytics Graph
            </h3>

            <div className="h-[320px] flex items-center justify-center text-gray-500">
              Graph Coming Soon...
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;