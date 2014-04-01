/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var panel;

function keydownResponse()
{
    panel.innerHTML += "<br>Key pressed: ";
}
function keyupResponse()
{
    panel.innerHTML += "<br>Key released: ";
}
function keypressResponse(e)
{
    var keynum = (window.event) ? event.keyCode : e.which;
    panel.innerHTML += String.fromCharCode(keynum);
}

function init()
{
    panel = document.getElementById("panel");
    panel.innerHTML = "Press a key...<br>";
    
    document.onkeydown = keydownResponse;
    document.onkeyup = keyupResponse;
    document.onkeypress = keypressResponse;
}

document.addEventListener("DOMContentLoaded", init, false);

