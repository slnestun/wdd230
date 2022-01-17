//create a veriable to store principles content
let myprinciples = {};

myprinciples = {
    examples: [{
            section:'section-1',
            principleTitle: 'Visual Hierarchy',
            companyName: 'Mercado Libre',
            pageLink: 'https://www.mercadolibre.com.ar/',
            screenShot: './images/visualHierarchy_MercadoLibre.jpg',
            imgDesc:'Mercado libre mobile screenshot',
            principleDescription:'I think Mercado Libre website applies very well to "Visual Hierarch" because it focuses on the product for sale. At first sight, we can notice the picture of the product, then the price, and at the end, the review starts reputation very well contrast with the background color of the site.'
        },
        {
            section:'section-2',
            principleTitle: 'Hick\'s Law',
            companyName: 'Nike',
            pageLink: 'https://www.nike.com/',
            screenShot: './images/hicksLaw_Nike.jpg',
            imgDesc:'Nike\'s mobile scrennshot',
            principleDescription:'Nike\'s website is a good example of how to apply Hick\'s law. We can notice that when we use filters because it help us find easily a specific product. Another way the company applies this principle is in the home menu, which has the specific information that users need and is comfortable navigating through the site. '
        },
        {
            section:'section-3',
            principleTitle: 'White Space and Clean Design',
            companyName: 'Ray Charles Video Museum',
            pageLink: 'https://raycharles.cydstumpel.nl/',
            screenShot: './images/whiteSpacing_RayCharles.jpg',
            imgDesc:'Ray Charles mobile screenshot',
            principleDescription:'I think the Ray Charles Video Museum website is an example of White Space and Clean Design because the white spaces on the home page focus our attention on the title of the page and what we can find on it. It also emphasizes the singer\'s image.'
        }
    ]
};

//foreach to create li and a ahref elements
let sectionPrinciples = document.getElementById('list-sections');
myprinciples.examples.forEach((example) => {
    let listExample = document.createElement('div');
    listExample.className = example.section;
    sectionPrinciples.appendChild(listExample);

    let principleTitle = document.createElement('h3');
    principleTitle.innerText = example.principleTitle;
    listExample.appendChild(principleTitle);

    let divLink = document.createElement('div');
    divLink.className = 'page-link';
    listExample.appendChild(divLink);

    let pageLink = document.createElement('a');
    pageLink.innerText = example.companyName;
    pageLink.href = example.pageLink;
    pageLink.target = "_blank";
    divLink.appendChild(pageLink);
    
    let divImg = document.createElement('div');
    divImg.className = 'img-screenshot';
    listExample.appendChild(divImg);

    let screenShot = document.createElement('img');
    screenShot.src = example.screenShot;
    screenShot.alt = example.imgDesc;
    divImg.appendChild(screenShot);

    let principleDescription = document.createElement('p');
    principleDescription.innerText = example.principleDescription;
    listExample.appendChild(principleDescription);



    
})

console.log(sectionPrinciples)


//create an object to store last date data
let oLastModif = new Date(document.lastModified);
let currentYear = oLastModif.getFullYear();
document.querySelector('#year').innerText = currentYear;

let dateFormated = oLastModif.toLocaleString();
//console.log(dateFormated)

document.getElementById('currentDate').innerText = dateFormated;