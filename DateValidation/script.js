/*******w***********

    Competency 19
    Name: Alina Bozynski
    Date: March 27 2022
    Description: Javascript file for Competency 19 (Module 8).

*******************/

document.addEventListener("DOMContentLoaded", load);

function load() {
  document.getElementById("dates").reset();
  document.getElementById("goon").addEventListener("click", next);
}

function next() {
  let currentMonth = new Date().getMonth() + 1;

  let userMonth = document.getElementById("monthsSelect").value;

  if (userMonth >= currentMonth) {
    document.getElementById("yearSelect").style.display = "block";
    document.getElementById("goon").style.display = "none";
    document.getElementById("continue").style.display = "block";
    document.getElementById("continue").addEventListener("click", nextAgain);
  }
}

function nextAgain() {
  let currentYear = new Date().getFullYear();

  let userYear = document.getElementById("yearSelect").value;

  if (userYear >= currentYear) {
    window.location.assign("http://csh.bz/line/05x5.html");
  }
}
