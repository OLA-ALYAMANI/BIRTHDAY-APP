// let userName = document.getElementById("nameInput").value;
// let birthdayDay = parseInt(document.getElementById("dayInput").value);
// let birthdayMonth = parseInt(document.getElementById("monthInput").value);
// let userName = localStorage.getItem("userName");
// let birthdayDay = parseInt(localStorage.getItem("birthdayDay"));
// let birthdayMonth = parseInt(localStorage.getItem("birthdayMonth"));

let userName = localStorage.getItem("Name");
let birthdayDay = parseInt(localStorage.getItem("BirthDay Day"));
let birthdayMonth = parseInt(localStorage.getItem("Birthday Month"));

// document.getElementById("title").textContent = `🎂 عيد ميلاد سعيد يا ${userName}!`;

// function getNextBirthday() {

//   if (!birthdayDay || !birthdayMonth) return null;
//   const now = new Date();
//   const currentYear = now.getFullYear();
//   let nextBirthday = new Date(currentYear, birthdayMonth - 1, birthdayDay);

//   if (nextBirthday < now) {
//     nextBirthday = new Date(currentYear + 1, birthdayMonth - 1, birthdayDay);
//   }
//   return nextBirthday;
// }

document.addEventListener("DOMContentLoaded", function() {
   if (document.getElementById("days")) {
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
});

// COUNTDOWN THE DATE
// function updateCountdown() {
//   const now = new Date();
//   const target = getNextBirthday();
//   const diff = target - now;

//  if (diff <= 0) {
  // document.querySelector(".subtitle").textContent =
  //   `اليوم هو عيد ميلادك يا ${userName}! 🎉`;

//   ["days","hours","minutes","seconds"].forEach(id => {
//     document.getElementById(id).textContent = 0;
//   });
//   return;
// }

//   const seconds = Math.floor(diff / 1000);
//   const minutes = Math.floor(seconds / 60);
//   const hours = Math.floor(minutes / 60);
//   const days = Math.floor(hours / 24);

//   const remHours = hours % 24;
//   const remMinutes = minutes % 60;
//   const remSeconds = seconds % 60;

//   document.getElementById("days").textContent = days;
//   document.getElementById("hours").textContent = remHours;
//   document.getElementById("minutes").textContent = remMinutes;
//   document.getElementById("seconds").textContent = remSeconds;
// }

function updateCountdown() {
    const day = parseInt(localStorage.getItem("BirthDay Day"));
    const month = parseInt(localStorage.getItem("Birthday Month"));
    const userName = localStorage.getItem("Name");

    if (!day || !month) return;

    const now = new Date();
    let target = new Date(now.getFullYear(), month - 1, day);

    if (target < now) {
        target.setFullYear(now.getFullYear() + 1);
    }

    const diff = target - now;

    if (diff <= 0) {
        document.querySelector(".subtitle").textContent = `اليوم هو عيد ميلادك يا ${userName}! 🎉`;
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

// setInterval(updateCountdown, 1000);
// updateCountdown();

function goBirthday(){
    window.location.href = "../احتفال عيد الميلاد.html"
}