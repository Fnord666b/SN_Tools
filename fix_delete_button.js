// ==UserScript==
// @name         Fix Delete Button
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Prevent user from accidentally deleting a story
// @author       Fnord666
// @grant        none
// @match http://soylentnews.org/*admin.pl*
// @match http://*.soylentnews.org/*admin.pl*
// @match https://soylentnews.org/*admin.pl*
// @match https://*.soylentnews.org/*admin.pl*
// ==/UserScript==

(function() {
    'use strict';

    var db = document.getElementsByName('op');
    if (db) {
        for (let v of db) {
            if (v.value == "delete") {
                v.onclick = function() {
                    if (confirm("Are you sure you want to delete this story?")) {
                        st_submit(this);
                    }else {
                        alert("Story delete cancelled");
                    }
                }
            }

        }

    };


})();
