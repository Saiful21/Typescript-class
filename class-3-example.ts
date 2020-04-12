/*class 1*/
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

/*let insPerson = new person("Hi, Welcome to our Environment");
console.log(insPerson);*/

/*class 2 extends*/
class Employe extends Person{

	protected idNo:number;

	constructor(message2 : string){
		super(message2);
		this.idNo = 5721;
	}

	employeDetails(){
		return 'Single Employe Info ID :' + this.idNo + ', First Name: ' + this.firstName+ ", Last Name : " + this.lastName + " and Email : " + this.emailName; 
	}
}

/*let intEmp = new Employe("Hi, ");
let getEmp = intEmp.employeDetails();
console.log(getEmp);*/

/*class 3 static & visibility*/
class Car extends Person{
	
	static speedMeter : number = 45;
	readonly readSpeed;

	constructor(msg:string){
		super(msg);
		this.readSpeed = msg;
		Car.speedMeter;
	}

	getMeterInfo(){
		console.log( "Buy This car Mr. "+ this.firstName+ " Default car speed setup " + Car.speedMeter + " , " + this.readSpeed);
	}
}

let insCar = new Car("Much better speed");
insCar.getMeterInfo();


