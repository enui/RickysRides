// Javascript

// Function
function majority(form){
    // Variables
    var totalCost = 0;
    var INSURANCE = 20;
    var BOOKINGFEE = 50;
    var extrasTotal = 0;
    var extras = ' ';
    var checkIn = checkInDate.value;
    var noOfDays = numberOfDays.value;

    // For loop that goes through program looking for radios and checkboxes
    for (var i = 0; i < form.elements.length; i++) {
        // Vehicle selection code
        if (form.elements[i].type == 'radio') {
            if (form.elements[i].checked == true) {
                vehicle = form.elements[i].value;
                vehicleCost = form.elements[i].dataset.price;
                seats = form.elements[i].dataset.seats;
                style = form.elements[i].dataset.style;
                luggage = form.elements[i].dataset.luggage;
                engine = form.elements[i].dataset.engine;
                economy = form.elements[i].dataset.economy;
                fuel = form.elements[i].dataset.fuel;
                trans = form.elements[i].dataset.trans;
            }
        }
        // Extras code
        if(form.elements[i].type == 'checkbox') {
            if(form.elements[i].checked == true) {
                // Lists off all the extras selected
                extras += form.elements[i].value + ', ';
                // Adds price of extras to 'sum' this is later added to the total cost
                extrasTotal = extrasTotal + parseInt(form.elements[i].dataset.price);
            }
        }
    }
    // Calculates total cost
    totalCost = extrasTotal + parseInt(vehicleCost * noOfDays) + parseInt(INSURANCE * noOfDays) + BOOKINGFEE;

    // Vehicle detail outputs
    outputSeats.innerHTML = seats;
    outputStyle.innerHTML = style;
    outputLuggage.innerHTML = luggage;
    outputEngine.innerHTML = engine;
    outputEconomy.innerHTML = economy;
    outputFuel.innerHTML = fuel;
    outputTrans.innerHTML = trans;

    // Outputs
    outputCost.innerHTML = '<b>' + '$' + totalCost + '</b>';
    outputDate.innerHTML = checkIn;
    outputDays.innerHTML = noOfDays + " Days";
    outputVehicle.innerHTML = vehicle;
    outputPrice.innerHTML = '$' + vehicleCost + " per day"; 
    outputExtras.innerHTML = extras;
    outputExtrasTotal.innerHTML = '$' + extrasTotal;
    outputInsurance.innerHTML = '$' + INSURANCE;
    outputBookingFee.innerHTML = '$' + BOOKINGFEE
}

// Validity checker
function validity(){
    
}

// Firebase upload function
function upload(){
    alert("harro")
    var database = firebase.database();
    var booking = database.ref('bookings')
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;
    var name = firstName + ' ' + lastName;
    var email = emailInput.value;
    var phoneNumber = phoneNumberInput.value;
    var age = ageInput.value;
    var comment = commentInput.value;
    var bookingsEntry = {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        age: age,
        totalCost: totalCost,
        comment: comment,
    }
    bookingRef.push(bookingsEntry);
    alert("data has been pushed")
}