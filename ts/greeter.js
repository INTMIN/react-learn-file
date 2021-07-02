var Human = /** @class */ (function () {
    function Human(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.mainName = firstName + '' + middleName + '' + lastName;
    }
    return Human;
}());
function greeter(person) {
    return "Hello " + person.firstName + '' + person.lastName;
}
var user = new Human('min', 'henshang', 'ceshi');
document.body.innerHTML = greeter(user);
