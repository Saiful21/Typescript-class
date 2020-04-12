/*****************interface 3*********************/

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