/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const unitInput = document.getElementById("unit");
const displayLength = document.getElementById("length");
const displayVolume = document.getElementById("volume");
const displayMass = document.getElementById("mass");

const getConversionFromMeterToFeet = (unitInputValue) => {
    return (unitInputValue * 3.28084).toFixed(3);
};
const getConversionFromFeetToMeter = (unitInputValue) => {
    return (unitInputValue / 3.28084).toFixed(3);
};

const getConversionFromLiterToGallon = (unitInputValue) => {
    return (unitInputValue * 0.2641720524).toFixed(3);
};
const getConversionFromGallonToLiter = (unitInputValue) => {
    return (unitInputValue / 0.2641720524).toFixed(3);
};

const getConversionFromKiloToPound = (unitInputValue) => {
    return (unitInputValue / 0.45359237).toFixed(3);
};
const getConversionFromPoundToKilo = (unitInputValue) => {
    return (unitInputValue * 0.45359237).toFixed(3);
};

// function for all the conversions
const getConversionValues = () => {
    let unitInputValue = Number(unitInput.value);
    let unitInputToFeet = getConversionFromMeterToFeet(unitInputValue);
    let unitInputToMeter = getConversionFromFeetToMeter(unitInputValue);
    let unitInputToGallon = getConversionFromLiterToGallon(unitInputValue);
    let unitInputToLIter = getConversionFromGallonToLiter(unitInputValue);
    let unitInputToPound = getConversionFromKiloToPound(unitInputValue);
    let unitInputToKilo = getConversionFromPoundToKilo(unitInputValue);

    renderConversionValues(
        unitInputValue,
        unitInputToFeet,
        unitInputToMeter,
        unitInputToGallon,
        unitInputToLIter,
        unitInputToPound,
        unitInputToKilo
    );
};

const displayInLength = (unitInputValue, unitInputToFeet, unitInputToMeter) => {
    displayLength.textContent = `${unitInputValue} meters = ${unitInputToFeet} feet | ${unitInputValue} feet = ${unitInputToMeter} meter`;
};

const displayInVolume = (
    unitInputValue,
    unitInputToGallon,
    unitInputToLIter
) => {
    displayVolume.textContent = `${unitInputValue} liters = ${unitInputToGallon} gallons | ${unitInputValue} feet = ${unitInputToLIter} liters`;
};

const displayInMass = (unitInputValue, unitInputToPound, unitInputToKilo) => {
    displayMass.textContent = `${unitInputValue} kilos = ${unitInputToPound} pounds | ${unitInputValue} pounds = ${unitInputToKilo} kilos`;
};

// function to render output
const renderConversionValues = (
    unitInputValue,
    unitInputToFeet,
    unitInputToMeter,
    unitInputToGallon,
    unitInputToLIter,
    unitInputToPound,
    unitInputToKilo
) => {
    displayInLength(unitInputValue, unitInputToFeet, unitInputToMeter);
    displayInVolume(unitInputValue, unitInputToGallon, unitInputToLIter);
    displayInMass(unitInputValue, unitInputToPound, unitInputToKilo);
};

unitInput.addEventListener("input", getConversionValues);
