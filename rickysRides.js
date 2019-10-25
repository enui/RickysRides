// Javascript
date();

// Variables
var totalCost = 0;
var INSURANCE = 20;
var BOOKINGFEE = 50;
var extrasTotal = 0;
var extras = ' ';
var pickUp, noOfDays;

// Vehicle selection function
function vehicleSelection(form){
    var i;
    // For loop that goes through program looking for radios and checkboxes
    for (i = 0; i < form.elements.length; i++) {
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
    }
    // Vehicle detail outputs
    sideOutputVehicle.innerHTML = vehicle;
    outputSeats.innerHTML = seats;
    outputStyle.innerHTML = style;
    outputLuggage.innerHTML = luggage;
    outputEngine.innerHTML = engine;
    outputEconomy.innerHTML = economy;
    outputFuel.innerHTML = fuel;
    outputTrans.innerHTML = trans;

    details();
}

// Function to calculate extras
function extraSelection(form){
    extras =" ";
    extrasTotal= 0;
    // For loop that goes through program looking for radios and checkboxes
    for (var i = 0; i < form.elements.length; i++) {
        // Looks for checkboxes
        if(form.elements[i].type == 'checkbox') {
            // If checkbox is ticked runs this
            if(form.elements[i].checked == true) {
                // Excludes the term checkbox
                if(form.elements[i].value != 'terms') {
                    // Lists off all the extras selected
                    extras += form.elements[i].value + ', ';
                    // Adds price of extras to 'sum' this is later added to the total cost
                    extrasTotal = extrasTotal + parseInt(form.elements[i].dataset.price);
                }
            }
        }
    }
    outputExtras.innerHTML = extras;
    outputExtrasSide.innerHTML = extras;
    outputExtrasTotal.innerHTML = '$' + extrasTotal;
    outputExtrasTotalSide.innerHTML = '$' + extrasTotal;
}

// Details function
function details(form) {
    pickUp = pickUpDate.value;
    noOfDays = numberOfDays.value;

    // Calculates total cost
    outputCost.innerHTML = '<b>' + '$' + totalCost + '</b>';
    outputVehicle.innerHTML = vehicle;
    outputPrice.innerHTML = '$' + vehicleCost + " per day";    
    outputInsurance.innerHTML = '$' + INSURANCE;
    outputBookingFee.innerHTML = '$' + BOOKINGFEE;
    outputDate.innerHTML = pickUp;
    outputDays.innerHTML = noOfDays + " Days";
    totalCost = extrasTotal + parseInt(vehicleCost * noOfDays) + parseInt(INSURANCE * noOfDays) + BOOKINGFEE;

    validityChecker();
}

// Upload to firebase function
function upload(form) {
    console.log(totalCost);
    var database = firebase.database();
    var bookingRef = database.ref('bookings');
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;
    var fullName = firstName + ' ' + lastName;
    var emailAddress = emailInput.value;
    var phoneNumber = phoneNumberInput.value;
    var userAge = ageInput.value;
    var comment = commentInput.value;
    var bookingsEntry = {
        name: fullName,
        vehicle: vehicle,
        pickUpDate: pickUp,
        email: emailAddress,
        phone: phoneNumber,
        age: userAge,
        totalCost: '$' + totalCost,
        extras: extras,
        comment: comment
    }
    bookingRef.push(bookingsEntry);
    // Switches to the booking confirmation page
    tabSwitch(event, 'bookingConfirmed');
}

// This function deals with validation of the form fields
function validityChecker(form) {
    // Gets all elements with the class required
    var test = document.getElementsByClassName('required');
    for (i = 0; i < test.length; i++) {
        if (test[i].checkValidity() == false || test[i].value.trim() == '') {
            document.getElementById("submitButton").disabled = true;
            document.getElementById("dateInvalid").innerHTML = document.getElementById("pickUpDate").validationMessage;
            document.getElementById("daysInvalid").innerHTML = document.getElementById("numberOfDays").validationMessage;
            document.getElementById("firstNameInvalid").innerHTML = document.getElementById("firstNameInput").validationMessage;
            document.getElementById("lastNameInvalid").innerHTML = document.getElementById("lastNameInput").validationMessage;
            document.getElementById("phoneNumberInvalid").innerHTML = document.getElementById("phoneNumberInput").validationMessage;
            document.getElementById("emailInvalid").innerHTML = document.getElementById("emailInput").validationMessage;
            document.getElementById("ageInvalid").innerHTML = document.getElementById("ageInput").validationMessage;
        }
        else if (test[i].checkValidity() == true) {
            document.getElementById("dateInvalid").innerHTML = document.getElementById("pickUpDate").validationMessage;
            document.getElementById("daysInvalid").innerHTML = document.getElementById("numberOfDays").validationMessage;
            document.getElementById("firstNameInvalid").innerHTML = document.getElementById("firstNameInput").validationMessage;
            document.getElementById("lastNameInvalid").innerHTML = document.getElementById("lastNameInput").validationMessage;
            document.getElementById("phoneNumberInvalid").innerHTML = document.getElementById("phoneNumberInput").validationMessage;
            document.getElementById("emailInvalid").innerHTML = document.getElementById("emailInput").validationMessage;
            document.getElementById("ageInvalid").innerHTML = document.getElementById("ageInput").validationMessage;
    
            if (document.getElementById('terms').checked == true) {
                document.getElementById("submitButton").disabled = false;
            }
            else if (document.getElementById('terms').checked == false) {
                document.getElementById("submitButton").disabled = true;
            }
        }
    }  
}

// Tab switching function
function tabSwitch(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // 
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
document.getElementById("submitButton").disabled = true;

function date(){
    let today = new Date(),
        day = today.getDate(),
        month = today.getMonth() + 1,
        year = today.getFullYear();
        if (day < 10) {
            day = '0' + day
        }
        if (month < 10) {
            month = '0' + month
        }
        today = year + '-' + month + '-' + day;

    document.getElementById("pickUpDate").setAttribute("min", today);
}