/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function focusResponse()
{
    this.value = "In focus";
}

function blurResponse()
{
    this.value = "Focus lost";
}

function init()
{
    var panel = document.getElementById("panel");
    panel.innerHTML += "<input type='text' id='txt1'>";
    panel.innerHTML += "<input type='text' id='txt2'>";
    
    var field1 = document.getElementById("txt1");
    field1.onfocus = focusResponse;
    field1.onblur = blurResponse;
    
    var field2 = document.getElementById("txt2");
    field2.onfocus = focusResponse;
    field2.onblur = blurResponse;
    
    field1.focus();
}

document.addEventListener("DOMContentLoaded", init, false);

