// This JavaScript file contains all the data of a student anmed 'Aditya'.
// Whenever the user requested the data using the 'require' function, the address of file within the function is called and whatever is allowed to export in that file using 'module.exports' command. 

var val = 99;
var id = 2021000446;
var Name = "Aditya";
var dob = '03/06/2003';
var Age = 20;
// module.exports = val;
module.exports = {ID: id, name: Name, DOB: dob, Age: Age};
