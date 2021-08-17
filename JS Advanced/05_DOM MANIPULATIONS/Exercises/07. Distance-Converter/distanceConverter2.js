function attachEventsListeners() {

    let buttonConvert = document.getElementById('convert');
    buttonConvert.addEventListener('click', convertFunc)

    function convertFunc() {
        let inputField = Number(document.getElementById('inputDistance').value);
        let outputField = document.getElementById('outputDistance');
        let inputOption = document.getElementById('inputUnits').value;
        let outputOption = document.getElementById('outputUnits').value;
        let inputToM = 0;
        let result = 0;
        
        if ( inputOption === 'km' ) {
            inputToM = inputField * 1000;
        }
        else if ( inputOption === 'm' ) {
            inputToM = inputField;
        }
        else if ( inputOption === 'cm' ) {
            inputToM = inputField * 0.01;
        }
        else if ( inputOption === 'mm' ) {
            inputToM = inputField * 0.001;
        }
        else if ( inputOption === 'mi' ) {
            inputToM = inputField * 1609.34;
        }
        else if ( inputOption === 'yrd' ) {
            inputToM = inputField * 0.9144;
        }
        else if ( inputOption === 'ft' ) {
            inputToM = inputField * 0.3048;
        }
        else if ( inputOption === 'in' ) {
            inputToM = inputField * 0.0254;
        }

        if ( outputOption === 'km' ) {
            result = inputToM / 1000;
        }
        else if ( outputOption === 'm' ) {
            result = inputToM;
        }
        else if ( outputOption === 'cm' ) {
            result = inputToM / 0.01;
        }
        else if ( outputOption === 'mm' ) {
            result = inputToM / 0.001;
        }
        else if ( outputOption === 'mi' ) {
            result = inputToM / 1609.34;
        }
        else if ( outputOption === 'yrd' ) {
            result = inputToM / 0.9144;
        }
        else if ( outputOption === 'ft' ) {
            result = inputToM / 0.3048;
        }
        else if ( outputOption === 'in' ) {
            result = inputToM / 0.0254;
        }

        outputField.value = result;
    }

}