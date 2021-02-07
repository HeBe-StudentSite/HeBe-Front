// let jsdom = require('jsdom'); 
// let window = jsdom.jsdom().createWindow();
// let $ = require('jquery')(window);
// console.log('hello');
$(document).ready(function () {
    var options = {
        start: 0,
        fadeIn: 400,
        loop: true,
        buttonPrev: 'Previous',
        buttonNext: 'Next',
        style: 'carousel',
        spacing: -0.6,
        nav: false,
        buttons: true
    };
    $('.my-flipster').flipster(options);
});
