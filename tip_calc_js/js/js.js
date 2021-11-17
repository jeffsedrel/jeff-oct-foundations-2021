// calculate tip
function calculateTip() {
    var billAmt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople = documemt.getElementById("peopleamt").value;

//validate input
    if (billAmt === "" || serviceQual == 0) {
        alert("Please Enter Values");
        return;
    }
//Check to see if this input is empty or less than or equal to 1
    if (numOfPeople === "" || numOfPeople <=1) {
        numOfPeople = 1;
        document.getElementById("each").style.display = "none";

    }
    else {
    document.getElementById("each").style.display = "block";
    }
//Calculate tip
    var total = (billAmt * serviceQual) / numOfPeople;
//round to two decimal places
    total = Math.round(total*100) / 100;
//next line allows us to always have two digits after the decimal
    total = total.toFixed(2);
//display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHtml = total;
}

//hide the tip amnt on load
    document.getElementById("totalTip").style.display = "none";
    document.getElementById("each").style.display = "none";

//click to call function
    document.getElementById("calculate").onclick = function (){
        calculateTip();
    
    };

    