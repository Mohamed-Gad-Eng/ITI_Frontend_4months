addEventListener('load', 
    function () {

        function deletefun() {
            alert("Elm Deleted")
        }


        updatebtn.onclick = updatefun;


        function updatefun() {
            // document.title = "updated"
           //console.log(this)
        }

        showbtn.onclick = function () {
            document.title = "Data Showed"
        }

        savebtn.onclick = savefun;
        function savefun() {
            document.title = "Data Saved"
        }

        savebtn.onclick = function () {
            document.body.style.backgroundColor = "cyan"
        }

        savebtn.addEventListener("click", savefun)

        savebtn.addEventListener("click", function () {
            document.title = "Data Saved"
        })


        mydiv.addEventListener('mouseover', function (e) {
          //  console.log("mouseover")
            // mydiv.innerText = "front end "
            // mydiv.innerHTML = "<h1 align='center'>Front</h1>"
            // console.log(this)
             console.log(e)
           // console.log(e.target)
           // console.log(e.type)





        })//mouseover

        mydiv.addEventListener('mousemove', function (e) {
            // console.log("mousemove")

            this.innerHTML="<h1 align='center'><font color='red'>"+e.x +" : "+e.y+"</font></h1>"


        })//mousemove

        mydiv.addEventListener('mouseout', function () {
           // console.log("mouseout")

        })//mouseout



        // keydown
        //txt.addEventListener('keydown', function () {

        //    res.innerText = this.value
        //    res.style.font = "bold 20px teko"
        //    res.style.color = "magenta"


        //})
        // key up
        //txt.addEventListener('keyup', function () {

        //    res.innerText = this.value
        //    res.style.font = "bold 20px agness"
        //    res.style.color = "cyan"


        //})

        // key press
        //txt.addEventListener('keypress', function () {

        //    res.innerText = this.value
        //    res.style.font = "bold 20px agness"
        //    res.style.color = "blue"


        //})

        city.addEventListener('change', function () {
            res.innerText = this.value
            res.style.font = "bold 20px agness"
             res.style.color = "red"
        })

    })//load


   
