const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"])
 
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let nav = document.querySelector('nav')
let newA = document.createElement('a');
let newA2 = document.createElement('a')
nav.prepend(newA2);
nav.appendChild(newA);

let navContent = document.querySelectorAll('a');
navContent[0].textContent = "Hello"
navContent[1].textContent = (siteContent["nav"]["nav-item-1"]);
navContent[2].textContent = (siteContent["nav"]["nav-item-2"]);
navContent[3].textContent = (siteContent["nav"]["nav-item-3"]);
navContent[4].textContent = (siteContent["nav"]["nav-item-4"]);
navContent[5].textContent = (siteContent["nav"]["nav-item-5"]);
navContent[6].textContent = (siteContent["nav"]["nav-item-6"]);
navContent[7].textContent = "Goodbye"

navContent.forEach((a) => {
  a.style.color = "green"
});

let domText = document.querySelector("h1");
domText.textContent = "dom is awesome"

let getStarted = document.querySelector(".cta-text button")
getStarted.textContent = "Get Started"

let topContentHeader = document.querySelectorAll(".text-content h4")
topContentHeader[0].textContent = "Features"
topContentHeader[1].textContent = "About"

let topContent = document.querySelectorAll(".text-content p")
topContent[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse ei ornare nisi. Nullan convallis augue justo, at imperdiet metus scelerisque quis."
topContent[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse ei ornare nisi. Nullan convallis augue justo, at imperdiet metus scelerisque quis."

let bottomContentHeader = document.querySelectorAll(".bottom-content .text-content h4")
bottomContentHeader[0].textContent = "Services"
bottomContentHeader[1].textContent = "Product"
bottomContentHeader[2].textContent = "Vision"

let bottomContent = document.querySelectorAll(".bottom-content .text-content p");
bottomContent[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse ei ornare nisi. Nullan convallis augue justo, at imperdiet metus scelerisque quis."
bottomContent[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse ei ornare nisi. Nullan convallis augue justo, at imperdiet metus scelerisque quis."
bottomContent[2].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse ei ornare nisi. Nullan convallis augue justo, at imperdiet metus scelerisque quis."

let contactSectionHeader = document.querySelector(".contact h4");
contactSectionHeader.textContent = "Contact"

let contactSection = document.querySelectorAll(".contact p");
contactSection[0].textContent = "123 Way 456 Street Somewhere, USA"
contactSection[1].textContent = "1 (888) 888-8888"
contactSection[2].textContent = "sales@greatidea.io"

let footerSection = document.querySelector("footer p");
footerSection.textContent = "Copyright Great Idea! 2018"