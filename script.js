document.addEventListener("DOMContentLoaded", function () {
    let menu = document.querySelector("#menu-bar");
    let header = document.querySelector("header");
    let cursor1 = document.querySelector(".cursor-1");
    let cursor2 = document.querySelector(".cursor-2");
    
    // menu.style.display = "block";
    
    menu.onclick = () => {
        header.classList.toggle("active");
        menu.classList.toggle("fa-times");
    }; 
    window.onscroll = () => {
        header.classList.remove("active");
        menu.classList.remove("fa-times");
    };  

  
window.onmousemove = (e) => {
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

let links = document.querySelectorAll('a').forEach(links => {

    links.onmouseenter = () => {
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () => {
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

})

function sbmit(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let num = document.getElementById('num').value;
    let message = document.getElementById('message').value;

    let formData = {
        name: name,
        email: email,
        num: num,
        message: message
    };
    localStorage.setItem("formData", JSON.stringify(formData));
    alert("Data saved successfully")
}
document.getElementById("rekha").addEventListener("click", sbmit)

});