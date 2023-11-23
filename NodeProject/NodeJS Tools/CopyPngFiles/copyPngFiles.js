const fs = require('fs');
const path = require('path');

function searchFilesByExtension(directory, extension, fileList = []) {
    const files = fs.readdirSync(directory);
  
    files.forEach(file => {                                
      const filePath = path.join(directory, file);
      const checkFile = fs.statSync(filePath);
  
      if (checkFile.isDirectory()) {
        searchFilesByExtension(filePath, extension, fileList); 
      } 
      else if (path.extname(file) === `.${extension}`) {
        fileList.push(filePath);
      }
    });
  
    return fileList;
  }   
  function copyPngFiles(sourceFolder, folderToCopy) {
    const pngFiles = searchFilesByExtension(sourceFolder, 'png');
    pngFiles.forEach(pngFile => {
      const fileName = path.basename(pngFile);
      const destinationPath = path.join(folderToCopy, fileName);
      fs.copyFileSync(pngFile, destinationPath);
  
      console.log(`Copied ${fileName} to ${folderToCopy}`);
    });
  }
  
  const sourceFolder = './basics'; 
  const folderToCopy = './NodeJS Tools/CopyPngFiles/NewFolder'; 
  copyPngFiles(sourceFolder, folderToCopy);
  