// 1- Using document object method
// a- Find all images in page by two ways 
// (document default collection and document methods)
images1 = document.images;
AllImg = document.getElementsByTagName("img");

// b- Find all options for City drop down list
cities = document.getElementsByName("City")[0].children;

Array.from(cities).forEach(element => {
    console.log(element.textContent);
})

// c- Find all rows for second table in page
rows = document.getElementsByTagName("table")[1].getElementsByTagName("tr");  //direct child is tbody
Array.from(rows).forEach(element => {
    console.log(element);
})

// d- Find all elements that contain class name fontBlue
elements = document.getElementsByClassName("fontBlue")
Array.from(elements).forEach(element => {
    console.log(element);
})


// 2- Do the following actions on the following HTML elements
// a- Get first anchor inside the second table then change its' href property
// to training.com and it's text to "Training"
anchors = document.getElementsByTagName("table")[1].getElementsByTagName("a");
anchors[0].href = "https://www.training.com";
anchors[0].textContent = "Training";

// b- Find last image and change its borders to : solid pink 2px
arr = Array.from(AllImg);
arr[arr.length-1].style.border = "solid pink 2px";

// c- create Javascript function to Find all checkboxes (checked) in userData form
function allCheckboxes(){
    var checks = Array.from(document.getElementsByTagName("input"))
    .filter(function(eml){
        if(eml.type == "checkbox" && eml.checked == true){
            return true;
        }
        else{
            return false;
        }
    })
    return checks;
}
allCheckboxes()

// d- Find element with id value "example" then change it's background color to pink
elm1 = document.getElementById("example")
elm1.style.backgroundColor = "pink";

// 3-SlideShow
// look for gallery.html in the folder

