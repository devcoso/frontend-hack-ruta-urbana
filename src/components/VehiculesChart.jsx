import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar los componentes necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const VehiculesChart = ({ title, data, xLabel, yLabel }) => {

  // Crear etiquetas para las áreas
  const labels = data.map(item => item.area);

  // Crear datasets para cada tipo de vivienda con los colores respectivos
  const datasets = [
    {
      label: 'Viviendas con Auto',
      data: data.map(item => item.viviendasConAuto),
      backgroundColor: 'rgba(255, 99, 132, 0.8)',
    },
    {
      label: 'Viviendas con Moto',
      data: data.map(item => item.viviendasConMoto),
      backgroundColor: 'rgba(255, 159, 64, 0.8)',
    },
    {
      label: 'Viviendas con Bici',
      data: data.map(item => item.viviendasConBici),
      backgroundColor: 'rgba(255, 205, 86, 0.8)',
    }
  ];

  const dataBar = {
    labels: labels,
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
          label: function (context) {
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

export default VehiculesChart;