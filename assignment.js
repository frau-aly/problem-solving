function kilometerToMeter(num) {
    var result = 0;
    if(num < 0){
        console.log("value is negattive. Please insert a positive value");
    }
    else if(num >= 0){
        result = (num*1000);
        return result;
    }
}



function budgetCalculator(watchQuantity, phoneQuantity, laptopQuantity) {
    var total = 0;
    if(watchQuantity < 0 || phoneQuantity < 0 || laptopQuantity < 0){
        console.log("product quantity can not be negative.");
    }
    else if((watchQuantity > 0 && watchQuantity < 1) || (phoneQuantity > 0 && phoneQuantity < 1) || (laptopQuantity > 0 && laptopQuantity < 1)){
        console.log("product quantity can not be fraction");
    }
    else{
        total = ((watchQuantity * 50) + (phoneQuantity * 100) + (laptopQuantity * 500));
        return total;
    }
    
}



function hotelCost(dayNumber) {
    var total = 0;
    var firstTenDays = 10 * 100;
    var secondTenDays = 10 * 80;
    if (dayNumber < 0 || dayNumber < 1) {
        console.log("It is a invalid input. please give valid input.");
    }
    else if (dayNumber >= 1 && dayNumber <= 10) {
        total = dayNumber * 100;
        return total;
    }
    else if (dayNumber >= 11 && dayNumber <= 20) {
        total = firstTenDays + ((dayNumber - 10) * 80);
        return total;
    }
    else if (dayNumber > 20) {
        total = firstTenDays + secondTenDays + ((dayNumber - 20) * 50);
        return total;
    }
    
}



function megaFriend(stringArray) {
    if(Array.isArray(stringArray) == false){
        console.log("please insert a valid string array");
    }
    else {
        var max = 0;
        var name = "";
        for(i = 0; i < stringArray.length; i++) {
            var arr = stringArray[i];
            if(arr.length > max) {
                max = arr.length;
                x = arr;
            }
        }
        return x;
    }
}
