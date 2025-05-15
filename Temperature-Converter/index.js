
document.querySelector("button").addEventListener("click", handleClick);

  
function handleClick(){
    
    const Input = document.getElementById('fname');
    const unitSelect = document.getElementById('temperature-unit');
    const output = document.getElementById('output');

    const value = parseFloat(Input.value);
    const unit = unitSelect.value;

    if (value === '' || isNaN(value)) {
        output.textContent = " Please enter a valid number.";
        return;
    }

    let result='';
    if(unit === 'fahrenheit'){
        result = ((value - 32) * 5 / 9).toFixed(2) + ' °C';
    }else{
        result = ((value * 9 / 5) + 32).toFixed(2) + ' °F';
    }

    output.textContent = result;

}