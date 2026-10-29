// عدّل تاريخ الميلاد هنا (اليوم والشهر فقط)
let birthdayDay = null;
let birthdayMonth = null;
let userName = "";

function setBirthday() {
  userName = document.getElementById("nameInput").value.trim();
  birthdayDay = parseInt(document.getElementById("dayInput").value);
  birthdayMonth = parseInt(document.getElementById("monthInput").value);

  if (!userName) {
    alert("الرجاء إدخال اسمك");
    return;
  }

  if (!birthdayDay || !birthdayMonth) {
    alert("الرجاء إدخال تاريخ صحيح");
    return;
  }

  localStorage.setItem("Name", userName);
  localStorage.setItem("BirthDay Day", birthdayDay);
  localStorage.setItem("Birthday Month", birthdayMonth);

  const today = new Date();
  const todayDay = today.getDate();
  const todayMonth = today.getMonth() + 1;

  if (birthdayDay == todayDay && birthdayMonth === todayMonth){
    window.location.href = "/الهدية.html"
  }else{
    window.location.href = "/يوم-الميلاد-التالي.html"
  }

  return;

  // تحديث العنوان باسم المستخدم
  // document.getElementById("title").textContent = `🎂 عيد ميلاد سعيد يا ${userName}!`;
  
  // document.querySelector(".subtitle").textContent = "العدّ التنازلي حتى عيد ميلادك القادم:";
  // updateCountdown();
}