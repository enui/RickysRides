// Javascript

// Code to fix vehicle cards
https://codepen.io/lionel-rowe/pen/KEogPJ

// Global variables
var BOOKINGFEE = 50;
var INSURANCE = 20;
var carCost = 0;
var extraCost = 0;
var days = 0;

// Event listeners

function vehicle(form){
    var radios = document.getElementsByName('vehicleRadios');

    for (var i = 0, length = radios.length; i < length; i++){
        if (radios[i].checked){
            alert(radios[i].value);
            break;
        }
    }
}

// Vehicle selection and info
function vehicleSelection() {
    vehicleSelection = 
    vehicleInfo = {
        vehicle: this.dataset.name,
        seats: this.dataset.data-seats,
        style: this.dataset.data-style,
        luggage: this.dataset.data-luggage,
        engineSize: this.dataset.data-engine,
        fuelEconomy: this.dataset.data-economy,
        fuelType: this.dataset.data-fuel,
        transmission: this.dataset.data-trans,
        price: this.dataset.data-price,
    }


}

// Function
function costs(form) {
    var totalCost = 0;
    totalCost.innerHTML = totalCost;
    // TODO: Calculate days using 2 dates
    // Calculating vehicle selected
    for (var i = 0; i < form.elements.length; i++){
        if(form.elements[i].type == "radio") {
            if (form.elements[i].checked == true) {
                vehicleChoice = form.elements[i].value;
                vehicleCost = form.elements[i].dataset.price;
                vehicleOutput.innerHTML = vehicleChoice;
            }
        }
    }
}

// Confirm booking, uploads results to firebase
function confirmBooking() {
    var database = firebase.database();
    var bookingRef = database.ref('bookings');
    var name = nameInput.value;
    var email = emailInput.value;
    var cellphone = cellphoneInput.vale;
    var age = ageInput.value;
    var comment = commentInput.value;
    // TODO: Finish filling in the JSON file
    var bookingsEntry = {
        name: name,
        email: email,
    }
    bookingRef.push(bookingsEntry);
}