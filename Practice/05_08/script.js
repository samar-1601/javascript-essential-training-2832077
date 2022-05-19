/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

var updates = document.querySelectorAll("button:not(.lid-toggle)")

function setNewBackstrapValue(i, e)
{
    var response = document.querySelectorAll("input")[i]
    var place = document.querySelectorAll("li.backpack__strap span")[i]
    console.log(place);
    console.log(response.value);
    if(response.value!='')
    {
        place.innerHTML = `${response.value} inches`;
    }
};

let i = 0;
for(i = 0; i < updates.length; i++)
{
    updates[i].addEventListener("click",(event)=>{this.setNewBackstrapValue(i,event)}, false);
}


// Lid Toggling
let lidsList = document.querySelectorAll("button.lid-toggle");
function toggleLidButton(i)
{
    if(lidsList[i].innerHTML === "Open lid")
    {
        lidsList.innerHTML = "Close lid";
    }
    else 
    {
        lidsList[i].innerHTML = "Open lid";
    }
}
for(let i = 0; i<lidsList.length; i++)
{
    lidsList[i].addEventListener("click", toggleLidButton(i));
}