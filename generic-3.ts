/*********** Generic 3 ***********/

class Employe<P> extends Person<P>{

	protected idNo:number;

	constructor(message2 : P){
		super(message2);
		this.idNo = 5721;
	}

	employeDetails(){
		return 'Single Employe Info ID :' + this.idNo; 
	}
}

let intEmp:Employe<string> = new Employe("Hi, ");
let getEmp = intEmp.employeDetails();
console.log(getEmp);
