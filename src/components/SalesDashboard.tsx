import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
 
// Dummy data for chart
const lineData = [
  { name: "Jan", value: 20 },
  { name: "Feb", value: 30 },
  { name: "Mar", value: 45 },
  { name: "Apr", value: 55 },
  { name: "May", value: 70 },
  { name: "Jun", value: 82 },
  { name: "Jul", value: 91 },
  { name: "Aug", value: 98 },
];
 
export default function SalesDashboard() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
 
    // Inject keyframes for dot animation
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes moveDotY {
        0% { transform: translateY(0); opacity: 0; }
        30% { opacity: 1; }
        70% { opacity: 1; }
        100% { transform: translateY(100%); opacity: 0; }
      }
      @keyframes moveDotX {
        0% { transform: translateX(0); opacity: 0; }
        30% { opacity: 1; }
        70% { opacity: 1; }
        100% { transform: translateX(100%); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }, []);
 
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="py-20 px-6 lg:px-20">
        {/* ✅ Heading & Description */}
        <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
            Coordinate your sales team <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
              from one dashboard
            </span>
          </h2>
          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            Automatically assign leads to the right person, share resources,
            and track performance in real-time with beautiful charts
            and interactive team insights.
          </p>
        </div>
 
        {/* ✅ Top Navigation */}
        <nav className="bg-white shadow-lg rounded-full px-8 py-3 flex items-center justify-center mt-12">
          <ul className="flex space-x-6 text-gray-600 font-medium">
            {["Clients", "Follow Ups", "Team", "Content", "Integrations"].map(
              (tab, i) => (
                <li key={i}>
                  <button
                    className={`px-4 py-2 rounded-full transition ${
                      tab === "Team"
                        ? "bg-gradient-to-r from-blue-500 to-green-500 text-white shadow"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {tab}
                  </button>
                </li>
              )
            )}
          </ul>
        </nav>
 
        {/* ✅ Two-column layout */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Chart + Stat */}
          <div className="flex gap-6" data-aos="fade-right" data-aos-delay="300">
            {/* Leads Contacted Chart */}
            <div className="flex-1 shadow-2xl border rounded-3xl p-6 bg-white hover:shadow-blue-200 transition">
              <h3 className="text-green-500 font-bold text-xl">98.5%</h3>
              <p className="text-gray-700 text-sm mb-4">Leads contacted</p>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={lineData}>
                    <defs>
                      <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#22c55e" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis hide />
                    <Tooltip cursor={false} />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#22c55e"
                      strokeWidth={3}
                      fill="url(#colorGreen)"
                      dot={{
                        r: 5,
                        fill: "#fff",
                        stroke: "#22c55e",
                        strokeWidth: 2,
                      }}
                      activeDot={{ r: 7 }}
                      isAnimationActive={true}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
 
            {/* Average Response Time Card */}
            <div className="w-44 shadow-xl border rounded-3xl p-6 bg-gradient-to-br from-indigo-500 to-blue-600 text-center text-white flex flex-col justify-center hover:scale-105 transition">
              <p className="text-sm opacity-90">Avg. response time</p>
              <h3 className="text-3xl font-extrabold mt-2">13 mins</h3>
              <p className="text-xs opacity-80 mt-1">for contacted clients</p>
            </div>
          </div>
 
          {/* Right: Team Hierarchy */}
          <div
            className="relative flex flex-col items-center"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            {/* Main Admin */}
            <div className="bg-gradient-to-r from-indigo-100 to-blue-100 border-2 border-indigo-300 rounded-2xl p-5 shadow-lg text-center w-44 hover:shadow-xl transition">
              <img
                src="https://i.pravatar.cc/100?img=1"
                alt="Full Team Admin"
                className="mx-auto h-14 w-14 rounded-full object-cover shadow-md"
              />
              <p className="mt-3 font-semibold text-gray-800">
                Full Team Admin
              </p>
            </div>
 
            {/* 🔥 Vertical Connector with Moving Dot */}
            <div className="relative w-1 h-12 bg-indigo-300 rounded-full overflow-hidden">
              <span
                className="absolute left-0 w-2 h-2 bg-blue-500 rounded-full"
                style={{ animation: "moveDotY 1.5s linear infinite" }}
              ></span>
            </div>
 
            {/* Subteams with Horizontal Connector */}
            <div className="relative flex items-start gap-10">
              {/* 🔥 Horizontal Connector with Moving Dot */}
              <div className="absolute top-5 left-0 right-0 h-1 bg-indigo-300 rounded-full overflow-hidden">
                <span
                  className="absolute top-0 h-2 w-2 bg-green-500 rounded-full"
                  style={{ animation: "moveDotX 2s linear infinite" }}
                ></span>
              </div>
 
              {["Subteam 1", "Subteam 2", "Subteam 3"].map((team, idx) => (
                <div
                  key={idx}
                  className="relative z-10 bg-white border-2 border-indigo-200 rounded-2xl p-5 shadow-md text-center w-32 hover:scale-105 hover:shadow-indigo-200 transition"
                  data-aos="zoom-in"
                  data-aos-delay={500 + idx * 100}
                >
                  <img
                    src={`https://i.pravatar.cc/100?img=${idx + 10}`}
                    alt={team}
                    className="mx-auto h-12 w-12 rounded-full object-cover shadow-sm"
                  />
                  <p className="mt-2 text-sm font-medium text-gray-700">
                    {team}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 
 