export default function handler(req, res) {
  const layoffsData = [
    { month: "May", year: 2025, number: 200, sector: ["Tech", "Retail"] },
    { month: "Apr", year: 2025, number: 150, sector: ["Finance"] },
    { month: "Mar", year: 2025, number: 300, sector: ["Healthcare", "Education"] },
    { month: "Feb", year: 2025, number: 180, sector: ["Education"] },
    { month: "Jan", year: 2025, number: 250, sector: ["Retail", "Manufacturing"] }
  ];

  const opportunitiesData = [
    { month: "May", year: 2025, number: 220, sector: ["Tech", "Energy"] },
    { month: "Apr", year: 2025, number: 170, sector: ["Finance"] },
    { month: "Mar", year: 2025, number: 310, sector: ["Healthcare", "Logistics"] },
    { month: "Feb", year: 2025, number: 200, sector: ["Education"] },
    { month: "Jan", year: 2025, number: 270, sector: ["Retail", "Transportation"] }
  ];

  res.status(200).json({ layoffsData, opportunitiesData });
}