import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar los componentes necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({title, typeOfValue, labels, data_to_show, xLabel, yLabel, color}) => {

  const data = {
    labels: labels, // Etiquetas de las barras
    datasets: [
      {
        label: typeOfValue, // Etiqueta del conjunto de datos
        data: data_to_show, // Datos de las barras
        backgroundColor: color, // Color de las barras
        borderColor: color, // Color del borde de las barras
        borderWidth: 1,
      },
    ],

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
            return `${typeOfValue}: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      y: {
        title: {
            display: true,
            text: yLabel, // Etiqueta del eje Y
        },
      },
        x: {
            title: {
                display: true,
                text: xLabel, // Etiqueta del eje X
            },
        },
    },

  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
