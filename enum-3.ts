/*********** Enum 3 ***********/

enum Status { 
    Active = 'ACTIVE', 
    Deactivate = 1, 
    Pending
}

let st:string= Status[2];
console.log(st);