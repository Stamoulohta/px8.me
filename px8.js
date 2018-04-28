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
    handle = document.getElementById('handle');
    sidebar = document.getElementById('sidebar');
    header = document.getElementById('header');
    handle.onclick = toggle_bar;
}

function toggle_bar(){
    if("HEADER" == handle.parentElement.nodeName){
        sidebar.style.left='1rem';
        sidebar.insertBefore(handle, sidebar.childNodes[0]);
        handle.style.float='right';
    }else{
        header.appendChild(handle);
        handle.style.float='left';
        sidebar.style.left='-20%';
    }
}
