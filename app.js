var sign, horoscope, today, yesterday, tomorrow;
document.querySelector(".horoscope-content").style.display = "none";
sign = document.getElementById("signs");

today = document.getElementById("today");
week = document.getElementById("week");
month = document.getElementById("month");

// fetch(`https://cors-anywhere.herokuapp.com/http://theastrologer-api.herokuapp.com/api/horoscope/${sunsign}/${day}`);

horoscope = function (day, sign) {
  fetch(
    `https://cors-anywhere.herokuapp.com/http://horoscope-api.herokuapp.com/horoscope/${day}/${sign}`
  )
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      document.querySelector(".horoscope-content").textContent = data.horoscope;
      document.querySelector(".horoscope-content").style.display = "block";
      document.getElementById("date").textContent = data.date;
    })
    .catch((error) => alert("There has been some error!"));
};

document.getElementById("signs").addEventListener("click", () => {
  var sunsign, day;
  sunsign = sign.value;
  if (sunsign != "") {
    document.querySelector(".sign-name").textContent = sunsign;
    horoscope("today", sunsign);
  }
});

today.addEventListener("click", () => {
  sunsign = sign.value;
  horoscope("today", sunsign);
});
week.addEventListener("click", () => {
  sunsign = sign.value;
  horoscope("week", sunsign);
});
month.addEventListener("click", () => {
  sunsign = sign.value;
  horoscope("month", sunsign);
});
