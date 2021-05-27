import React from "react"
import { Bar } from "@reactchartjs/react-chart.js"

const data = {
  labels: [
    "Node/express",
    "React + React Native",
    "MongoDB",
    "Flutter",
    "SQL",
    "Scrum",
    "Teamwork",
  ],
  datasets: [
    {
      label: "Current Skills",
      data: [9, 9, 8, 5, 7, 9, 8],
      backgroundColor: [
        "rgba(231, 90, 124, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(241, 113, 5, 0.2)",
        "rgba(149, 178, 184, 0.2)",
        "rgba(125, 132, 178, 0.2)",
        "rgba(102, 199, 244, 0.2)",
        "rgba(9, 188, 138, 0.2)",
      ],
      borderColor: [
        "rgba(231, 90, 124, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(241, 113, 5, 1)",
        "rgba(149, 178, 184, 1)",
        "rgba(125, 132, 178, 1)",
        "rgba(102, 199, 244, 1)",
        "rgba(9, 188, 138, 1)",
      ],
      borderWidth: 1,
    },

    {
      label: "Goal",
      data: [10, 10, 10, 9, 8, 9, 10],
      backgroundColor: [
        "rgba(231, 90, 124, 0.8)",
        "rgba(54, 162, 235, 0.8)",
        "rgba(241, 113, 5, 1)",
        "rgba(149, 178, 184, 0.8)",
        "rgba(125, 132, 178, 0.8)",
        "rgba(102, 199, 244, 0.8)",
        "rgba(9, 188, 138, 0.8)",
      ],
      borderWidth: 1,
    },
  ],
}

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

export default function Chart() {
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  )
}
