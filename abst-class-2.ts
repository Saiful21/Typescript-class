/**********************example 2****************************/
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

let insEl = new Mobile();
console.log(insEl);
insEl.viewProductlist("samsung");