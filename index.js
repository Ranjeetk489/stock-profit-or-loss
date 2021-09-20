const iniPrice = document.querySelector("#intPrice");
const quantity = document.querySelector("#quantity");
const currPrice = document.querySelector("#crrPrice");
const alert = document.querySelector("#alert");
const button = document.querySelector("#show");

button.addEventListener("click" , main)

function main(){
    const price = iniPrice.value * quantity.value;
    const crPrice = currPrice.value * quantity.value;
    if(price > 0 && crPrice > 0){
        checkProfitLoss(crPrice, price);
        
    }
    else{
        message.style.color = "red";
        message.innerText = "Invalid entry! Enter valid and Positive amount!";
    }
}

function checkProfitLoss(sellPrice,costPrice){
    if(sellPrice === costPrice){
        message.style.color = "grey";
       message.innerText = "NO LOSS NO GAIN!!!!";
    }
    else if(sellPrice> costPrice){
        const profit = sellPrice-costPrice;
        const profitPer = ((profit/costPrice) * 100).toFixed(2);
        message.style.color = "green";
        message.innerText = "You made a profit of " + profit + " over this transaction and profit percentage stands to " + profitPer +"%";
        
    }
    else if(sellPrice < costPrice){
        const loss = costPrice - sellPrice;
        const lossPer = ((loss/costPrice) * 100).toFixed(2);
        message.style.color = "red";
        message.innerText = "You made a loss of " + loss + " over this transaction and loss percentage stands to " + lossPer +"%";

    }
}
