const ctx1 = document.getElementById("accountingChart").getContext("2d");
new Chart(ctx1, {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "الإيرادات",
        data: [5000, 6000, 7000, 8000, 9000, 10000],
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
      {
        label: "المصروفات",
        data: [3000, 4000, 3500, 4500, 5000, 6000],
        borderColor: "#348cc9",
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const ctx2 = document.getElementById("salesDistributionChart").getContext("2d");
new Chart(ctx2, {
  type: "pie",
  data: {
    labels: ["الارباح", "العملاء", "التوريدات", "الاقساط"],
    datasets: [
      {
        data: [40, 30, 20, 10],
        backgroundColor: [
          "#1c2230",
          "rgba(54, 162, 235, 0.8)",
          "#eff1f3",
          "rgba(75, 192, 192, 0.8)",
        ],
        borderColor: [
          "#1c2230",
          "rgba(54, 162, 235, 1)",
          "#eff1f3",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 2,
        hoverOffset: 10,
        shadowOffsetX: 3,
        shadowOffsetY: 3,
        shadowBlur: 10,
        shadowColor: "rgba(0, 0, 0, 0.3)",
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 14,
            family: "Arial",
          },
          color: "#333",
        },
      },
      tooltip: {
        enabled: true,
        bodyFont: {
          size: 14,
        },
        titleFont: {
          size: 16,
        },
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  },
});

const ctx3 = document.getElementById("doughnutChart").getContext("2d");
new Chart(ctx3, {
  type: "doughnut",
  data: {
    labels: ["الخزنة", "المصروفات", "المخزون", "المشتريات"],
    datasets: [
      {
        data: [55, 25, 15, 10],
        backgroundColor: [
          "#1c2230",
          "rgba(54, 162, 235, 0.8)",
          "#eff1f3",
          "rgba(75, 192, 192, 0.8)",
        ],
        borderColor: [
          "#1c2230",
          "rgba(54, 162, 235, 1)",
          "#eff1f3",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 2,
        hoverOffset: 10,
        shadowOffsetX: 3,
        shadowOffsetY: 3,
        shadowBlur: 10,
        shadowColor: "rgba(0, 0, 0, 0.3)",
      },
    ],
  },
  options: {
    responsive: true,
    cutout: "60%",
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 14,
            family: "Arial",
          },
          color: "#333",
        },
      },
      tooltip: {
        enabled: true,
        bodyFont: {
          size: 14,
        },
        titleFont: {
          size: 16,
        },
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  },
});
