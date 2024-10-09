import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// Hardcoded data for the leaderboard
const leaderboardData = [
  { userId: 1, userName: 'Alice', messageCount: 1200 },
  { userId: 2, userName: 'Bob', messageCount: 1150 },
  { userId: 3, userName: 'Charlie', messageCount: 900 },
  { userId: 4, userName: 'David', messageCount: 800 },
  { userId: 5, userName: 'Eve', messageCount: 750 },
  { userId: 6, userName: 'Frank', messageCount: 700 },
  { userId: 7, userName: 'Grace', messageCount: 650 },
  { userId: 8, userName: 'Heidi', messageCount: 600 },
  { userId: 9, userName: 'Ivan', messageCount: 550 },
  { userId: 10, userName: 'Judy', messageCount: 500 },
];

const Leaderboard = () => {
  // Ensure data is sorted and limited to top N users (e.g., top 10)
  const topUsers = leaderboardData
    .sort((a, b) => b.messageCount - a.messageCount) // Sorting by messageCount
    .slice(0, 10); // Display top 10 users

  // Custom styles for rank highlighting
  const getRowStyle = (index) => {
    switch (index) {
      case 0:
        return { backgroundColor: '#FFD700' }; // Gold for 1st
      case 1:
        return { backgroundColor: '#C0C0C0' }; // Silver for 2nd
      case 2:
        return { backgroundColor: '#CD7F32' }; // Bronze for 3rd
      default:
        return {};
    }
  };

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Top Users
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>User</TableCell>
              <TableCell align="right">Messages</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {topUsers.map((user, index) => (
              <TableRow 
                key={user.userId} 
                sx={{
                  ...getRowStyle(index), // Apply custom row styles for top 3 users
                  '&:hover': {
                    backgroundColor: '#f5f5f5', // Hover effect for all rows
                    cursor: 'pointer',
                  },
                }}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{user.userName}</TableCell>
                <TableCell align="right">{user.messageCount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Leaderboard;
