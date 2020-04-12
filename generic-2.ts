/*********** Generic 2 ***********/
class Person<P>{
	greeting:P;

	constructor(message:P){
		this.greeting = message;
	}

}

let insPerson:Person<string> = new Person("Hi, Welcome to our Environment");
console.log(insPerson);