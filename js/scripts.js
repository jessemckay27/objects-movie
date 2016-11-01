function Customer(nameInput, initialInput) {
 this.name = nameInput;
 this.money = initialInput;
}

// newCustomer {
  // name: John Doe;
  // Money: 500;
//}

Customer.prototype.balanceUpdate = function(depo, withd) {
  debugger;
  return this.money += depo - withd
}

var Customers = [];



$(document).ready(function() {

  $("form#registration").submit(function(event) {
    debugger;
    event.preventDefault();
    var nameInput = $("input#name").val();
    var initialInput = parseInt($("input#number").val());
    var newCustomer = new Customer(nameInput, initialInput);
    Customers.push(newCustomer);
    console.log(Customers[0].money);
    $("#somethingHere h3").text(Customers[0].money);
  });

  $("form#atm").submit(function(event) {
    event.preventDefault();
    debugger;
    var depositInput = parseInt($("input#deposit").val());
    var withdrawalInput = parseInt($("input#withdrawal").val());
    var totalChange = Customers[0].balanceUpdate(depositInput, withdrawalInput);
    $("#newBalance").text(totalChange);
  });



});
