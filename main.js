var downloadBtn = document.getElementById("downloadBtn");

if (downloadBtn) {
  downloadBtn.addEventListener("click", function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF("p", "mm", "a4");

    var tableElement = document.querySelector("#myTable");

    if (tableElement) {
      html2canvas(tableElement).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        doc.addImage(imgData, "PNG", 10, 10, 190, 0);
        doc.save("table.pdf");
      });
    } else {
      console.warn("العنصر #myTable غير موجود في الصفحة.");
    }
  });
} else {
  console.warn("العنصر #downloadBtn غير موجود في الصفحة.");
}
