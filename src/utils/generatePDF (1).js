async function generatePDF(inputFile) {
  const katex = require("katex");
  const puppeteer = require("puppeteer");
  const cheerio = require("cheerio");
  const jsonfile = require("jsonfile");
  const fs = require("fs");
  const path = require("path");

  const fileData = jsonfile.readFileSync(inputFile);
  const equations = fileData.data;

  let html = '<div class="page">';

  equations.forEach((equation, index) => {
    const latex = equation.question_html.match(/<code>(.*?)<\/code>/)[1];
    const htmlStr = katex.renderToString(latex);
    const $ = cheerio.load(htmlStr);
    $(".katex-html").remove();
    const outputHtml = $.html();
    const euqation_html = equation.question_html.replace(
      `<code>${latex}</code>`,
      outputHtml
    );
    html += '<div class="equation">' + euqation_html + "</div>";

    if ((index + 1) % 3 === 0) {
      html += '</div><div class="page">';
    }
  });

  html += "</div>";
  const css = `<style>
    .page {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      page-break-after: always;
    }
    .equation {
      flex: 1;
    }
    </style>`;

  const htmlFile = path.join(__dirname, "output.html");
  fs.writeFileSync(htmlFile, css + html);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("file://" + htmlFile, { waitUntil: "networkidle0" });

  const pdfFile = path.join(__dirname, "output.pdf");
  await page.pdf({ path: pdfFile, format: "A4", printBackground: true });

  await browser.close();

  return pdfFile;
}

module.exports = generatePDF;
