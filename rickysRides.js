// Javascript

// Checkvalidity function
// Car selection funtion
// Extras function
// Output to firebase function
// Total cost function (insurance etc)

// Global variables
var BOOKINGFEE = 50;
var INSURANCE = 20;
var carCost = 0;
var extraCost = 0;
var days = 0;

// Vehicle selection form
var vehicleForm = document.querySelector("#vehicleSelection");
var vehicleOutput = document.querySelector("#vehicleOutput");

vehicleForm.addEventListener("submit", function(event) {
    var data = new FormData(vehicleForm);
    var output = "";
    for (const entry of data) {
        vehicleChoice = entry[1];
    };
    vehicleOutput.innerText = vehicleChoice;
    event.preventDefault();
}, false);


    
var vehicleSpecsOutput = document.querySelector("#vehicleSpecsOutput");
vehicleSelection = document.querySelector(vehicleChoice).value;
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
vehicleSpecsOutput.innerHTML = vehicleSelection;


// // Costs function
// function costs(form) {
//     var totalCost = 0;
//     var days = daysInput.value;
//     totalCost.innerHTML = totalCost;
//     // Calculating vehicle selected
//     for (var i = 0; i < form.elements.length; i++){
//         if(form.elements[i].type == "radio") {
//             if (form.elements[i].checked == true) {
//                 vehicleChoice = form.elements[i].value;
//                 vehicleCost = form.elements[i].dataset.price;
//                 vehicleOutput.innerHTML = vehicleChoice;
//             }
//         }
//     }
// }

// // Firebase function
// function confirmBooking(form) {
//     if(!form.terms.checked) {
//         alert("Please indicate that you accept the Terms and Conditions");
//         form.terms.focus();
//         return false;
//     }
//     return true;
//     var database = firebase.database();
//     var bookingRef = database.ref('bookings');
//     var firstName = firstNameInput.value;
//     var lastName = lastNameInput.value;
//     var email = emailInput.value;
//     var cellphone = cellphoneInput.vale;
//     var age = ageInput.value;
//     var comment = commentInput.value;
//     // TODO: Finish filling in the JSON file
//     var bookingsEntry = {
//         name: firstName + lastName,
//         email: email,
//         cellphone: 
//     }
//     bookingRef.push(bookingsEntry);
// }