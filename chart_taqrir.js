var chartElement = document.getElementById("areaChart");

if (chartElement) {
  var ctx = chartElement.getContext("2d");
  var areaChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "يناير",
        "فبراير",
        "مارس",
        "ابريل",
        "مايو",
        "يونيو",
        "يوليو",
        "اغسطس",
        "سبتمبر",
        "اكتوبر",
        "نوفمبر",
        "ديسمبر",
      ],
      datasets: [
        {
          label: "Data 1",
          data: [70, 65, 75, 85, 70, 75, 66, 75, 65, 60, 55, 70],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgb(75, 192, 192)",
          fill: true,
        },
      ],
    },
  });
}
