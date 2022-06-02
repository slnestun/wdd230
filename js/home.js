//create a veriable to store lessons names and links
let myLessons = {};

myLessons = {
  weekLessons: [
    {
      lessons: "Lesson 02: ",
      linkName: "Design Principles Document",
      link: "./lesson2/index.html",
    },
    {
      lessons: "Lesson 03: ",
      linkName: "Website Planning Document",
      link: "./lesson3/index.html",
    },
    {
      lessons: "Lesson 04: ",
      linkName: "Chamber Of Comerce",
      link: "./chamber/index.html",
    },
    {
      lessons: "Lesson 05: ",
      linkName: "BOM",
      link: "./bom/index.html",
    },
    {
      lessons: "Lesson 06: ",
      linkName: "Camber of comerce Home",
      link: "./chamber/index.html",
    },
    {
      lessons: "Lesson 07: ",
      linkName: "Lazy Loading",
      link: "./lesson7/lazyload.html",
    },
    {
      lessons: "Lesson 08: ",
      linkName: "",
      link: "",
    },
    {
      lessons: "Lesson 09: ",
      linkName: "",
      link: "",
    },
    {
      lessons: "Lesson 10: ",
      linkName: "",
      link: "",
    },
    {
      lessons: "Lesson 11: ",
      linkName: "",
      link: "",
    },
  ],
};

//foreach to create li and a ahref elements
let weeklyLessons = document.getElementById("lessons");
myLessons.weekLessons.forEach((weekLessons) => {
  let listLesson = document.createElement("li");
  listLesson.textContent = weekLessons.lessons;
  weeklyLessons.appendChild(listLesson);

  let listLinks = document.createElement("a");
  listLinks.innerText = weekLessons.linkName;
  listLinks.href = weekLessons.link;
  listLinks.target = "_blank";
  listLesson.appendChild(listLinks);
});
//console.log(weeklyLessons)

//create an object to store last date data
let oLastModif = new Date(document.lastModified);
let currentYear = oLastModif.getFullYear();
document.querySelector("#year").innerText = currentYear;

let dateFormated = oLastModif.toLocaleString();
//console.log(dateFormated)

document.getElementById("currentDate").innerText = dateFormated;
