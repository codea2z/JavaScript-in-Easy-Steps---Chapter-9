/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function errorhandler(msg, url, ln)
{
    alert("Error: " + msg + "\nln File: " + url + "\nAt Line: " + ln);
    return true;
}
onerror = errorhandler;

function init()
{
    var panel = document.getElementById("panel");
    panel.innerHTML = "Handling an error...";
    
    document.getElementById("btn").value = "myButton"; //intentional error
}

document.addEventListener("DOMContentLoaded", init, false);

