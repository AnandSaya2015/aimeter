export default function handler(req, res) {
  const layoffsData = [
    { month: "Jan", year: 2024, number: 200, sector: "Tech" },
    { month: "Feb", year: 2024, number: 150, sector: "Finance" },
    { month: "Mar", year: 2024, number: 300, sector: "Healthcare" },
    { month: "Apr", year: 2024, number: 180, sector: "Education" },
    { month: "May", year: 2024, number: 250, sector: "Retail" }
  ];

  const opportunitiesData = [
    { month: "Jan", year: 2024, number: 220, sector: "Tech" },
    { month: "Feb", year: 2024, number: 170, sector: "Finance" },
    { month: "Mar", year: 2024, number: 310, sector: "Healthcare" },
    { month: "Apr", year: 2024, number: 200, sector: "Education" },
    { month: "May", year: 2024, number: 270, sector: "Retail" }
  ];

  res.status(200).json({ layoffsData, opportunitiesData });
}