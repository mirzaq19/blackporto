/* SideBar */
function toggle(){
    let tombolAs = document.querySelector("#tombolAs");
    let main = document.querySelector("main");
    let sidebar = document.querySelector("aside");
    tombolAs.classList.toggle('active');
    main.classList.toggle('active');
    sidebar.classList.toggle('active');
}

/*Scroll Bar*/
let progressBar = document.getElementById("scrbar");
window.addEventListener("scroll",event => {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let progress = (scrollTop / scrollHeight)*100;
    progressBar.style.width = progress + "%";
})