let numberOfiPhone = parseFloat(document.getElementById("totalPhone").value);
let numberOfCase = parseFloat(document.getElementById("totalCase").value);

document.getElementById("iPhoneIncrease").addEventListener('click', function(){
    numberOfiPhone++;
    updateSpanText("totalPhone", numberOfiPhone, "iPhonePrice", 1219);
    totalUpdate();
});
document.getElementById("iPhoneDecrease").addEventListener('click', function(){
    numberOfiPhone--;
    if(numberOfiPhone >= 0){
        updateSpanText("totalPhone", numberOfiPhone, "iPhonePrice", 1219);
        totalUpdate();
    }
    else{
        alert("বাকি চাহিয়া লজ্জা দিবেন না");
    }
});
document.getElementById('siliconeCaseIncrease').addEventListener('click', function(){
    numberOfCase++;
    updateSpanText("totalCase", numberOfCase, "siliconeCasePrice", 59);
    totalUpdate();
});
document.getElementById('siliconeCaseDecrease').addEventListener('click', function(){
    numberOfCase--;
    if(numberOfCase >= 0){
        updateSpanText("totalCase", numberOfCase, "siliconeCasePrice", 59);
        totalUpdate();
    }
    else{
        alert("বাকি চাহিয়া লজ্জা দিবেন না");
    }
});

function updateSpanText(inputFieldUpdate ,numOfItem, id, pricePerItem){
    document.getElementById(inputFieldUpdate).value = numOfItem;
    price = pricePerItem*numOfItem;
    document.getElementById(id).innerText = price;
}
function totalUpdate(){
    const iPhonePrice = parseFloat(document.getElementById("iPhonePrice").innerText);
    const siliconeCasePrice = parseFloat(document.getElementById("siliconeCasePrice").innerText);
    const taxForPhone = 15 * iPhonePrice / 100;
    const taxForCase = 15 * siliconeCasePrice / 100;
    const totalTax = Math.round(taxForPhone + taxForCase);
    document.getElementById('subtotal').innerText = iPhonePrice + siliconeCasePrice;
    document.getElementById('tax').innerText = totalTax;
    document.getElementById('total').innerText = iPhonePrice + siliconeCasePrice + totalTax;
}