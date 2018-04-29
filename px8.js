/* vim: ts=4:sw=4:expandtab

    ===========================================================
    |    Copyright © Stamoulohta (George Stamoulis) - 2018    |
    |    All Rights Reserved.                                 |
    |                                                         |
    |    This file is part of the px8 web application.        |
    ===========================================================-->

    ver: 0.a.1
*/

window.onload = function(){
    handles = document.getElementsByClassName('sb_handle');
    sidebar = document.getElementById('sidebar');
    header = document.getElementById('header');
    Array.prototype.forEach.call(handles, function(handle) {
        handle.onclick = toggle_bar;
    });
}

function toggle_bar(){
    if(sidebar.style.left == '1rem'){
        sidebar.style.left = '-20%';
    }else{
        sidebar.style.left = '1rem';
    }
}
