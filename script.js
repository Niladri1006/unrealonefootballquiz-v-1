let start = document.getElementById("start");
let prem = document.getElementById("prem");
let laliga = document.getElementById("laliga");
let ucl = document.getElementById("ucl");
let wc = document.getElementById("wc");
let ms = document.getElementById("ms");
let pvid = document.getElementById("pvid");
let cont = document.getElementById("cont");
let modal = document.getElementById("modal");
let mstart = document.getElementById("mstart");

start.addEventListener("click",()=>{
    start.style.display = "none";
    prem.style.display = "block";
    laliga.style.display = "block";
    ucl.style.display = "block";
    wc.style.display = "block";
})


prem.addEventListener("click",()=>{
    prem.style.display = "none";
    laliga.style.display = "none";
    ucl.style.display = "none";
     wc.style.display = "none";
    pvid.style.display = "none";
    modal.style.display = "block";
    cont.style.backgroundImage = "url('60624d85-d5db-49e6-a532-1e29607c6cdf.png')";
});


mstart.addEventListener("click",()=>{
    modal.style.display = "none";
})
