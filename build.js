const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

const viewsDir = path.join(__dirname, 'views');
const outputDir = path.join(__dirname, 'public'); // This is where the static files will go

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Render the EJS files to HTML
fs.readdir(viewsDir, (err, files) => {
  if (err) throw err;

  files.forEach(file => {
    if (path.extname(file) === '.ejs') {
      const filePath = path.join(viewsDir, file);
      ejs.renderFile(filePath, {}, (err, str) => {
        if (err) throw err;
        fs.writeFileSync(path.join(outputDir, file.replace('.ejs', '.html')), str);
      });
    }
  });
});
