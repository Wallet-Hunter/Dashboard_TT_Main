import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { csv } from "d3-fetch";

// Import your individual graph components
import LineChart from "../LineChart";
import HeatMap from "../HeatMap";

const BotAnalyticsGraph = ({
  lineChartCsvFile, // CSV file for LineChart
  heatMapCsvFile,   // CSV file for HeatMap
  isExpanded,
}) => {
  const [lineChartData, setLineChartData] = useState([]);
  const [heatMapData, setHeatMapData] = useState([]);

  // Function to fetch and parse CSV data
  const fetchData = async (file, setData) => {
    try {
      const data = await csv(file);
      setData(data);
    } catch (error) {
      console.error(`Error fetching ${file}:`, error);
    }
  };

  useEffect(() => {
    fetchData(lineChartCsvFile, setLineChartData);
    fetchData(heatMapCsvFile, setHeatMapData);
  }, [lineChartCsvFile, heatMapCsvFile]);

  return (
    <Box sx={{ padding: 2, display: "flex", justifyContent: "flex-start", gap: 2 }}>
      {/* Line Chart */}
      <Card sx={{ height: "200px", width: "400px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <CardContent sx={{ textAlign: "center", padding: "8px", width: "100%", height: "100%" }}>
          <Typography variant="h6" gutterBottom>
            Line Chart
          </Typography>
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "center", height: "95%", width: "90%" }}>
            <LineChart data={lineChartData} /> {/* Pass parsed data for LineChart */}
          </Box>
        </CardContent>
      </Card>

      {/* HeatMap */}
      <Card sx={{ height: "200px", width: "400px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <CardContent sx={{ textAlign: "center", padding: "8px", width: "55%", height: "100%" }}>
          <Typography variant="h6" gutterBottom>
            Heat Map
          </Typography>
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "center", height: "140px" }}>
            <HeatMap data={heatMapData} /> {/* Pass parsed data for HeatMap */}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BotAnalyticsGraph;
