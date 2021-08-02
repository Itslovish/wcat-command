let fs = require("fs");
let inputArr = process.argv.slice(2);
// console.log(inputArr);

let optionsArr = [];
let filesArr = [];
for (let i = 0; i < inputArr.length; i++) {
    let firstchar = inputArr[i].charAt(0);
    if (firstchar == "-") {
        optionsArr.push(inputArr[i]);
    } else {
        filesArr.push(inputArr[i]);
    }
}
//read file
let content = "";
for (let i = 0; i < filesArr.length; i++) {
    content += fs.readFileSync(filesArr[i]) + "\r\n";
}
// console.log(content);

let contentArr = content.split("\r\n");
// console.log(contentArr);
// -s
//convert big line breaks into a single line breaks
for (let i = 0; i < optionsArr.length; i++) {
    if (optionsArr[i] == "-s") {
       

        for (let i = 1; i < contentArr.length; i++) {
            if (contentArr[i] == "") {
                contentArr[i] = null;
            } 
        }
        //   console.log(contentArr);
        let tempArr = [];
        for (let i = 0; i < contentArr.length; i++) {
            if (contentArr[i] != null) {
                tempArr.push(contentArr[i]+"\n");
                //tempArr.push("");

            }
        }
// console.log(tempArr)        
contentArr = tempArr;

    }
}
//  console.log(contentArr);
// -n give numbering to all the lines
let isNPresent = optionsArr.includes("-n");
let count = 1;
if (isNPresent == true) {
    for (let i = 0; i < contentArr.length; i++) {
        contentArr[i] = count + " " + contentArr[i];
        count++;
    }
    // contentArr = contentArr.join("\n");
}
// console.log(contentArr);
//-b give numbering to all filled lines only
let isBPresent = optionsArr.includes("-b");
let counter = 1;
if (isBPresent == true) {
    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] != "") {
            contentArr[i] = counter + " " + contentArr[i];
            counter++;
        }
    }
    // contentArr = contentArr.join("\n");
}
// console.log(contentArr);
contentArr = contentArr.join("\n");
console.log(contentArr);


