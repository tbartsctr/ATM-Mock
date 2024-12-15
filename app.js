
//-----------> NUMBER PAD

function numEnter(value){
    const display = document.querySelector(".scrn2");
    display.innerHTML += value + ''
}

const numBtns = document.querySelectorAll(".keys");

numBtns.forEach(function(btn){
    btn.addEventListener("click", function(){
        numEnter(this.innerText);
        const value = this.innerText;

        if (value === "CLR"){
            document.querySelector(".scrn2").innerHTML = ""
            document.querySelector(".scrn3").innerHTML = ""
            document.querySelector(".acctn").innerHTML = ""

        } else {
            numEnter(value)
        }
    });

});


//----------->SCREEN BUTTONS

function scrnBtnEnter(value){
    const scrnBtnDisplay = document.querySelector(".scrn2");
    scrnBtnDisplay.innerHTML = "";
    scrnBtnDisplay.innerHTML += value
    const returnMessage = document.querySelector(".scrn3");
        if (value === "Deposit" || value === "Withdraw"){
        if(returnMessage){
            returnMessage.innerHTML = "What would you like to " + value
        }
        } else if (value === "Check Bal"){
            if(returnMessage){
                returnMessage.innerHTML = "Checking your balance..."
                const accountBalance = document.querySelector(".acctn")
                accountBalance.innerHTML = "$5,000,000";
            }
        } else {
            if (returnMessage)
            returnMessage.innerHTML = value}
}
    


const scrnBtn = document.querySelectorAll(".btnSelector")

    scrnBtn.forEach(function(btn){
        btn.addEventListener("click", function(){
            scrnBtnEnter(this.innerText);
            const value = this.innerText
        
            if (value === "Withdraw" || value === "Deposit"){
                const WDoption1 = document.querySelector(".selexD");
                const WDoption2 = document.querySelector(".selexW");
                const WDOption3 = document.querySelector(".selexC");
                WDOption3.innerHTML = "$80";
                WDoption1.innerHTML = "$20";
                WDoption2.innerHTML = "$40";
            }
        })
    })







