import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { csv } from "d3-fetch";

// Import your individual graph components
import BarChart from "../BarChart";
import LineChart from "../LineChart";
import PieChart from "../PieChart";

const EventAnalysisGraph = ({
  eventBarChartCsvFile,
  eventLineChartCsvFile,
  eventPieChartCsvFile,
  isExpanded,
}) => {
  const [eventBarChartData, setEventBarChartData] = useState([]);
  const [eventLineChartData, setEventLineChartData] = useState([]);
  const [eventPieChartData, setEventPieChartData] = useState([]);

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
    fetchData(eventBarChartCsvFile, setEventBarChartData);
    fetchData(eventLineChartCsvFile, setEventLineChartData);
    fetchData(eventPieChartCsvFile, setEventPieChartData);
  }, [eventBarChartCsvFile, eventLineChartCsvFile, eventPieChartCsvFile]);

  const graphCount = [eventBarChartData, eventLineChartData, eventPieChartData].filter(data => data.length).length;

  return (
    <Box sx={{ padding: 2, transition: "height 0.5s ease" }}>
      <Box display="flex" flexWrap="wrap" gap={2}>
        {graphCount === 2 && (
          <>
            {/* Bar Chart */}
            <Box width="100%" sx={{ flexGrow: 1 }}>
              <Card sx={{ height: isExpanded ? "100%" : "200px", overflow: "hidden" }}>
                <CardContent sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <Typography variant="h6" gutterBottom>
                    Event Bar Chart
                  </Typography>
                  <Box sx={{ flexGrow: 1 }}>
                    <BarChart data={eventBarChartData} style={{ height: '100%', width: '100%' }} />
                  </Box>
                </CardContent>
              </Card>
            </Box>
            {/* Line Chart */}
            <Box width="100%" sx={{ flexGrow: 1 }}>
              <Card sx={{ height: isExpanded ? "100%" : "200px", overflow: "hidden" }}>
                <CardContent sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <Typography variant="h6" gutterBottom>
                    Event Engagement Line Chart
                  </Typography>
                  <Box sx={{ flexGrow: 1 }}>
                    <LineChart data={eventLineChartData} style={{ height: '100%', width: '100%' }} />
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </>
        )}

        {graphCount === 3 && (
          <>
            {/* Bar Chart */}
            <Box width="32%" sx={{ flexGrow: 1 }}>
              <Card sx={{ height: isExpanded ? "100%" : "200px", overflow: "hidden" }}>
                <CardContent sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <Typography variant="h6" gutterBottom>
                    Event Bar Chart
                  </Typography>
                  <Box sx={{ flexGrow: 1 }}>
                    <BarChart data={eventBarChartData} style={{ height: '100%', width: '100%' }} />
                  </Box>
                </CardContent>
              </Card>
            </Box>
            {/* Line Chart */}
            <Box width="32%" sx={{ flexGrow: 1 }}>
              <Card sx={{ height: isExpanded ? "100%" : "200px", overflow: "hidden" }}>
                <CardContent sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <Typography variant="h6" gutterBottom>
                    Event Engagement Line Chart
                  </Typography>
                  <Box sx={{ flexGrow: 1 }}>
                    <LineChart data={eventLineChartData} style={{ height: '100%', width: '100%' }} />
                  </Box>
                </CardContent>
              </Card>
            </Box>
            {/* Pie Chart */}
            <Box width="32%" sx={{ flexGrow: 1 }}>
              <Card sx={{ height: isExpanded ? "100%" : "200px", overflow: "hidden" }}>
                <CardContent sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <Typography variant="h6" gutterBottom>
                    Event Feedback Pie Chart
                  </Typography>
                  <Box sx={{ flexGrow: 1 }}>
                    <PieChart data={eventPieChartData} style={{ height: '100%', width: '100%' }} />
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default EventAnalysisGraph;
