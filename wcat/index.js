// const fs = require("fs");
// let arguments = process.argv.slice(2);

// let flags = [];
// let filenames = [];
// let secondaryArguments = [];

// for(let i of arguments) {
//     if(i[0] == "-") {
//         flags.push(i);
//     } else if(i[0] == "%") {
//         secondaryArguments.push(i.slice(1));
//     } else {
//         filenames.push(i);
//     }
// }

// for(let file of filenames) {
//     let fileData = fs.readFileSync(file,"utf-8");
//     for(let flag of flags) {
//         if(flag == "-rs") {
//             fileData = removeAll(fileData," ");
//         }
//         if(flag == "-rn") {
//             fileData = removeAll(fileData, "\n")
//         }
//         if(flag == "-rsc") {
//             for(let secondaryArgument of secondaryArguments) {
//                 fileData = removeAll(fileData,secondaryArgument);
//             }


//         }
//     }
//     console.log(fileData);
// }

// function removeAll(string, removalData) {
//     return string.split(removalData).join("");
// }

const fs = require("fs");
let arguments = process.argv.slice(2);

let flags = [];
let filenames = [];
let secondaryArguments = [];

for(let i of arguments) {
    if(i[0] == "-") {
        flags.push(i);
    } else if(i[0] == "%") {
        secondaryArguments.push(i.slice(1));
    } else {
        filenames.push(i);
    }
}

for(let file of filenames) {
    let fileData = fs.readFileSync(file,"utf-8");
    for(let flag of flags) {
        if(flag == "-rs") {
            fileData = removeAll(fileData," ");
            console.log(fileData);
        }
        if(flag == "-rn") {
            fileData = removeAll(fileData, "\n")
            console.log(fileData);
        }
        if(flag == "-rsc") {
            for(let secondaryArgument of secondaryArguments) {
                fileData = removeAll(fileData,secondaryArgument);
            }
            console.log(fileData);
        }
        if(flag == "-s"){
            let ans = Snumber(fileData);
            console.log(ans);
        }
        if(flag == "-sn"){
            let ans = Snumbers(fileData);
            console.log(ans);
        }
        if(flag == "-rnl"){
            let ans = removeAll(fileData, "\n");
            console.log(ans);
        }
    }
}



function removeAll(string, removalData) {
    return string.split(removalData).join("");
}
function Snumber(data){
    let lines = data.split("\n");
    for(let i=0; i<lines.length; i++){
        lines[i]=(i+1)+ " " + lines[i];
    }
    return(lines);
}
function Snumbers(data){
    let lines = data.split("\n");
    let count =1;
    for(let i=0; i<lines.length; i++){
        if(lines[i]!=""){
            lines[i]=count+" "+lines[i];
            count++;
        }
    }
    return(lines);
}
function RemoveNL(data){
    let lines = data.split
}