/*******************example 1********************/
abstract class Project{
	
	projectName:string = "Default";
	budget: number = 200;
	//abstract method
	abstract viewPorject(name:string):void; 

	calculateBudget(){
		return this.budget * 3; 
	}
}

class PhpProject extends Project{
	
	viewPorject(name:string):void{
		let x = this.projectName = name;
		console.log(x);
	}

}

let insPhp = new PhpProject();
insPhp.viewPorject("We have new project of PHP");