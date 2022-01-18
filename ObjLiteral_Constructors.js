console.log("Object Literal and Constructors");

// Object Literal for creating objects
let Student = {
  name: "Sonu Dutta",
  age:22,
  write: function() {
    console.log("Student is writing.");
  }
};
console.log(Student);
console.log(Student.write());


// we have already seen constructors like these:
// new Date();

// Creating a constructor for cars
function GeneralCar(givenName, givenSubject) {
  this.name = givenName;
  this.subject = givenSubject;
  this.study = function() {
    console.log(`${this.name} is studying.`);
  }
  this.IsStudying=function(){
    console.log(`${this.name} is studying ${this.subject}.`);
  }
}
stud1= new GeneralCar('Anjana','DIP');
stud2= new GeneralCar('Sandhya','CN');
// console.log(stud1);
// console.log(stud1.name);
// console.log(stud1.subject);
// console.log(stud2);
console.log(stud1,stud2);
console.log(stud1.IsStudying());



 