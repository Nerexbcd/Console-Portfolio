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
    var homeopt = document.createElement('p');
    homeopt.innerHTML = "Home";
    homeopt.className = "orange";
    homeopt.id = "selecting";
    homeopt.onclick = function(){home();optselected();};
    document.getElementById('textcont').appendChild(homeopt)
    newmainp();
}
function menuopts(){
    var menuopt = document.createElement('p');
    menuopt.innerHTML = "Menu";
    menuopt.className = "orange";
    menuopt.id = "selecting";
    menuopt.onclick = function(){menu();};
    document.getElementById('textcont').appendChild(menuopt)
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
    document.getElementById("selecting").onclick = function(){};
    document.getElementById("selecting").className = "blue";
    document.getElementById("selecting").id = "finished";
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
    var title = document.createElement('p');
    title.innerHTML = "### Welcome to my Portfolio ###";
    title.className = "yellow";
    document.getElementById('textcont').appendChild(title);
    var p = document.createElement('p');
    p.innerHTML = "Website in Development";
    p.className = "red";
    document.getElementById('textcont').appendChild(p);
    menuopts();
}