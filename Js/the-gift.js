// THE GIFT
// document.getElementById("title").textContent = localStorage.getItem("Name");

document.addEventListener("DOMContentLoaded", function() {
    const userName = localStorage.getItem("Name");
    const titleElement = document.querySelector(".gift-area #title");
    if (titleElement && userName) {
        titleElement.textContent = `🎉 رسالة لك يا ${userName} 🎉`;
    }
});

function openGift() {
  document.querySelector(".lid").style.transform = "translateY(-60px) rotate(20deg)";
  document.getElementById("message").classList.remove("hidden");
}

function goCountdown() {
  window.location.href = "/يوم-الميلاد-التالي.html";
}

function goBirthday(){
  window.location.href = "/الرئيسية.html.html"
}