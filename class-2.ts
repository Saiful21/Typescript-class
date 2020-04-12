/************************class 2 extends***********************/
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

let intEmp = new Employe("Hi, ");
let getEmp = intEmp.employeDetails();
console.log(getEmp);