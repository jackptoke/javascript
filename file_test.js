const fs = require("fs");

//Append the content to the file if it exists, otherwise create one.
// fs.appendFile("node.txt", "Hello...how are you?", function(err){
//     if(err){
//         throw err;
//     }
//     console.log("Saved.");
// });

const contents = fs.readFileSync("node.txt", "utf8");

console.log(contents);