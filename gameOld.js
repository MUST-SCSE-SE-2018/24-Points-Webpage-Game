
/*   
    GameOld javascript
    @Author: 1809853Z-I011-0045 Wang Yuyang (Kennard Wang) 
*/

// global variable
var count = 0;
var min = 0;
var sec = 0;
var modeValue = 0;
var card = []; // record generated card

function init(){

    // get mode value of StartPage.html
    var url = window.location.search;
    modeValue = Number(url.split("?")[1].split("&")[0].split("=")[1]);
   
    // set up timer
    setInterval(function(){Timer()},1000);
    cardGenerNormal();
}

function rand(min,max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function imgSet(eid, URL){
    var e = document.getElementById(eid);
    e.src = URL;
}

function returnStyle(num){
    switch(num){
        case 1:
            return "h";
            break;
        case 2:
            return "s";
            break;
        case 3:
            return "d";
            break;
        case 4:
            return "c";
            break;
        default:
            return "";
    }
}

// 2 different modes to generate cards
function cardGenerate(){
    switch(modeValue){
        case 1:
            cardGenerNormal();
            break;
        case 2:
            cardGenerHard();
            break;
        default:
            break;
    }
}

function cardGenerNormal(){

    card = [];
    for(var i = 0; i < 4; ++i){
        // initialization
        var URL = "imgsrc/cards/";
        var id = "img";
        
        var stylenum = Number(rand(1,4));
        var style = returnStyle(stylenum);
        var num = Number(rand(1,9));
        card.push(num); // record the card
        URL += num.toString() + style + ".png";
        id += (i+1).toString();   
        
        imgSet(id,URL);
    }
    
}

function cardGenerHard(){

    for(var i = 0; i < 4; ++i){
        // initialization
        var URL = "imgsrc/cards/";
        var id = "img";
        
        var stylenum = Number(rand(1,4));
        var style = returnStyle(stylenum);
        var num = Number(rand(1,13));
        URL += num.toString() + style + ".png";
        id += (i+1).toString();   
        
        imgSet(id,URL);
    }
}

function getAns(eid){
    var e = document.getElementById(eid);
    return e.value;
}

// 2 different verifications
function verifyAns(str){
    switch(modeValue){
        case 1:
            verifyAnsNormal(str)
            break;
        case 2:
            verifyAnsHard(str)
            break;
        default:
            break;
    }
}

function verifyAnsNormal(str){
    var ans = str.split("");
    var num = []; // number
    var op = []; // operator
    var stop = false;
    var arr = [];
    var countnum = 0;
    
    // duplicate
    for(var i = 0; i < card.length; ++i){
        arr[i] = card[i];
    }

    // This algorithm is based on Java Stack operation we learned last semester
    for(var i = 0; i < ans.length; ++i){
        if(ans[i]=="(");
        else if(ans[i]=="+"){op.push(ans[i]);}
        else if(ans[i]=="-"){op.push(ans[i]);}
        else if(ans[i]=="*"){op.push(ans[i]);}
        else if(ans[i]=="/"){op.push(ans[i]);}
        else if(ans[i]==")"){
            var operator = op.pop();
            var num2 = num.pop();
            var num1 = num.pop();
            var result = 0;

            switch(operator){
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
                case "/":
                    result = num1 / num2;
                    break;
            }
            num.push(result);     
        }
        else{        
            
            for(var j = 0; j < arr.length; ++j){
                if(arr[j]==Number(ans[i])){arr.splice(j,j+1); break;}
                if(j==arr.length-1){stop = true;}
            }
            
            if(stop){break;} // if you use other numbers, the answer will be wrong

            num.push(Number(ans[i]));  // "+" may be misunderstood as string connection operator
            countnum++;
        }
    }

    // if input number is less than 4 or more than 4, it must be wrong
    if(countnum ==4 && !stop && num.pop()==24){
        count++;
        var e = document.getElementById("point").innerHTML = "Point: " + String(count*24);
        cardGenerNormal();
        document.getElementById("ans").value = "";
    }
    else{
        window.alert("Sorry, your answer is incorrect!");
    }
    
}

function verifyAnsHard(str){
    var ans = str.split("");
    var num = []; // number
    var op = []; // operator
    var twoDigit = false; // 2-digit input number 
    var countnum = 0; // how many numbers

    // This algorithm is based on Java Stack operation we learned last semester
    for(var i = 0; i < ans.length; ++i){
        if(ans[i]=="("){ if(twoDigit){countnum++;} twoDigit = false; }
        else if(ans[i]=="+"){op.push(ans[i]); if(twoDigit){countnum++;} twoDigit = false;}
        else if(ans[i]=="-"){op.push(ans[i]); if(twoDigit){countnum++;} twoDigit = false;}
        else if(ans[i]=="*"){op.push(ans[i]); if(twoDigit){countnum++;} twoDigit = false;}
        else if(ans[i]=="/"){op.push(ans[i]); if(twoDigit){countnum++;} twoDigit = false;}
        else if(ans[i]==")"){
            var operator = op.pop();
            var num2 = num.pop();
            var num1 = num.pop();
            var result = 0;

            switch(operator){
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
                case "/":
                    result = num1 / num2;
                    break;
            }
            num.push(result);     
            if(twoDigit){countnum++;}
            twoDigit = false;
        }
        else{
            // Why use Number(): "+" may be misunderstood as string connection operator
            if(twoDigit){
                var tmp = num.pop();
                tmp = 10*tmp + Number(ans[i]);
                num.push(tmp);
                countnum++;
                twoDigit = false;
            }
            else{
                num.push(Number(ans[i]));
                twoDigit = true;
            }
        }
    }

    if(countnum >=4 && num.pop()==24){
        count++;
        var e = document.getElementById("point").innerHTML = "Point: " + String(count*24);
        cardGenerNormal();
        document.getElementById("ans").value = "";
    }
    else{
        window.alert("Sorry, your answer is incorrect!");
    }
    
}

function Timer(){
    sec++;
    if(sec == 60){
        sec-=60;
        min++;
    }

    var strmin = "";
    var strsec = "";

    if(min < 10){strmin = "0" + String(min);}
    else{strmin = String(min);}

    if(sec < 10){strsec = "0" + String(sec);}
    else{strsec = String(sec);}

    document.getElementById("timer").innerHTML = "Time: " + strmin + ":" + strsec;

}

function mouseHover(e){              
    e.style.setProperty("color","azure");
    e.style.setProperty("background-color","red");
}

function mouseOut(e){
    e.style.setProperty("color","bisque");
    e.style.setProperty("background-color","transparent");
}
