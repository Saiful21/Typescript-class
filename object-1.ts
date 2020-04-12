/**********object 1**********/
let person = {	
	firstname: "Saiful",
	lastname : "islam",
	age:32,
	invt:function(){
		return 'Hello ' + person.firstname;
	}
};

console.log(person.invt());