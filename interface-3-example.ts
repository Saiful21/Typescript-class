/*interface 1*/

function countable(lvalue :{num1:number,str:string}){
	console.log(lvalue.num1 + " " + lvalue.str);
}

let gvalue = {
	num1:5721, 
	str:"this is a string vlaue"
}

/*interface 2*/

interface planA{
	pvalue : string,
	nvalue : number
}

function countable1(gval:planA){
	if(gval.nvalue != 0){
		console.log(gval.pvalue + " " + gval.nvalue);
	}
} 

let gival = {
	pvalue : 'interface first value of string',
	nvalue : 5721
};

/*interface 3*/

interface planB{
	bi:string,
	b2?:number,
	gnum:(string)=>string;
}

class cplan implements planB{

	bi = "bi is a interface item";

	gnum(){
		return "this is implements data passed " + this.bi;
	}

}
let cobj = new cplan();
let g1 = cobj.gnum();
console.log(g1)