import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StackedBar1 = () => {
    const themeColors = [
        "#45e8ed", // Color for Active members
        "#0b4a4c", // Color for Inactive members
    ];

    // Hardcoded data for Active vs Inactive members
    const fullDateLabels = ['2024-10-01', '2024-10-02', '2024-10-03', '2024-10-04', '2024-10-05'];

    // Extracting just the day part (1, 2, 3, ...) from the dates
    const dayLabels = fullDateLabels.map(date => new Date(date).getDate());

    const hardcodedData = {
        labels: dayLabels, // Using just the day part as labels
        datasets: [
            {
                label: 'Active Members',
                data: [30, 45, 25, 40, 35], // Hardcoded active members data
                backgroundColor: themeColors[0],
            },
            {
                label: 'Inactive Members',
                data: [15, 10, 20, 5, 10], // Hardcoded inactive members data
                backgroundColor: themeColors[1],
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Allow chart to fill its container
        scales: {
            x: {
                stacked: true, // Ensure stacking on x-axis
                title: {
                    display: true,
                    text: 'Day',
                    font: {
                        size: 14,
                    },
                },
                ticks: {
                    font: {
                        size: 12,
                    },
                },
            },
            y: {
                stacked: true, // Ensure stacking on y-axis
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Count',
                    font: {
                        size: 14,
                    },
                },
                ticks: {
                    font: {
                        size: 12,
                    },
                },
            },
        },
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 12,
                    },
                },
            },
            title: {
                display: true,
                text: 'Active vs Inactive Members',
                font: {
                    size: 16,
                },
            },
        },
    };

    return (
        <div style={{ width: '100%', height: '230px', position: 'relative' }}>
            {/* Setting a specific height for the chart */}
            <div style={{ width: '100%', height: '100%' }}>
                <Bar data={hardcodedData} options={options} />
            </div>
        </div>
    );
};

export default StackedBar1;
