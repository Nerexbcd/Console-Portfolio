var socials = ["Github"]
var socialsref = ["https://github.com/apascoa"]
var aboutmetxt = "Under development"

function newmainp(){
    var p = document.createElement('p');
    p.innerHTML = "User@Portfolio:~ $";
    var a = document.createElement('a');
    a.innerHTML = "_";
    a.id = "text";
    a.className = "blink";
    document.getElementById('textcont').appendChild(p).appendChild(a);
    document.getElementById("EndOfPage").scrollIntoView();
}
function newmenu(){
    var title = document.createElement('p');
    title.innerHTML = "### Menu ###";
    title.className = "yellow";
    document.getElementById('textcont').appendChild(title);
    var homeopt = document.createElement('p');
    var aboutopt = document.createElement('p');
    var socialopt = document.createElement('p');
    var clearopt = document.createElement('p');
    homeopt.innerHTML = "Home";
    aboutopt.innerHTML = "About";
    socialopt.innerHTML = "Social";
    clearopt.innerHTML = "Clear";
    homeopt.className = "orange";
    aboutopt.className = "orange";
    socialopt.className = "orange";
    clearopt.className = "orange";
    homeopt.id = "selecting";
    aboutopt.id = "selecting";
    socialopt.id = "selecting";
    clearopt.id = "selecting";
    homeopt.onclick = function(){home();optselected();};
    aboutopt.onclick = function(){about();optselected();};
    socialopt.onclick = function(){social();optselected();};
    clearopt.onclick = function(){clear();};
    document.getElementById('textcont').appendChild(homeopt);
    document.getElementById('textcont').appendChild(aboutopt);
    document.getElementById('textcont').appendChild(socialopt);
    document.getElementById('textcont').appendChild(clearopt);
    newmainp();
}
function menuopts(){
    var menuopt = document.createElement('p');
    menuopt.innerHTML = "Menu";
    menuopt.className = "orange";
    menuopt.id = "selecting";
    menuopt.onclick = function(){menu();};
    document.getElementById('textcont').appendChild(menuopt);
}
function menu () {
    document.getElementById("selecting").onclick = function(){};
    document.getElementById("selecting").className = "blue";
    document.getElementById("selecting").id = "finished";
    document.getElementById("text").className = "";
    document.getElementById("text").innerHTML = "Menu";
    document.getElementById("text").id = "finished";
    newmenu ();
}
function optselected(){
    newmainp();
    for (var i = 0; i < 4 ; i++) {
        document.getElementById("selecting").onclick = function(){};
        document.getElementById("selecting").className = "blue";
        document.getElementById("selecting").id = "finished";
    }
}
function start(){
    document.getElementById("text").className = "";
    document.getElementById("text").innerHTML = "start";
    document.getElementById("startbt").innerHTML = "";
    document.getElementById("text").id = "finished";
    newmenu();
}
function home(){
    document.getElementById("text").className = "";
    document.getElementById("text").innerHTML = "Home";
    document.getElementById("text").id = "finished";
    var warning = document.createElement('p');
    var title = document.createElement('p');
    title.innerHTML = "### Welcome to my Portfolio ###";
    warning.innerHTML = "!! Website in Development !!";
    title.className = "yellow";
    warning.className = "red";
    document.getElementById('textcont').appendChild(title);
    document.getElementById('textcont').appendChild(warning);
    menuopts();
}
function about(){
    document.getElementById("text").className = "";
    document.getElementById("text").innerHTML = "About";
    document.getElementById("text").id = "finished";
    var aboutme = document.createElement('p');
    var title = document.createElement('p');
    title.innerHTML = "### About Me ###";
    title.className = "yellow";
    aboutme.innerHTML = aboutmetxt;
    document.getElementById('textcont').appendChild(title);
    document.getElementById('textcont').appendChild(aboutme);
    menuopts();
}
function social(){
    document.getElementById("text").className = "";
    document.getElementById("text").innerHTML = "Social";
    document.getElementById("text").id = "finished";
    var title = document.createElement('p');
    title.innerHTML = "### Social ###";
    title.className = "yellow";
    document.getElementById('textcont').appendChild(title);
    for (var i = 0; i < socials.length; i++) {
        var social = document.createElement('a');
        social.innerHTML = socials[i];
        social.className = "orange";
        social.href = socialsref[i];
        social.target = "_blank";
        document.getElementById('textcont').appendChild(document.createElement('p')).appendChild(social);
    }
    menuopts();
}
function clear(){
    document.getElementById("text").className = "";
    document.getElementById("text").innerHTML = "Clear";
    document.getElementById("text").id = "finished";
    document.getElementById("textcont").innerHTML = "";
    newmenu();
}