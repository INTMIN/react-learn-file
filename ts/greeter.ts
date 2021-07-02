class Human {
  mainName:string;
  constructor(public firstName,public middleName,public lastName){
    this.mainName= firstName+ '' + middleName +'' + lastName;
  }
}

interface Person{
  firstName:string;
  lastName:string;
}

function greeter(person:Person) {
  return "Hello "+ person.firstName +''+ person.lastName;
}


let user = new Human('min','henshang','ceshi');

document.body.innerHTML = greeter(user);