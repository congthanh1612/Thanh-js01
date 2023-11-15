function extension(filename){
    let dot= filename.indexOf(".");
    return filename.slice(dot+1);
}
//let result = extension("abc.mp3");
console.log(extension("Sound.mp3"));
console.log(extension("image.png"));