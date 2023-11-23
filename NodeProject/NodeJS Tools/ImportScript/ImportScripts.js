const fs = require('fs');
const path = require('path');

function searchFilesByExtension(directory, extension, fileList = []) {
  const files = fs.readdirSync(directory);

  files.forEach(file => {
    const filePath = path.join(directory, file);
    const checkFile = fs.statSync(filePath);

    if (checkFile.isDirectory()) {
      searchFilesByExtension(filePath, extension, fileList);
    } else if (path.extname(file).toLowerCase() === `.${extension.toLowerCase()}`) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

function createIndexFile(files) {
  const srcPath = path.join(__dirname, 'src');
  const indexPath = path.join(__dirname, 'index.js');

  const jsFiles = files || searchFilesByExtension(srcPath, 'js');
  const jsImports = jsFiles.map(file => `import './${file}';`).join('\n');
  const indexText = `${jsImports}`;
  fs.writeFileSync(indexPath, indexText);

  console.log('index has been created');
}

const directoryToSearch = './src';
const jsFiles = searchFilesByExtension(directoryToSearch, 'js');
createIndexFile(jsFiles);
