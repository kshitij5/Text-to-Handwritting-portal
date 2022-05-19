function changeFont() {
  var font = document.getElementById("handwriting-font").value;
  document.body.style.setProperty("--handwriting-font", font);
  return false;
}

function changeSize() {
  var size = document.getElementById("font-size").value;
  document.body.style.setProperty("--font-size", size + "pt");
  return false;
}

function changeColor() {
  var color = document.getElementById("ink-color").value;
  document.body.style.setProperty("--ink-color", color);
  return false;
}

function generateImage() {
  console.log("Generating image...");
  html2canvas(document.getElementById("note")).then(function (canvas) {
    document.getElementById("output-list").appendChild(canvas);
  });
}

function clearImage() {
  console.log("clearing image...");
  var output = document.getElementById("output-list");
  output.removeChild(output.lastElementChild);
}
// html2canvas(document.body).then(function (canvas) {
//   // Export canvas as a blob
//   canvas.toBlob(function (blob) {
//     // Generate file download
//     window.saveAs(blob, "yourwebsite_screenshot.png");
//   });
// });
