//Handle Deposit Button
document.getElementById('btn-deposit').addEventListener('click', ()=>{
    //get deposited amount
    const depositInput = document.getElementById('deposit-input')
    const depositAmount = depositInput.value

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = depositTotal.innerText;
    const newDepositAmount = parseFloat(previousDepositAmount) + parseFloat(depositAmount) 
    // console.log(depositTotal.innerText)
    depositTotal.innerText = newDepositAmount

    //Update account Balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + parseFloat(depositAmount);
    balanceTotal.innerText = newBalanceTotal;



    //clear input field
    depositInput.value = '';

})

//handle withdraw eventhandler
document.getElementById('btn-withdraw').addEventListener('click', ()=> {
    //withdraw input area
    const withdrawIput = document.getElementById('withdraw-input');
    const withdrawIputText = withdrawIput.value;
    const withdrawIputInt = parseFloat(withdrawIputText);

    //update withdraw total amount area
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountText = withdrawAmount.innerText;
    const withdrawAmountint = parseFloat(withdrawAmountText);

    const withdrawAmountTotal = withdrawIputInt + withdrawAmountint;
    withdrawAmount.innerText = withdrawAmountTotal;

    //Updating the main balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalInt = parseFloat(balanceTotalText);
    const balanceTotalFinal = balanceTotalInt - withdrawIputInt;
    balanceTotal.innerText = balanceTotalFinal;

    if(balanceTotalFinal<=0){
        balanceTotal.innerText = 'No Money'
    }



    withdrawIput.value = '';
})