document.getElementById("list1")


document.getElementsByTagName("p")// return collection of ps
pone = document.getElementsByTagName("p")[0]

document.getElementsByTagName("form")
document.getElementsByTagName("ol")// return collection contaian only ul 

document.getElementsByTagName("ol")[0]//== ulobj

document.getElementsByClassName("bGrey")// return collection
document.getElementsByClassName("bGrey")[1]// return table 
document.getElementsByClassName("bGrey")[2]// form


document.getElementsByName("hoppy")

//////  query selector &queryselector All select using css selectors
document.querySelector("#list1")
document.querySelector("input[type='submit']")

document.querySelector("p")

document.querySelectorAll("p")

tbl1 = document.getElementsByTagName("table")[0]
tr1 = tbl1.getElementsByTagName("tr")[0]
td2 = tr1.getElementsByTagName("td")[1]
//td2.innerHTML = "<h1>Front</h1>"
//td2.style.backgroundColor = "magenta"

//td1=tbl1.children[0].children[0].children[0]
//td1.innerHTML = "<a href='http://www.google.com'>google</a>"

tbl1.getAttribute("align")// null
tbl1.getAttribute("class")//bGrey

tbl1.setAttribute("align", "center")

//tbl1.classList.add("front")

cheks = document.getElementsByName("hoppy")
cheks[0].checked// true
cheks[0].checked = false


txt = document.querySelector("#txt")// == txt 
txt.value;

imgs = document.querySelectorAll("img")

for (var i = 0; i < imgs.length; i++) {
    imgs[i].style.border="5px dashed yellow"
}

//////// Create Elm
ulobj = document.getElementById("list1")
liobj = document.createElement("li")
liobj.innerText = "FrontEnd Track Dammitta Branch"
liobj.style.backgroundColor="lightgreen"

ulobj.appendChild(liobj)


