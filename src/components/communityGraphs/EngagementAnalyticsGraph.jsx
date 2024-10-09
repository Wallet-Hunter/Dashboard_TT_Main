import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { csv } from "d3-fetch";

// Import your individual graph components
import BarChart from "../BarChart";
import LineChart from "../LineChart";
import PieChart from "../PieChart";

const AnonymousAnalysisGraph = ({
  barChartCsvFile,
  lineChartCsvFile,
  pieChartCsvFile,
  isExpanded,
}) => {
  const [barChartData, setBarChartData] = useState([]);
  const [lineChartData, setLineChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);

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
    fetchData(barChartCsvFile, setBarChartData);
    fetchData(lineChartCsvFile, setLineChartData);
    fetchData(pieChartCsvFile, setPieChartData);
  }, [barChartCsvFile, lineChartCsvFile, pieChartCsvFile]);

  const graphCount = [barChartData, lineChartData, pieChartData].filter(data => data.length).length;

  return (
    <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', gap: 2, transition: "height 0.5s ease" }}>
      {graphCount === 2 && (
        <>
          {/* Bar Chart */}
          <Box sx={{ height: isExpanded ? "100%" : "200px", overflow: "hidden" }}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <Typography variant="h6" gutterBottom>
                  Bar Chart
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <BarChart data={barChartData} style={{ height: '100%', width: '100%' }} />
                </Box>
              </CardContent>
            </Card>
          </Box>
          {/* Line Chart */}
          <Box sx={{ height: isExpanded ? "100%" : "200px", overflow: "hidden" }}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <Typography variant="h6" gutterBottom>
                  Line Chart
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <LineChart data={lineChartData} style={{ height: '100%', width: '100%' }} />
                </Box>
              </CardContent>
            </Card>
          </Box>
        </>
      )}

      {graphCount === 3 && (
        <Box sx={{ display: 'flex', gap: 2, flexDirection: 'row', flexWrap: 'wrap' }}>
          {/* Bar Chart */}
          <Box sx={{ flex: 1, minWidth: '30%', height: isExpanded ? "100%" : "200px", overflow: "hidden" }}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <Typography variant="h6" gutterBottom>
                  Bar Chart
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <BarChart data={barChartData} style={{ height: '100%', width: '100%' }} />
                </Box>
              </CardContent>
            </Card>
          </Box>
          {/* Line Chart */}
          <Box sx={{ flex: 1, minWidth: '30%', height: isExpanded ? "100%" : "200px", overflow: "hidden" }}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <Typography variant="h6" gutterBottom>
                  Line Chart
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <LineChart data={lineChartData} style={{ height: '100%', width: '100%' }} />
                </Box>
              </CardContent>
            </Card>
          </Box>
          {/* Pie Chart */}
          <Box sx={{ flex: 1, minWidth: '30%', height: isExpanded ? "100%" : "200px", overflow: "hidden" }}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <Typography variant="h6" gutterBottom>
                  Pie Chart
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <PieChart data={pieChartData} style={{ height: '100%', width: '100%' }} />
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default AnonymousAnalysisGraph;
