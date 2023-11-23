const fs = require('fs');
const path = require('path');

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
if(jsonObject!==null){
    const newProperty = {"Age": '26', "City": 'Biên Hoà'};
    Object.assign(jsonObject, newProperty);
    fs.writeFileSync(filePath, JSON.stringify(jsonObject, null, 2), 'utf8');
    console.log('JSON data with new property:', jsonObject);
}

