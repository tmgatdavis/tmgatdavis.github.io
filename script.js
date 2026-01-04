(function(){
    'use strict';
    console.log('reading js');

    /*
        * Page switching: change section class hidden / visible
        * Hamburger menu: open / close on icon tap. change footer visibility.
    */

    // Selectors for each page + nav bar
    let overlay = document.querySelector('#nav-overlay');
    let home = document.querySelector('#home');
    let about = document.querySelector('#about');
    let events = document.querySelector('#events');
    let menu = document.querySelector('#menu');
    let gallery = document.querySelector('#gallery');
    let contact = document.querySelector('#contact');
    let nav = document.querySelector('#hamburger');
    let homelink = document.querySelectorAll('header .logo');

    let currPage = document.querySelector('.visible');
    let lastOpenedPage;

    // Allow logo tap to return to home page
    homelink.forEach(function(logo){
        logo.addEventListener('click', function(){
            switchPage("HOME");
        });
    });
    
    // Handling opening nav
    nav.addEventListener('click', function (){
        if(currPage.id == 'nav-overlay') {
            show(lastOpenedPage);
            hide(currPage);
            currPage = lastOpenedPage;
            console.log(currPage.id);
        } else {
            lastOpenedPage = currPage;
            hide(currPage);
            show(overlay);
            currPage = overlay;
        }
    });

    // Handling page switching via nav
    let navlinks = document.querySelectorAll('.navlink');
    navlinks.forEach(function (link){
        link.addEventListener('click', function(){
            switchPage(link.innerHTML);
        });
    });

    function switchPage(goto) {
        console.log(currPage);
        hide(currPage);
        switch(goto) {
            case 'HOME': 
                show(home);
                currPage = home;
                break;
            case 'ABOUT': 
                show(about);
                currPage = about;
                break;
            case 'EVENTS': 
                show(events); 
                currPage = events;
                break;
            case 'MENU': 
                show(menu); 
                currPage = menu;
                break;
            case 'GALLERY': 
                show(gallery); 
                currPage = gallery;
                break;
            case 'CONTACT': 
                show(contact); 
                currPage = contact;
                break;
            default: break;
        }
    }

    function hide(page) {
        page.classList.remove('visible');
        page.classList.add('hidden');
    }

    function show(page) {
        page.classList.remove('hidden');
        page.classList.add('visible');
    }
}())