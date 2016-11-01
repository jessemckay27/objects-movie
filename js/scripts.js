
function Customer(first) {
  this.first = first;
}

var ticketAge = {
  childTicket: "Child",
  adultTicket: "Adult",
  seniorTicket: "Senior"
}

var ticketPrice = {
  childTicket: 8,
  adultTicket: 12,
  seniorTicket: 8
}

var movieChoice = {
  starWars: "Star Wars: Rogue One",
  arrival: "Arrival",
  bourne: "Jason Bourne",
  insidious: "Insidious"
}

var moviePrice = {
  starWars: 2,
  arrival: 2,
  bourne: 0,
  insidious: -1
}

var movieTime = {
  matinee: "Matinee",
  evening: "Evening"
}

var movieTimePrice = {
  matinee: 0,
  evening: 1
}

var mathPrices = function(age, time, movie, quant) {
  var addThings = age + time + movie;
  var totalPrice = addThings * quant;
  return totalPrice;
}


$(document).ready(function() {

  $("form#box-office").submit(function(event) {
    event.preventDefault();
    debugger;
    var customerInput = $("#customer").val();
    var ageInput = $("#age").val();
    var timeInput = $("#time").val();
    var movieInput = $("#movie").val();
    var ticketQuantity = Number($("#quantity").val());

    var totalCost = mathPrices(ticketPrice[ageInput], movieTimePrice[timeInput], moviePrice[movieInput], ticketQuantity);





    $("#ticketQuant").text(ticketQuantity);
    $("#ageOutput").text(ticketAge[ageInput]);
    $("#timeOutput").text(movieTime[timeInput])
    $("#movieOutput").text(movieChoice[movieInput]);
    $("#nameOutput").text(customerInput);
    $("#totalPrice").text("$" + totalCost);

    $(".output").show();

  });


});
