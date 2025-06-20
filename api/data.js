export default function handler(req, res) {
  const layoffsData = [
    { month: "May", year: 2025, number: 10397, sector: ["Tech"] },
    { month: "Apr", year: 2025, number: 24500, sector: ["Tech"] },
    { month: "Mar", year: 2025, number: 8834, sector: ["Tech"] },
    { month: "Feb", year: 2025, number: 16234, sector: ["Tech"] },
    { month: "Jan", year: 2025, number: 2403, sector: ["Tech"] }
  ];

  const opportunitiesData = [
    { month: "May", year: 2025, number: 220, sector: ["Tech", "Energy"] },
    { month: "Apr", year: 2025, number: 170, sector: ["Finance"] },
    { month: "Mar", year: 2025, number: 310, sector: ["Healthcare", "Logistics"] },
    { month: "Feb", year: 2025, number: 200, sector: ["Education"] },
    { month: "Jan", year: 2025, number: 3300, sector: ["Multi"] }
  ];

  res.status(200).json({ layoffsData, opportunitiesData });
}