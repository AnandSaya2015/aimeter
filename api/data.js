export default function handler(req, res) {
  const layoffsData = [
    { month: "Aug", year: 2025, number: 85979, sector: ["Multiple"] },
    { month: "Jul", year: 2025, number: 62075, sector: ["Multiple"] },
    { month: "Jun", year: 2025, number: 10000, sector: ["Multiple"] },
    { month: "May", year: 2025, number: 10397, sector: ["Multiple"] },
    { month: "Apr", year: 2025, number: 24500, sector: ["Multiple"] },
    { month: "Mar", year: 2025, number: 8834, sector: ["Multiple"] },
    { month: "Feb", year: 2025, number: 16234, sector: ["Multiple"] },
    { month: "Jan", year: 2025, number: 2403, sector: ["Multiple"] }
  ];

  const opportunitiesData = [
    { month: "Aug", year: 2025, number: 22000, sector: ["Multiple"] },
    { month: "Jul", year: 2025, number: 79000, sector: ["Multiple"] },
    { month: "Jun", year: 2025, number: 21500, sector: ["Multiple"] },
    { month: "May", year: 2025, number: 20000, sector: ["Multiple"] },
    { month: "Apr", year: 2025, number: 18500, sector: ["Multiple"] },
    { month: "Mar", year: 2025, number: 17000, sector: ["Multiple"] },
    { month: "Feb", year: 2025, number: 16084, sector: ["Multiple"] },
    { month: "Jan", year: 2025, number: 17000, sector: ["Multiple"] }
  ];

  res.status(200).json({ layoffsData, opportunitiesData });
}