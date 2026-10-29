// THE GIFT
// document.getElementById("title").textContent = localStorage.getItem("Name");

function showName() {
    const userName = (localStorage.getItem("Name") || "").trim();
    // const userName = document.getElementById('nameInput')
    // const titleElement = document.querySelector(".main-area #title");
    const titleElement = document.getElementById("title");
    if (titleElement && userName) {
        titleElement.textContent = userName ? `🎉 رسالة لك يا ${userName} 🎉` : "🎉 رسالة لك يا 🎉";
    }
};

document.addEventListener("DOMContentLoaded", showName);
window.addEventListener("pageshow", showName)

function openGift() {
  document.querySelector(".lid").style.transform = "translateY(-60px) rotate(20deg)";
  document.getElementById("message").classList.remove("hidden");

  if (typeof confetti !== "function") return;
     confetti({
        count: 150,
        shapes: ["heart"],
        colors: ["#ff4d6d", "#ff85a1", "#e63946"],
        spread: 100,
        startVelocity: 46,
        gravity: 0.8,
        scalar: 1.7,
        ticks: 180
    });

    confetti({
        count: 150,
        shapes: ["star"],
        colors: ["#FFE400", "#FFBD00", "#E89400", "#FFCA6C", "#FDFFB8"],
        particleCount: 40,
        spread: 100,
        startVelocity: 46,
        scalar: 1.7,
        ticks: 180
  });
}

function goCountdown() {
  window.location.href = "/يوم-الميلاد-التالي.html";
}

function goBirthday(){
  window.location.href = "/الرئيسية.html"
}