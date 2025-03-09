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


let checkbox = document.getElementById("guarantorCheckbox");
let fields = document.getElementById("guarantorFields");

if (checkbox && fields) {
    checkbox.addEventListener("change", function () {
        fields.style.display = this.checked ? "block" : "none";
    });
}
