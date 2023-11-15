function readVNnum(number){
    if(number<0 || number >999999){
        return "invalid";
    }
    const words=["","một","hai","ba","bốn","năm","sáu","bảy","tám","chín"];
    const units=["","linh","mươi","trăm","ngàn","vạn"];

    function readPart(part){
        let result="";
        let digit=part%10;
        let ten=Math.floor(part/10)%10;
        let hundred=Math.floor(part/100)%10;
        let thousand=Math.floor(part/1000)%10;   
        if(thousand>0){
            result+= words[thousand]+" "+units[4]+" ";
        }
        
        if(hundred>0){
            result+= words[hundred]+" "+units[3]+" ";
        }
        if(ten>1){
            result+= words[ten]+" "+units[2]+" ";
        }
        else if(ten===1){
            result+="mười";
        }
        if(digit>0 && ten!== 1){
            result+=words[digit]+" ";
        }
        return result;
    }
    let result = readPart(number);
    return result.trim();
}
console.log(readVNnum(2346));   