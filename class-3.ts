/********************class 3 static & visibility*****************/
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