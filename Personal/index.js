

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("email-icon").addEventListener("click", function() {
        window.location.href = "mailto:ak5488919@gmail.com";
    })

    document.getElementById("whatsapp-icon").addEventListener("click", function() {
        window.open("https://wa.me/7498185184", "_blank")
    })

    document.getElementById("github-icon").addEventListener("click", function() {
        window.open("https://github.com/asfkhan", "_blank")
        })

    document.getElementById("linkedin-icon").addEventListener("click", function(){
        window.open("https://www.linkedin.com/in/aseef-khan","_blank")
    })
})
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("email-icon2").addEventListener("click", function() {
        window.location.href = "mailto:ak5488919@gmail.com";
    })

    document.getElementById("whatsapp-icon2").addEventListener("click", function() {
        window.open("https://wa.me/7498185184", "_blank")
    })

    document.getElementById("github-icon2").addEventListener("click", function() {
        window.open("https://github.com/asfkhan", "_blank")
        })

    document.getElementById("linkedin-icon2").addEventListener("click", function(){
        window.open("https://www.linkedin.com/in/aseef-khan","_blank")
    })
})

function toggleText(element) {
var moreText = element.previousElementSibling;
if (moreText.style.display === "none" || moreText.style.display === "") 
{
    moreText.style.display = "inline";
    element.textContent = "See Less";
} 
else
    {
        moreText.style.display = "none";
        element.textContent = "See More";
    }
}


var dialogBox1 = document.getElementById("firstdialogBox")
var eventLi1 = document.getElementById("first")
var closeBtn1 = document.getElementsByClassName("close")[0]
eventLi1.onclick = function () {
    dialogBox1.style.display = "block";
}
closeBtn1.onclick = function () {
    dialogBox1.style.display = "none";
}
var dialogBox2 = document.getElementById("seconddialogBox")
var eventLi2 = document.getElementById("second")
var closeBtn2 = document.getElementsByClassName("close")[1]
eventLi2.onclick = function () {
    dialogBox2.style.display = "block";
}
closeBtn2.onclick = function () {
    dialogBox2.style.display = "none";
}
var dialogBox3 = document.getElementById("thirddialogBox")
var eventLi3 = document.getElementById("third")
var closeBtn3 = document.getElementsByClassName("close")[2]
eventLi3.onclick = function () {
    dialogBox3.style.display = "block";
}
closeBtn3.onclick = function () {
    dialogBox3.style.display = "none";
}
var dialogBox4 = document.getElementById("fourthdialogBox")
var eventLi4 = document.getElementById("fourth")
var closeBtn4 = document.getElementsByClassName("close")[3]
eventLi4.onclick = function () {
    dialogBox4.style.display = "block";
}
closeBtn4.onclick = function () {
    dialogBox4.style.display = "none";
}
var dialogBox5 = document.getElementById("fifthdialogBox")
var eventLi5 = document.getElementById("fifth")
var closeBtn5 = document.getElementsByClassName("close")[4]
eventLi5.onclick = function () {
    dialogBox5.style.display = "block";
}
closeBtn5.onclick = function () {
    dialogBox5.style.display = "none";
}
var dialogBox6 = document.getElementById("sixthdialogBox")
var eventLi6 = document.getElementById("sixth")
var closeBtn6 = document.getElementsByClassName("close")[5]
eventLi6.onclick = function () {
    dialogBox6.style.display = "block";
}
closeBtn6.onclick = function () {
    dialogBox6.style.display = "none";
}
var dialogBox7 = document.getElementById("seventhdialogBox")
var eventLi7 = document.getElementById("seventh")
var closeBtn7 = document.getElementsByClassName("close")[6]
eventLi7.onclick = function () {
    dialogBox7.style.display = "block";
}
closeBtn7.onclick = function () {
    dialogBox7.style.display = "none";
}
