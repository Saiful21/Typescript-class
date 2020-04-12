/*************Object 2******************/
let person = {	
	firstname: "Saiful",
	lastname : "islam",
	age:32,
	invt:function(){
		return 'Hello ' + person.firstname;
	}
};
person.invt = function():any{
	console.log("hello " + person.firstname + " " +person.age);
}
person.invt();