setTimeout(run, 35000);
function run() {
    var link=document.getElementById("sratimPlayer_html5_api").src;
    document.getElementsByClassName("mt-2")[1].textContent="download";
    document.getElementsByClassName("mt-2")[1].className="btn btn-success mr-3";
    document.getElementsByClassName("btn btn-success mr-3")[1].innerHTML='<a href="'+link+'"style="color: white ; text-decoration: none">download</a>'
    // document.getElementsByClassName("btn btn-success mr-3")[1].addEventListener("click", download);
    // function download() {
    //     window.open(link)
    // }
    if (link!=document.getElementById("sratimPlayer_html5_api").src){
        setTimeout(run, 15000);
        alert("not done")

    }
    else {
        alert("load done")
    }
}
