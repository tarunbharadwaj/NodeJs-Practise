var filesystem = require('fs')

//Create a file  file name     Text to be written
fs.writefile('New Text.txt','Hello world is the sample text',function(err){
    if(err) throw err;
    console.log("File Created")
})

fs.appendfile('New Text.txt',`${Math.floor(Math.random()*1000)} This is a new number \n`,function(err){
    if(err) throw err;
    console.log("Data appended")
})

fs.readfile('New Text.txt','utf-8',function(err,data){
    if(err) throw err;
    console.log(data)
})
//utf-8 is used for encode the data

fs.rename('New Text.txt','Text file',function(err){
    if(err) throw err;
    console.log("Text has been renamed")
})

//delete file
fs.unlink('Text file',function(err){
    if(err) throw err;
    console.log("Text file deleted")
})