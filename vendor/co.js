/*
    countMe a jQuery plugin for count number
    Author: Qasim Sarwari
    Github: https://github.com/Qasim345
*/
jQuery.fn.countMe=function(t,e){if(void 0!==t||void 0!==e){var n=0,r=this.html();return setTimeout(()=>{var t=setInterval(()=>{n++,this.text(n),n==r&&clearInterval(t)},e)},t),this}alert("Worning!\ndelay and speed can't be empty!")};