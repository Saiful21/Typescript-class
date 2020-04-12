/*****************interface 1************************/

function countable(lvalue :{num1:number,str:string}){
	console.log(lvalue.num1 + " " + lvalue.str);
}

let gvalue = {
	num1:5721, 
	str:"this is a string vlaue"
}
countable(gvalue);