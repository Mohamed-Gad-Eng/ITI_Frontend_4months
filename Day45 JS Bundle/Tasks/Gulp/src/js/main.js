var MyTable = document.querySelector("#myTable");
var mySelect = document.querySelector("select");

xhr = new XMLHttpRequest()
xhr.open("Get", "https://api.jsonbin.io/v3/b/68fcf992d0ea881f40bb2b6c", true)
xhr.send("")
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var users = JSON.parse(xhr.responseText).record;
        users.forEach(function (elm) {
            //   mydiv.innerHTML += elm.name + " : " + elm.username + "<br/>"
            MyTable.children[0].innerHTML += `<tr><td><img src="${elm.image}"></td>
            <td>${elm.firstName}</td><td>${elm.lastName}</td><td>${elm.phone}</td><td>${elm.address}</td><td>${elm.track}</td><td>${elm.courses}</td><td>${elm.position}</td></tr>`;
        })

    }
}