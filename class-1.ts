/*********************class 1**********************/
class Person{

	firstName:string;
	lastName:string;
	emailName:string;
	greeting:string;

	constructor(message:string){
		this.greeting = message;
		this.firstName = 'Ariful';
		this.lastName = 'Islam';
		this.emailName = "arif@gmail.com";
	}

}

let insPerson = new Person("Hi, Welcome to our Environment");
console.log(insPerson);