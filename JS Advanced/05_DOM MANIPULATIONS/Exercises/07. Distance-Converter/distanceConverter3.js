function attachEventsListeners() {

    let buttonConvert = document.getElementById('convert');
    let conversionRatesFromMeter = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    }

    buttonConvert.addEventListener('click', function () {
        let inputField = Number(document.getElementById('inputDistance').value);
        let outputField = document.getElementById('outputDistance');
        let inputOption = document.getElementById('inputUnits').value;
        let outputOption = document.getElementById('outputUnits').value;
        let convertFrom = inputOption;
        let convertTo = outputOption;

        let valueInMeters = inputField * conversionRatesFromMeter[convertFrom];
        let convertedValue = valueInMeters / conversionRatesFromMeter[convertTo];
        outputField.value = convertedValue;
    })
}
