/******************interface 2*************************/

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
countable1(gival);