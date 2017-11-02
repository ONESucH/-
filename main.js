"use strict";

var li = document.getElementsByTagName('li');

for (var letter = 0; letter < li.length; letter++) {

    li[letter].onclick = function (event) {

        event.target.className = 'active';
        setTimeout(function () {
            event.target.classList.remove('active');
        }, 1000);
    }

}

