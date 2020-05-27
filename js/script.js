var aboutBox = document.querySelector("#Box1");
var iconAbout = document.querySelector("#iconAbout");var mobileNavBtn = document.querySelector ('#mobile-nav-btn');
var navigationList = document.querySelector('.navigation-list');


aboutBox.addEventListener("mouseover", function(e){
    iconAbout.innerHTML='About me'
})
aboutBox.addEventListener("mouseleave", function(e){
    iconAbout.innerHTML='<i class="fa fa-user" aria-hidden="true"></i>'
})

var projectBox = document.querySelector("#Box2");
var iconProject = document.querySelector("#iconProject");
projectBox.addEventListener("mouseover", function(e){
    iconProject.innerHTML='Projects'
})
projectBox.addEventListener("mouseleave", function(e){
    iconProject.innerHTML='<i class="fa fa-file" aria-hidden="true"></i>'
})

var blogBox = document.querySelector("#Box3");
var iconBlog = document.querySelector("#iconBlog");
blogBox.addEventListener("mouseover", function(e){
    iconBlog.innerHTML='Blog'
})
blogBox.addEventListener("mouseleave", function(e){
    iconBlog.innerHTML='<i class="fa fa-rss" aria-hidden="true"></i>'
})

var contactBox = document.querySelector("#Box4");
var iconContact = document.querySelector("#iconContact");
contactBox.addEventListener("mouseover", function(e){
    iconContact.innerHTML='Contact me'
})
contactBox.addEventListener("mouseleave", function(e){
    iconContact.innerHTML='<i class="fa fa-phone" aria-hidden="true">'
})


mobileNavBtn.addEventListener('click', function () {
    navigationList.classList.toggle('navigation-list-closed')
    navigationList.classList.add('navigation-transition');
})

navigationList.addEventListener('transitionend',function () {
    navigationList.classList.remove('navigation-transition');
})