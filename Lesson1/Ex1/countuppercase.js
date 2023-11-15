function count(str){
    let String=str.toString();
    let count =0;
    for(let i=0; i<String.length; i++){
        if(String[i]==String[i].toUpperCase()){
            count++;
        }
    }
    console.log(count);
}
count("OneTwoThree");
count("OneTwoThreeFOURfiVe");
