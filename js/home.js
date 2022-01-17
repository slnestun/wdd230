//create a veriable to store lessons names and links
let myLessons = {}

myLessons = {
    weekLessons: [{
            lessons: 'Lesson 02: ',
            linkName: 'Design Principles Document',
            link: './lesson2/designPage.html'
        },
        {
            lessons: 'Lesson 03: ',
            linkName: 'Title',
            link: '#'
        },
        {
            lessons: 'Lesson 04: ',
            linkName: 'Title',
            link: '#'
        },
        {
            lessons: 'Lesson 05: ',
            linkName: 'Title',
            link: '#'
        },
        {
            lessons: 'Lesson 06: ',
            linkName: 'Title',
            link: '#'
        },
        {
            lessons: 'Lesson 07: ',
            linkName: 'Title',
            link: '#'
        },
        {
            lessons: 'Lesson 08: ',
            linkName: 'Title',
            link: '#'
        },
        {
            lessons: 'Lesson 09: ',
            linkName: 'Title',
            link: '#'
        },
        {
            lessons: 'Lesson 10: ',
            linkName: 'Title',
            link: '#'
        },
        {
            lessons: 'Lesson 11: ',
            linkName: 'Title',
            link: '#'
        }
    ]
};

//foreach to create li and a ahref elements
let weeklyLessons = document.getElementById('lessons');
myLessons.weekLessons.forEach((weekLessons) => {
    let listLesson = document.createElement('li');
    listLesson.textContent = weekLessons.lessons;
    weeklyLessons.appendChild(listLesson);

    let listLinks = document.createElement('a');
    listLinks.innerText = weekLessons.linkName;
    listLinks.href = weekLessons.link;
    listLinks.target = '_blank';
    listLesson.appendChild(listLinks);
})
//console.log(weeklyLessons)

//create an object to store last date data
let oLastModif = new Date(document.lastModified);
let currentYear = oLastModif.getFullYear();
document.querySelector('#year').innerText = currentYear;

let dateFormated = oLastModif.toLocaleString();
//console.log(dateFormated)

document.getElementById('currentDate').innerText = dateFormated;