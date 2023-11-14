const generatePDF = require("./generatePDF.js");

generatePDF("./input.json")
  .then((pdfFile) => console.log("PDF generated:", pdfFile))
  .catch((e) => console.log(e));
