
let User = function (firstName, lastName, emailId, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.emailId = emailId;
  this.age = age;

  this.getFullName = function () {
    return this.firstName + " " + this.lastName;
  };
};

var ramshe = new User("Ramesh", "Fadatare", "ramesh24@example.com", 29);
var john = new User("John", "Cena", "john@example.com", 45);
var tony = new User("Tony", "Stark", "tony@example.com", 52);

console.log(ramshe);
console.log(john.firstName);
console.log(tony.getFullName());
