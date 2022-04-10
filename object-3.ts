/***************Object 3 *******************/
let person = {	
	firstname: "Saiful",
	lastname : "islam",
	nickname:"",
	age:32,
	invt:function(){
		return 'Hello ' + person.firstname;
	}
};
function inv( obj: { firstname :string, lastname :string, age :number } ){
	console.log(obj.firstname);
}
inv(person);