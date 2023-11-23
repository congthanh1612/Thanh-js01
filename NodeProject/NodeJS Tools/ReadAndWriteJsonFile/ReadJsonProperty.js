const fs = require('fs');
const path = require('path');
// const joinedPath = path.join(__dirname,'data.json');
// console.log('Joined Path:', joinedPath);

function readJsonFile(filePath) {
  try {
    const fileData = fs.readFileSync(filePath, 'utf8');
    const jsonObject = JSON.parse(fileData);
    return jsonObject;
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return null;
  }
}
const filePath = './NodeJS Tools/ReadAndWriteJsonFile/data.json';
const jsonObject = readJsonFile(filePath);
console.log(jsonObject);


