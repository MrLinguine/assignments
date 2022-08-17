var catNames = document.querySelectorAll("ol#cat-names > li")
console.log(Array.from(catNames))

for (var i = 0; i< catNames.length; i++){
    catNames[i].textContent = "Fenrir is the best"
}

