import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar los componentes necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PoblationBarChart = ({title, data, labels, xLabel, yLabel}) => {

  const grados = ["Muy alto", "Alto", "Medio", "Bajo", "Muy bajo"];
  const colores = {
      "Muy alto": "rgba(255, 99, 132, 0.8)",
      "Alto": "rgba(255, 159, 64, 0.8)",
      "Medio": "rgba(255, 205, 86, 0.8)",
      "Bajo": "rgba(75, 192, 192, 0.8)",
      "Muy bajo": "rgba(54, 162, 235, 0.8)"
  };

  const datasets = grados.map(grado => {
      return {
          label: grado,
          data: data.map(d => d.gradoMarginacion === grado ? d.POBTOT || 0 : 0),
          backgroundColor: colores[grado]
      };
  });

  const dataBar = {
    labels: labels, // Etiquetas de las barras
    datasets: datasets

  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: title,
      },
      tooltip: {
          callbacks: {
              label: function(context) {
                  return context.dataset.label + ': ' + context.raw;
              }
          }
      }
    },
    scales: {
        x: {
            title: {
                display: true,
                text: xLabel
            },
            stacked: true
        },
        y: {
            beginAtZero: true,
            title: {
                display: true,
                text: yLabel
            },
            stacked: true
        }
    }
  };

  return (
    <div>
      <Bar data={dataBar} options={options} />
    </div>
  );
};

export default PoblationBarChart;
