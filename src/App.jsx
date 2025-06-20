import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Helmet } from "react-helmet";
import { Analytics } from "@vercel/analytics/react";
import "./index.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const App = () => {
  const [layoffsData, setLayoffsData] = useState([]);
  const [opportunitiesData, setOpportunitiesData] = useState([]);
  const [showGraph, setShowGraph] = useState(false);
  const [views, setViews] = useState(null);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => {
        setLayoffsData(data.layoffsData);
        setOpportunitiesData(data.opportunitiesData);
      })
      .catch((err) => console.error("Failed to fetch data:", err));
  }, []);

  useEffect(() => {
    fetch("/api/views")
      .then((res) => res.json())
      .then((data) => setViews(data.views || 0))
      .catch((err) => console.error("Failed to fetch views:", err));
  }, []);

  const months = layoffsData.map((entry) => `${entry.month} ${entry.year}`);

  const chartData = {
    labels: months,
    datasets: [
      {
        label: "AI Driven Layoffs",
        data: layoffsData.map((entry) => entry.number),
        backgroundColor: "#F97316",
      },
      {
        label: "AI Driven Opportunities",
        data: opportunitiesData.map((entry) => entry.number),
        backgroundColor: "#10B981",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { labels: { color: "white" } },
      title: {
        display: true,
        text: "Monthly Comparison",
        color: "white",
        font: { size: 18 },
      },
    },
    scales: {
      x: { ticks: { color: "white" } },
      y: { ticks: { color: "white" } },
    },
  };

  const renderSector = (sector) => {
    if (Array.isArray(sector)) {
      return (
        <div>
          {sector.map((s, i) => (
            <div key={i}>{s}</div>
          ))}
        </div>
      );
    }
    return sector;
  };

  return (
    <>
      <Helmet>
        <title>AI METER – Tracking AI-Driven Layoffs and Opportunities</title>
        <meta
          name="description"
          content="AI METER tracks monthly data on AI-driven layoffs and opportunities to promote transparency and awareness in the workforce."
        />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="AI METER – Tracking AI-Driven Layoffs and Opportunities" />
        <meta
          property="og:description"
          content="Explore monthly data on AI-driven layoffs and opportunities across sectors. Stay informed about AI's impact on the workforce."
        />
        <meta property="og:image" content="https://aimeter.fyi/og-image.png" />
        <meta property="og:url" content="https://aimeter.fyi" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI METER – Tracking AI-Driven Layoffs and Opportunities" />
        <meta name="twitter:description" content="Monthly data on AI-driven layoffs and job opportunities. Stay informed." />
        <meta name="twitter:image" content="https://aimeter.fyi/og-image.png" />
      </Helmet>

      <div className="min-h-screen bg-black text-white font-sans relative">
        {views !== null && (
          <div className="absolute top-20 right-6 text-white text-sm font-medium">
            👁️ Total Views: {views.toLocaleString()}
          </div>
        )}
        <header className="text-center py-6">
          <h1 className="text-5xl font-bold font-[Cinzel]">AI METER</h1>
          <p className="text-2xl mt-2 text-pink-400 font-semibold">
            Tracking AI Driven Layoffs Vs Opportunities
          </p>
        </header>

        <div className="flex flex-col lg:flex-row justify-center items-start gap-8 px-4 lg:px-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-center text-white text-2xl font-semibold mb-4">AI Driven Layoffs</h2>
            <table className="w-full table-auto border-collapse border border-yellow-400">
              <thead>
                <tr className="bg-yellow-400 text-black">
                  <th className="border border-yellow-400 px-4 py-2">Month</th>
                  <th className="border border-yellow-400 px-4 py-2">Year</th>
                  <th className="border border-yellow-400 px-4 py-2">Number</th>
                  <th className="border border-yellow-400 px-4 py-2">Sector</th>
                </tr>
              </thead>
              <tbody>
                {layoffsData.map((entry, index) => (
                  <tr key={index}>
                    <td className="border border-yellow-400 px-4 py-2">{entry.month}</td>
                    <td className="border border-yellow-400 px-4 py-2">{entry.year}</td>
                    <td className="border border-yellow-400 px-4 py-2">{entry.number}</td>
                    <td className="border border-yellow-400 px-4 py-2">{renderSector(entry.sector)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-center text-white text-2xl font-semibold mb-4">AI Driven Opportunities</h2>
            <table className="w-full table-auto border-collapse border border-yellow-400">
              <thead>
                <tr className="bg-yellow-400 text-black">
                  <th className="border border-yellow-400 px-4 py-2">Month</th>
                  <th className="border border-yellow-400 px-4 py-2">Year</th>
                  <th className="border border-yellow-400 px-4 py-2">Number</th>
                  <th className="border border-yellow-400 px-4 py-2">Sector</th>
                </tr>
              </thead>
              <tbody>
                {opportunitiesData.map((entry, index) => (
                  <tr key={index}>
                    <td className="border border-yellow-400 px-4 py-2">{entry.month}</td>
                    <td className="border border-yellow-400 px-4 py-2">{entry.year}</td>
                    <td className="border border-yellow-400 px-4 py-2">{entry.number}</td>
                    <td className="border border-yellow-400 px-4 py-2">{renderSector(entry.sector)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowGraph(!showGraph)}
            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-300 transition"
          >
            {showGraph ? "Hide Graph" : "View Graph"}
          </button>
        </div>

        {showGraph && (
          <div className="mt-10 px-4 lg:px-32">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <Bar data={chartData} options={chartOptions} />
            </div>
          </div>
        )}

        <footer className="mt-12 px-4 lg:px-32 text-sm text-white pb-16 lg:pb-20">
          <h2 className="text-lg font-semibold mb-2">About This Dashboard</h2>
          <ul className="list-none space-y-1">
            <li>🚀 AI METER was created as a social initiative to promote awareness of AI-driven employment trends.</li>
            <li>🚀 The dataset is refreshed monthly.</li>
            <li>🚀 The dataset is limited to the United States for now.</li>
            <li>🚀 We rely solely on third-party sources for data collection. As such, there may be instances of missing data due to limited transparency, availability, or other unforeseen circumstances.</li>
            <li>🚀 To suggest improvements or submit data, contact us at: <span className="text-yellow-400">tips@aimeter.fyi</span></li>
          </ul>
        </footer>

        <Analytics />
      </div>
    </>
  );
};

export default App;