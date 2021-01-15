 const fs = require("fs")

 var directory = "./exercicenode"
/*fs.mkdir(directory, function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log("New directory successfully created.")
  }
});
fs.writeFile(`${directory}/` + "file1.txt", "", (err) => {
    if (err) {
        console.log(err)
      } else {
        console.log("ficheir crée avec succes.")
      }
})
fs.writeFileSync(`${directory}/` + "file2.txt", "")
fs.writeFileSync(`${directory}/` + "file3.txt", "")*/

function createFileInDirectorySync (directory, fileName, file) {
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory)
    }
    fs.writeFileSync(`${directory}/` + fileName, file)
  }
  function createFileInDirectoryAsync (directory, fileName, file) {
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory)
    }
    fs.writeFile(`${directory}/` + fileName, file,(err) => {
        if (err) {
            console.log(err)
          } else {
            console.log("ficheir crée avec succes.")
          }
        })
    }
  createFileInDirectoryAsync(directory,"file1.txt","")
  createFileInDirectorySync(directory,"file2.txt","")
  createFileInDirectoryAsync(directory,"file3.txt","")