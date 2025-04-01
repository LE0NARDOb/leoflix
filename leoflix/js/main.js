
const options = {
    method: 'GET',
    headers:{
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOWVhMjVmYTU4MDkzODllNzJiZTEzMjU4NTYyYWRjYiIsIm5iZiI6MTc0MzA0NDQxNi45ODU5OTk4LCJzdWIiOiI2N2U0YmY0MDVlOGU1YzliYWNiYTJkZmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ZglfMQ49Pt7xOzlMc_uSjeYNvR0WZpf_9QiHbCGHVoM'
    }
};



function toggleLoading(){
    let loader = document.querySelector(".loader");
    loader.style.display = loader.style.display == 'none' ? 'block' : 'none';
}

window.addEventListener("scroll", function(){
    const navbar = this.document.querySelector('.navbar');

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }
    else{
        navbar.classList.remove('scrolled');
    }
})