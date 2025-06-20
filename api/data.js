export default function handler(req, res) {
  const layoffsData = [
    { month: "May", year: 2025, number: 10397, sector: ["Tech"] },
    { month: "Apr", year: 2025, number: 24500, sector: ["Tech"] },
    { month: "Mar", year: 2025, number: 8834, sector: ["Tech"] },
    { month: "Feb", year: 2025, number: 16234, sector: ["Tech"] },
    { month: "Jan", year: 2025, number: 2403, sector: ["Tech"] }
  ];

  const opportunitiesData = [
    { month: "May", year: 2025, number: 20000, sector: ["Multi"] },
    { month: "Apr", year: 2025, number: 18500, sector: ["Multi"] },
    { month: "Mar", year: 2025, number: 17000, sector: ["Multi"] },
    { month: "Feb", year: 2025, number: 16084, sector: ["Multi"] },
    { month: "Jan", year: 2025, number: 17000, sector: ["Multi"] }
  ];

  res.status(200).json({ layoffsData, opportunitiesData });
}