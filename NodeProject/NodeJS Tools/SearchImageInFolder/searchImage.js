const fs = require('fs');
const path = require('path');

function searchFilesByExtension(directory, extension, fileList = []) {
  const files = fs.readdirSync(directory);

  files.forEach(file => {                                 //check từng phần tử trong directory
    const filePath = path.join(directory, file);
    const checkFile = fs.statSync(filePath);

    if (checkFile.isDirectory()) {
      searchFilesByExtension(filePath, extension, fileList); // (Đệ quy)
    } 
    else if (path.extname(file) === `.${extension}`) {
      fileList.push(filePath);
    }
  });

  return fileList;
}   
const directoryToSearch = './basics';
const pngFiles = searchFilesByExtension(directoryToSearch, 'png');
const jpgFiles = searchFilesByExtension(directoryToSearch, 'jpg');
const imageFiles = pngFiles.concat(jpgFiles);
// console.log('Image Files:', pngFiles, jpgFiles);
console.log('Image Files:', imageFiles);
