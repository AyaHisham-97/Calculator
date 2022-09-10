let numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operation'),
    decimalBtn = document.getElementById('decimal'),
    clearBtns = document.querySelectorAll('.clear_btn'),
    resultBtn = document.getElementById('result'),
    signBtn = document.getElementById('sign'),
    percentBtn = document.getElementById('percent'),
    display = document.getElementById('display'),
    MemoryCurrentNumber = 0,
    MemoryNewNumber = false,
    MemoryPendingOperation = '';
    

for (let i=0; i<numbers.length; i++){
    let number = numbers[i];
    number.addEventListener('click', function (e){
        numberPress(e.target.textContent);
    });
};

for (let i=0; i<operations.length; i++){
    let operationBtn = operations[i];
    operationBtn.addEventListener('click', function(e){
        operation(e.target.textContent);
    });
}; 

for (let i=0; i<clearBtns.length; i++){
    let clearBtn = clearBtns[i];
    clearBtn.addEventListener('click', function(e) {
        clear(e.srcElement.id)
    });  
};
  
decimalBtn.addEventListener('click', decimal); 
resultBtn.addEventListener('click', result);
signBtn.addEventListener('click', sign);
percentBtn.addEventListener('click',percent);

    
function numberPress(number){
    if (MemoryNewNumber){
        display.value = number;
        MemoryNewNumber = false;
    } else{
        if (display.value === '0') {
            display.value = number;
        }else {
            display.value += number;
        };
    };
    
 };
function operation(op){
   let localOperationMemory = display.value;
    if(MemoryNewNumber && MemoryPendingOperation!== '='){
        display.value = MemoryCurrentNumber;
    } else {
        MemoryNewNumber = true;
        if (MemoryPendingOperation === '+'){
            MemoryCurrentNumber += parseFloat (localOperationMemory);
        } else if (MemoryPendingOperation === '-'){
            MemoryCurrentNumber -= parseFloat (localOperationMemory);
        } else if (MemoryPendingOperation === '*'){
            MemoryCurrentNumber *= parseFloat (localOperationMemory);
        }
         else if (MemoryPendingOperation === '/'){
            MemoryCurrentNumber /= parseFloat (localOperationMemory);
            MemoryCurrentNumber = MemoryCurrentNumber.toFixed(5);
        } else {
            MemoryCurrentNumber = parseFloat (localOperationMemory);
            
        };
  
        display.value = MemoryCurrentNumber;
        MemoryPendingOperation = op;   
    }
};
function clear(id){
     if (id === 'ce'){
        display.value= display.value.slice(0, -1)
         
    }else if (id ==='c'){
         display.value = '0';
         MemoryNewNumber = true;
         MemoryCurrentNumber = 0;
         MemoryPendingOperation = '';
};
};
function decimal(argument){
    let localDecimalMemory = display.value;
    if (MemoryNewNumber){
        localDecimalMemory = '0.';
        MemoryNewNumber = false;
    } else {
        if (localDecimalMemory.indexOf('.') ===-1){
            localDecimalMemory += '.';
        };
    };
    display.value = localDecimalMemory;
};
function sign(argument){
    let localSignMemory = display.value;
    if (MemoryNewNumber){
        localSignMemory *= -1 ;
        MemoryNewNumber = false;
    }; 
    display.value = localSignMemory;
};
function percent(argument) {
    let localPercentMemory = display.value;
    if (MemoryNewNumber){
        localPercentMemory /= 100 ;
        MemoryNewNumber = false;
    }; 
    display.value = localPercentMemory;
}


// function keyboardInput(key) {
//     if ((key.which < 0 || key.which > 57) && (key.which !== 13 && key.which !== 99)) {
//         return false;
//     } else {
//         key.preventDefault();
//         if (key.which === 48) {
//             display.value += "0";
//         } else if (key.which === 49) {
//             display.value += "1";
//         } else if (key.which === 50) {
//             display.value += "2";
//         } else if (key.which === 51) {
//             display.value += "3";
//         } else if (key.which === 52) {
//             display.value += "4";
//         } else if (key.which === 53) {
//             display.value += "5";
//         } else if (key.which === 54) {
//             display.value += "6";
//         } else if (key.which === 55) {
//             display.value += "7";
//         } else if (key.which === 56) {
//             display.value += "8";
//         } else if (key.which === 57) {
//             display.value += "9";
//         } else if (key.which === 46) {
//             display.value += ".";
//         }  else if (key.which === 42) {
//             display.value += "*";
//         } else if (key.which === 47) {
//             display.value += "/";
//         } else if (key.which === 43) {
//             display.value += "+";
//         } else if (key.which === 45) {
//             display.value += "-";
//         } else if (key.which === 13) {
//             displayResult();
//         } else if (key.which === 99) {
//             clearAll();
//         } else {
//             display.value = display.value;

      
//         }
//         return true;
//     }
// }

