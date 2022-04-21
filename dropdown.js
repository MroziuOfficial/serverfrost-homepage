/*
Copyright © 2021-2022 Jakub Mrozowski (MroziuOfficial) <kubamaciekm22@gmail.com>
ServerFrost Homepage v0.2
This file is part of serverfrost-homepage (https://github.com/MroziuOfficial/serverfrost-homepage)
GNU General Public License v3 (GPL-3)
*/


/* When the user clicks on the button, 
	toggle between hiding and showing the dropdown content */
function dropdownFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
      
    // Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
            }
        }
    }
}