/*List data*/

class List<T>{

	private data:T[];

	constructor(elements:T[]){
		this.data = elements;
	}

	add(t: T){
		this.data.push(t);
	}

	remove(t:T){
		let ind = this.data.indexOf(t);
		if(ind > -1){
			this.data.splice(ind,1);
		}
	}

	passData():T{
		return this.data;
	}

}

let numValus = new List<number>(1,2,3);
console.log(numValus);
numValus.add(11);
numValus.remove(3);
let numArray = numValus.passData();


