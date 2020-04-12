/*********** Generic 1 ***********/

interface unitDate<T, S>{
	makeData(key:T, val:S):void;
}

class getData<T, S> implements unitDate<T, S>{
	makeData(key:T, val:S){
		console.log("Key :" + key + " Value :" + val);
	}
}

let instVal:unitDate<number,string> = new getData();
instVal.makeData(1,'Saiful');