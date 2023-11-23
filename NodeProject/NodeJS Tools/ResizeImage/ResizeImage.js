const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

function searchFilesByExtension(directory, extension, fileList = []) {
  const files = fs.readdirSync(directory);

  files.forEach((file) => {
    const filePath = path.join(directory, file);
    const checkFile = fs.statSync(filePath);

    if (checkFile.isDirectory()) {
      searchFilesByExtension(filePath, extension, fileList);
    } else if (path.extname(file) === `.${extension}`) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

function resizeImages(inputPath, outputPath) {
    sharp(inputPath)
      .metadata()
      .then(metadata => {
        const newWidth = Math.round(metadata.width * 0.7);
        
        sharp(inputPath)
          .resize({ width: newWidth })
          .toFile(outputPath, (err) => {
            if (err) {
              console.error(`Error processing image ${inputPath}: ${err.message}`);
            } else {
              console.log(`Image ${inputPath} resized and saved to ${outputPath}`);
            }
          });
      })
      .catch(err => {
        console.error(`Error getting metadata for ${inputPath}: ${err.message}`);
      });
  }
  
const directoryToSearch = './basics';
const pngFiles = searchFilesByExtension(directoryToSearch, 'png');
const jpgFiles = searchFilesByExtension(directoryToSearch, 'jpg');
const imageFiles = pngFiles.concat(jpgFiles);

const outputDir = './NodeJS Tools/ResizeImage/ResizedImages';
imageFiles.forEach((inputPath) => {
  const fileName = path.basename(inputPath);
  const outputPath = path.join(outputDir, fileName);

  resizeImages(inputPath, outputPath);
});
