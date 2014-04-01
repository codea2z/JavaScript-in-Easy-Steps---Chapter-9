/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function clickResponse()
{
    this.innerHTML += "Click detected<hr>";
}

function dblclickResponse()
{
    this.innerHTML += "Doubleclick detected<br>";
}

function mousedownResponse()
{
    this.innerHTML += "Mouse button down<br>";
}

function mouseupResponse()
{
    this.innerHTML += "Mouse button up<br>";
}

function init()
{
    var panel = document.getElementById("panel");
    panel.innerHTML = "Click Here &gt;<br>";
    
    panel.onclick = clickResponse;
    panel.ondblclick = dblclickResponse;
    panel.onmouseup = mouseupResponse;
    panel.onmousedown = mousedownResponse;
    
}

document.addEventListener("DOMContentLoaded", init, false);

