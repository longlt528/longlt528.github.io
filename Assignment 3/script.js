"use strict";

const enterEmailEl = document.getElementById("enter-email");
const btnSubmit1 = document.getElementById("btn-submit");

const btnViewmore = document.querySelector(".btn-viewmore");
const btnViewmoreExp = document.querySelector(".btn-viewmore-exp");
const btnViewmoreSkill = document.querySelector(".btn-viewmore-skill");
const btnViewmoreLanguage = document.querySelector(".btn-viewmore-language");
const btnViewmoreActivity = document.querySelector(".btn-viewmore-activity");
const btnViewmoreEducation = document.querySelector(".btn-viewmore-education");
const btnViewmoreHobby = document.querySelector(".btn-viewmore-hobby");

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let keyViewless = [0, 0, 0, 0, 0, 0]; // Khóa xác định hiển thị view less

// Functions
const addHidden = function (className) {
  document.querySelector(className).classList.add("hidden");
};

const removeHidden = function (className) {
  document.querySelector(className).classList.remove("hidden");
};

const viewLessEntity = function (className) {
  document.querySelector(className).classList.remove("entity-down");
  document.querySelector(className).classList.add("entity-up");
};

const viewMoreEntity = function (className) {
  document.querySelector(className).classList.add("entity-down");
  document.querySelector(className).classList.remove("entity-up");
};

const clickBtnViewmore = function (
  btnClassName,
  commentClassName,
  entityClassName,
  keyViewlessId
) {
  console.log(btnClassName);
  const btnObj = document.querySelector(btnClassName);
  if (btnObj.value === "View more") {
    console.log("view more");
    btnObj.value = "View less";
    removeHidden(commentClassName);
    viewLessEntity(entityClassName);
    keyViewless[keyViewlessId] = 1;
  } else {
    console.log("view less");
    btnObj.value = "View more";
    addHidden(commentClassName);
    viewMoreEntity(entityClassName);
    keyViewless[keyViewlessId] = 0;
  }
};

// Click button submit email
btnSubmit1.addEventListener("click", function () {
  if (regex.test(enterEmailEl.value)) {
    addHidden(".authentication");
    removeHidden(".personal-info-ul");
  } else {
    addHidden(".note-email-1");
    removeHidden(".note-email-2");
  }
});

// Click buttons View more
btnViewmoreExp.addEventListener("click", function () {
  clickBtnViewmore(".btn-viewmore-exp", ".comment-exp", ".entity-exp", 0);
});

btnViewmoreSkill.addEventListener("click", function () {
  clickBtnViewmore(".btn-viewmore-skill", ".comment-skill", ".entity-skill", 1);
});

btnViewmoreLanguage.addEventListener("click", function () {
  clickBtnViewmore(
    ".btn-viewmore-language",
    ".comment-language",
    ".entity-language",
    2
  );
});

btnViewmoreActivity.addEventListener("click", function () {
  clickBtnViewmore(
    ".btn-viewmore-activity",
    ".comment-activity",
    ".entity-activity",
    3
  );
});

btnViewmoreEducation.addEventListener("click", function () {
  clickBtnViewmore(
    ".btn-viewmore-education",
    ".comment-education",
    ".entity-education",
    4
  );
});

btnViewmoreHobby.addEventListener("click", function () {
  clickBtnViewmore(".btn-viewmore-hobby", ".comment-hobby", ".entity-hobby", 5);
});

// Mouse over job, skill, education

const containerJob = document.querySelectorAll(".sub-container-job");
const containerViewmore = document.querySelectorAll(".container-viewmore");
const length = containerJob.length;

console.log(containerJob);

containerJob[0].addEventListener("mouseover", function () {
  mouseOver(0);
});
containerJob[1].addEventListener("mouseover", function () {
  mouseOver(1);
});
containerJob[2].addEventListener("mouseover", function () {
  mouseOver(2);
});
containerJob[3].addEventListener("mouseover", function () {
  mouseOver(3);
});
containerJob[4].addEventListener("mouseover", function () {
  mouseOver(4);
});
containerJob[5].addEventListener("mouseover", function () {
  mouseOver(5);
});

containerJob[0].addEventListener("mouseout", function () {
  mouseOut(0);
});
containerJob[1].addEventListener("mouseout", function () {
  mouseOut(1);
});
containerJob[2].addEventListener("mouseout", function () {
  mouseOut(2);
});
containerJob[3].addEventListener("mouseout", function () {
  mouseOut(3);
});
containerJob[4].addEventListener("mouseout", function () {
  mouseOut(4);
});
containerJob[5].addEventListener("mouseout", function () {
  mouseOut(5);
});

function mouseOver(id) {
  for (let i = 0; i < length; i++)
    if (id === i) removeHidden("." + containerViewmore[id].classList[1]);
}

function mouseOut(id) {
  if (keyViewless[id] === 0)
    addHidden("." + containerViewmore[id].classList[1]);
}
