$(document).ready(function () {
  $("#Asas").click(function (e) {
    e.stopPropagation();
    $("#asas_list").slideToggle(500);
    $("#asas_list2").slideUp(500);
    $("#asas_list3").slideUp(500);
  });
  $("#Asas2").click(function (h) {
    h.stopPropagation();
    $("#asas_list2").slideToggle(500);
    $("#asas_list3").slideUp(500);
    $("#asas_list").slideUp(500);
  });
  $("#Asas3").click(function (h) {
    h.stopPropagation();
    $("#asas_list3").slideToggle(500);
    $("#asas_list2").slideUp(500);
    $("#asas_list").slideUp(500);
  });
// =========================================
$("#Asas4").click(function (e) {
  e.stopPropagation();
  $("#asas_list4").slideToggle(500);
  $("#asas_list5").slideUp(500);
  $("#asas_list6").slideUp(500);
});
$("#Asas5").click(function (h) {
  h.stopPropagation();
  $("#asas_list5").slideToggle(500);
  $("#asas_list6").slideUp(500);
  $("#asas_list4").slideUp(500);
});
$("#Asas6").click(function (h) {
  h.stopPropagation();
  $("#asas_list6").slideToggle(500);
  $("#asas_list5").slideUp(500);
  $("#asas_list4").slideUp(500);
});




// =================================================
  $(document).click(function () {
    $("#asas_list").slideUp(500);
  });
  $(document).click(function () {
    $("#asas_list2").slideUp(500);
  });
  $(document).click(function () {
    $("#asas_list3").slideUp(500);
  });
// =================================================
$(document).click(function () {
  $("#asas_list4").slideUp(500);
});
$(document).click(function () {
  $("#asas_list5").slideUp(500);
});
$(document).click(function () {
  $("#asas_list6").slideUp(500);
});


  let rotated = false;
  $(".rotate").on("click", function (event) {
    $(".triangle2").css("transform", "rotate(0deg)");
    $(".triangle3").css("transform", "rotate(0deg)");
    event.stopPropagation();
    var $this1 = $(".triangle");
    if (rotated) {
      $this1.css("transform", "rotate(0deg)");
    } else {
      $this1.css("transform", "rotate(90deg)");
    }
    rotated = !rotated;
  });
  $(document).on("click", function () {
    $(".triangle").css("transform", "rotate(0deg)");
    rotated = false;
  });

  let rotated2 = false;
  $(".rotate2").on("click", function (event) {
    $(".triangle").css("transform", "rotate(0deg)");
    $(".triangle3").css("transform", "rotate(0deg)");
    event.stopPropagation();
    var $this2 = $(".triangle2");
    if (rotated2) {
      $this2.css("transform", "rotate(0deg)");
    } else {
      $this2.css("transform", "rotate(90deg)");
    }
    rotated2 = !rotated2;
  });
  $(document).on("click", function () {
    $(".triangle2").css("transform", "rotate(0deg)");
    rotated2 = false;
  });

  let rotated3 = false;
  $(".rotate3").on("click", function (event) {
    $(".triangle").css("transform", "rotate(0deg)");
    $(".triangle2").css("transform", "rotate(0deg)");
    event.stopPropagation();
    var $this3 = $(".triangle3");
    if (rotated3) {
      $this3.css("transform", "rotate(0deg)");
    } else {
      $this3.css("transform", "rotate(90deg)");
    }
    rotated3 = !rotated3;
  });
  $(document).on("click", function () {
    $(".triangle3").css("transform", "rotate(0deg)");
    rotated3 = false;
  });
  


  $(document).ready(function () {
    // تفعيل الـ Datepicker لتاريخ البداية
    $("#startDate").datepicker({
      format: "yyyy-mm-dd",
      todayBtn: "linked",
      autoclose: true,
      language: "ar",
      clearBtn: true,
      orientation: "bottom auto", 
    });
    $("#endDate").datepicker({
      format: "yyyy-mm-dd",
      todayBtn: "linked",
      autoclose: true,
      language: "ar",
      clearBtn: true,
      orientation: "bottom auto",
    });
  });




  $(".clint").on("click", function () {
    var selectedClient2 = $(this).data("value");
    $("#selectClient").val(selectedClient2);
    $("#clientsModal").modal("hide");
  });

  $(".qsit").on("click", function () {
    var selectedPaymentMethod = $(this).data("value");
    $("#selectPaymentMethod").val(selectedPaymentMethod);
    $("#paymentMethodModal").modal("hide");
  });

  $(".option").on("click", function () {
    var selectedValue = $(this).data("value");
    $("#selectInput").val(selectedValue);
    $("#optionsModal").modal("hide");
  });
  $(".taqsit").on("click", function () {
    var selectedInstallment = $(this).data("value");
    $("#selectInstallment").val(selectedInstallment);
    $("#installmentsModal").modal("hide");
    if (selectedInstallment === "سيارات") {
      $("#carDetailsContainer").slideDown(500);
    } else {
      $("#carDetailsContainer").slideUp(500);
    }
    if (selectedInstallment === "قرض مالي") {
      $("#qardDetailsContainer").slideDown(500);
    } else {
      $("#qardDetailsContainer").slideUp(500);
    }
    if (selectedInstallment === "تقسيط سلعة") {
      $("#selaaDetailsContainer").slideDown(500);
    } else {
      $("#selaaDetailsContainer").slideUp(500);
    }
    if (selectedInstallment === "تقسيط سلعة مخزنة") {
      $("#maghzanDetailsContainer").slideDown(500);
    } else {
      $("#maghzanDetailsContainer").slideUp(500);
    }
  });

  $("#table-container").on("scroll", function () {
    const scrollTop = $(this).scrollTop();
    $("#table-header").css("transform", "translateY(" + scrollTop + "px)");
  });

 
  $(".no3").on("click", function () {
    var no3 = $(this).data("value");
    $("#no3_El_Qst").val(no3);
    $("#All_qst").modal("hide");
  });
  $(".no3").on("click", function () {
    var no3 = $(this).data("value");
    $("#no3_El_Tawrid").val(no3);
    $("#Tawrid").modal("hide");
  });
  
  $(".no3").on("click", function () {
    var no3 = $(this).data("value");
    $("#no3_El_Khazna").val(no3);
    $("#Khazna").modal("hide");
  });

  $(".time_li").click(function () {
    $(".time").slideDown(200);
    $(".btns").slideDown(200);
  });
  $(".out_time").click(function () {
    $(".time").slideUp(200);
  });
  $(".client_li").click(function () {
    $(".client").slideDown(200);
    $(".btns").slideDown(200);
  });
  $(".out_client").click(function () {
    $(".client").slideUp(200);
  });
  $(".with_out").click(function () {
    $(".client").slideUp(200);
    $(".time").slideUp(200);
    $(".btns").slideUp(200);
  });

  window.onload = function () {
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
            borderColor: "#1c2230",
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

    const ctx2 = document
      .getElementById("salesDistributionChart")
      .getContext("2d");
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
  };

  var ctx = document.getElementById("areaChart").getContext("2d");
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
});





document.getElementById("guarantorCheckbox").addEventListener("change", function () {
    document.getElementById("guarantorFields").style.display = this.checked? "block": "none";
  });



  document.getElementById('sidebar').addEventListener('hidden.bs.offcanvas', function () {
    document.activeElement.blur(); // إزالة التركيز من أي عنصر نشط
});
