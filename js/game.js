
/*   
    Game javascript
    @Author: 1809853Z-I011-0045 Wang Yuyang (Kennard Wang) 
*/

// class 
class CARD{
    constructor(){
        this.cardNum = -10000;
        this.cardURL = "";
        this.canSelect = true;
        this.canCancel = false;
    }
}

// global variable
var count = 0; // count operation times
var correctNum = 0; // correct question
var total = 0; // total submission times
var score = 0;
var min = 0; 
var sec = 0; 
var modeValue = 0;
var card = []; // record generated card
var result = [];  // store CARD entity
var re1 = new CARD(); // result1
var re2 = new CARD(); // result2

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

function selectCard(e){

    var index = Number(e.alt) - 1 ;

    // at most select 2 cards
    if(result.length < 2 && card[index].canSelect){
      
        e.src = "../imgsrc/unknown.jpg";
        card[index].canSelect = !card[index].canSelect;
        card[index].canCancel = !card[index].canCancel;
        
        if(result.length == 1){
            result[0].canCancel = false;
        }

        result.push(card[index]);
                   
    }
    else{
        if(card[index].canCancel){
            e.src = card[index].cardURL;
            var tmp = result.pop();
            tmp.canSelect = true;
            tmp.canCancel = false;
            
            if(result.length != 0){
                result[0].canCancel = true;
            }
        }
        
    }
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

    // reset
    count = 0;
    card = [];
    result = [];
    re1 = new CARD();
    re2 = new CARD();
    document.getElementById("result1").value = "Result1: 0";
    document.getElementById("result1").style.backgroundColor = "black";
    document.getElementById("result2").value = "Result2: 0";
    document.getElementById("result2").style.backgroundColor = "black";

    for(var i = 0; i < 4; ++i){
        // initialization
        var URL = "../imgsrc/cards/";
        var id = "img";
        
        var stylenum = Number(rand(1,4));
        var style = returnStyle(stylenum);
        var num = Number(rand(1,9)); // Normal mode
        
        URL += num.toString() + style + ".png";
        id += (i+1).toString();   

        var c = new CARD();
        c.cardNum = num; // record the card
        c.cardURL = URL;

        card.push(c);
        
        imgSet(id,URL);
    }
    
}

function cardGenerHard(){

    // reset
    count = 0;
    card = [];
    result = [];
    re1 = new CARD();
    re2 = new CARD();
    document.getElementById("result1").value = "Result1: 0";
    document.getElementById("result1").style.backgroundColor = "black";
    document.getElementById("result2").value = "Result2: 0";
    document.getElementById("result2").style.backgroundColor = "black";

    for(var i = 0; i < 4; ++i){
        // initialization
        var URL = "../imgsrc/cards/";
        var id = "img";
        
        var stylenum = Number(rand(1,4));
        var style = returnStyle(stylenum);
        var num = Number(rand(1,13)); // Hard mode
        
        URL += num.toString() + style + ".png";
        id += (i+1).toString();   

        var c = new CARD();
        c.cardNum = num; // record the card
        c.cardURL = URL;

        card.push(c);
        
        imgSet(id,URL);
    }
    
}

function selectResult(eid){
    var e = document.getElementById(eid);
    switch(eid){
        case "result1":
            if(re1.cardNum!=-10000){
                // select
                if(result.length < 2 && re1.canSelect){

                    if(result.length ==1){ result[0].canCancel = false;}

                    e.style.backgroundColor = "gray";
                    result.push(re1);
                    re1.canSelect = !re1.canSelect;
                    re1.canCancel = !re1.canCancel;
                }
                // cancel
                else{
                    if(re1.canCancel){
                        e.style.backgroundColor = "black";
                        var tmp = result.pop();
                        tmp.canSelect = true;
                        tmp.canCancel = false;

                        if(result.length != 0){
                            result[0].canCancel = true;
                        }
                        
                    }
                }
            }
            break;

        case "result2":
            if(re2.cardNum!=-10000){
                // select
                if(result.length < 2 && re2.canSelect){

                    if(result.length ==1){ result[0].canCancel = false;}

                    e.style.backgroundColor = "gray";
                    result.push(re2);
                    re2.canSelect = !re2.canSelect;
                    re2.canCancel = !re2.canCancel;
                }
                // cancel
                else{
                    if(re2.canCancel){
                        e.style.backgroundColor = "black";
                        var tmp = result.pop();
                        tmp.canSelect = true;
                        tmp.canCancel = false;

                        if(result.length != 0){
                            result[0].canCancel = true;
                        }
                        
                    }
                }
            }
            break;
        
    }
}

