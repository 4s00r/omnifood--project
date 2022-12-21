///////////////////////////////////////////////////////////

// console.log("hello world");

// const let var - variable declarations
// let const - blocked scoped
// var - function scoped

const myName = 'Jonas Schedtmann';
console.log(myName);

const h1 = document.querySelector(".heading-primary");
console.log(h1);  
// set current year


///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function(){
  headerEl.classList.toggle("nav-open");
})
///////////////////////////////////////////////////////////
// smooth scrolling animation for all brouser
const allLinks= document.querySelectorAll('a:link');
console.log(allLinks);
allLinks.forEach(function(link){
  link.addEventListener('click', function(e){
    // console.log(e);
    e.preventDefault();
    const href = link.getAttribute("href");
    // console.log(href);

    // scroll back to top
    if (href === "#") window.scrollTo({
      top:0,
      behavior:"smooth",
    });


    // scroll to other link
    if (href !== "#" && href.startsWith("#")) {

      const sectionEl =  document.querySelector(href);
      //  console.log(sectionEl);
      sectionEl.scrollIntoView({
        behavior:"smooth"
      });
    }

// close mobile navigation

if( link.classList.contains('main-nav-link'))
headerEl.classList.toggle("nav-open");

});

});
///////////////////////////////////////////////////////////
// sticky navigation ber 

const sectionHeroEl = document.querySelector(".section-hero");


  const obs = new IntersectionObserver(
    function(entries) {
    const ent = entries[0];
    console.log(ent);
    if(ent.isIntersecting === false)
    {
      document.body.classList.add("sticky");
    }

    if(ent.isIntersecting === true)
    document.body.classList.remove("sticky");
      
  }, 
  
  {
    
    // in the viewport
    // null means viewport
    root: null,
    threshold: 0,
    rootMargin:"-80px",
  }
  );
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {

  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();


// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
