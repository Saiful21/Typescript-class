/*example 1*/
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

/*let insPhp = new PhpProject();
insPhp.viewPorject("We have new project of PHP");*/

/*example 2*/
abstract class Electric
{

	brandName:string = 'Samsun';
	lists:string[] = ['Galaxy A31','Galaxy Tab S6 Lite','Galaxy A21','Galaxy A26','Galaxy A23'];
	//abstract method
	abstract viewProductlist(name1:string):void;

	replyList(){
		for(let i; i<this.lists.length; i++){
			let getList = this.lists[i];
			console.log(getList);
		}
	}

}

class Mobile extends Electric{
	
	viewProductlist(name1:string){
		let x = this.brandName = name1;
		console.log(x);		
	}

}

/*let insEl = new Mobile();
console.log(insEl);
insEl.viewProductlist("samsung");*/

/*example 3 visibility*/

abstract class Shape {
    private shapeName: string;

    constructor(name: string) {
        this.shapeName = name;
    }

    public draw(): void {
        console.log("pre drawing " + this.shapeName);
        this.drawShape();
    }
   //abstract method
    protected abstract drawShape();
}

class Square extends Shape {
    private _length: number;

    constructor(name: string, length: number) {
        super(name);
        this._length = length;
    }

    //super class abstract methods
    protected drawShape() {
        console.log("drawing square with length "+this._length);
    }
}

let shape: Shape = new Square("saure", 5 );
shape.draw();