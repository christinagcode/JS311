console.log("hello");

function convertNumToWords (){
    document.getElementById('words').innerHTML = toWords(document.getElementById('number')).value
}       

function toWords(num){
    if ((num = num.toString()).length > 9) return 'overflow';
    
    return num;
}