function add(){

    if(result.length == 2){

        var card2 = result.pop();
        var card1 = result.pop();

        if(card1.cardURL == ""){
            card1.canSelect = true;
        }

        if(card2.cardURL == ""){
            card2.canSelect = true;
        }

        card2.canCancel= false;
    
        if(!card[0].canSelect && !card[1].canSelect && !card[2].canSelect && !card[3].canSelect){
            re2.cardNum = card1.cardNum + card2.cardNum;
            document.getElementById("result2").value = "Result1: " + String(re2.cardNum);
            document.getElementById("result2").style.backgroundColor = "black";
        }
        else{
            re1.cardNum = card1.cardNum + card2.cardNum;
            document.getElementById("result1").value = "Result1: " + String(re1.cardNum);
            document.getElementById("result1").style.backgroundColor = "black";
        }

        count++;

        if(count==3){verify();}
    }
}

function minus(){
    if(result.length == 2){

        var card2 = result.pop();
        var card1 = result.pop();

        if(card1.cardURL == ""){
            card1.canSelect = true;
        }

        if(card2.cardURL == ""){
            card2.canSelect = true;
        }

        card2.canCancel= false;
    
        if(!card[0].canSelect && !card[1].canSelect && !card[2].canSelect && !card[3].canSelect){
            re2.cardNum = card1.cardNum - card2.cardNum;
            document.getElementById("result2").value = "Result1: " + String(re2.cardNum);
            document.getElementById("result2").style.backgroundColor = "black";
        }
        else{
            re1.cardNum = card1.cardNum - card2.cardNum;
            document.getElementById("result1").value = "Result1: " + String(re1.cardNum);
            document.getElementById("result1").style.backgroundColor = "black";
        }

        count++;

        if(count==3){verify();}
    }
}

function multiply(){
    if(result.length == 2){

        var card2 = result.pop();
        var card1 = result.pop();

        if(card1.cardURL == ""){
            card1.canSelect = true;
        }

        if(card2.cardURL == ""){
            card2.canSelect = true;
        }

        card2.canCancel= false;
    
        if(!card[0].canSelect && !card[1].canSelect && !card[2].canSelect && !card[3].canSelect){
            re2.cardNum = card1.cardNum * card2.cardNum;
            document.getElementById("result2").value = "Result1: " + String(re2.cardNum);
            document.getElementById("result2").style.backgroundColor = "black";
        }
        else{
            re1.cardNum = card1.cardNum * card2.cardNum;
            document.getElementById("result1").value = "Result1: " + String(re1.cardNum);
            document.getElementById("result1").style.backgroundColor = "black";
        }

        count++;

        if(count==3){verify();}
    }
}

function divide(){
    if(result.length == 2){

        var card2 = result.pop();
        var card1 = result.pop();

        if(card1.cardURL == ""){
            card1.canSelect = true;
        }

        if(card2.cardURL == ""){
            card2.canSelect = true;
        }

        card2.canCancel= false;
    
        if(!card[0].canSelect && !card[1].canSelect && !card[2].canSelect && !card[3].canSelect){
            re2.cardNum = card1.cardNum / card2.cardNum;
            document.getElementById("result2").value = "Result1: " + String(re2.cardNum);
            document.getElementById("result2").style.backgroundColor = "black";
        }
        else{
            re1.cardNum = card1.cardNum / card2.cardNum;
            document.getElementById("result1").value = "Result1: " + String(re1.cardNum);
            document.getElementById("result1").style.backgroundColor = "black";
        }

        count++;

        if(count==3){verify();}
    }
}

function reSet(){

    count = 0;

    // reset cards
    for(var i = 0; i < 4; ++i){
        card[i].canSelect = true;
        card[i].canCancel = false;
        imgSet("img"+String(i+1),card[i].cardURL);
    }

    // reset results
    result = [];
    re1 = new CARD();
    re2 = new CARD();
    document.getElementById("result1").value = "Result1: 0";
    document.getElementById("result1").style.backgroundColor = "black";
    document.getElementById("result2").value = "Result2: 0";
    document.getElementById("result2").style.backgroundColor = "black";
}

function verify(){

    total++;

    if(re2.cardNum==24){
        window.alert("Congratulations!");
        correctNum++;
        score += 24;
        var num = correctNum/total*100;
        document.getElementById("point").innerHTML = "Point: " + String(score);
        document.getElementById("correct").innerHTML = "Correct: " + String(correctNum);
        document.getElementById("rate").innerHTML = "Rate: " + String(num.toFixed(1)) + "%";
        cardGenerate();
    }
    else{
        window.alert("The answer is not 24, please try again!");
        reSet();
    }

    count = 0;  
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

    document.getElementById("timer").innerHTML = "Time: " + strmin + ":" + strsec + "&nbsp;&nbsp;";

}

function mouseHover(e){              
    e.style.setProperty("color","azure");
    e.style.setProperty("background-color","red");
}

function mouseOut(e){
    e.style.setProperty("color","bisque");
    e.style.setProperty("background-color","transparent");
}
