// Javascript

// Event listeners

// 

// Insurance $20 a day
// $50 fee
// Add extras
// Price per day
// Total cost

function costs(form) {
    var totalCost = 0;
    var BOOKINGFEE = 50;
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