localStorage.setItem("name" ,"ahmed");
localStorage.setItem("theme" ,"dark");


const username = localStorage.getItem("name");
console.log(username);


localStorage.removeItem("name");
localStorage.clear()

for(i=0 ; i < localStorage.length ; i++){
    const key = localStorage.key(i);
    console.log(key, localStorage.getItem(key))
}

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz


sessionStorage.setItem("token" , "abc");
sessionStorage.setItem("sport" , "football");

const myToken = sessionStorage.getItem("token")
console.log(myToken)

// sessionStorage.removeItem("token");
// sessionStorage.clear()
for(i=0 ; i < sessionStorage.length ; i++){
    const key = sessionStorage.key(i);
    console.log(key, sessionStorage.getItem(key));
}
