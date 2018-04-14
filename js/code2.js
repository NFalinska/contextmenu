// JSON data for context menu
var mainmenu = [{
	"click_handler": "url1",
	"title": "menu 1",
	"status": "1", "submenu": "submenu1"
},{
	"click_handler": "url2", 
	"title": "menu 2", 
	"status": "0", 
	"submenu": "0"
},{
	"click_handler": "url3", 
	"title": "menu 3", 
	"status": "1", 
	"submenu": "0"
},{
	 "click_handler": "url4", 
	 "title": "menu 4", 
	 "status": "1", 
	 "submenu": "submenu4"
}];

var submenu1 = [{
	"click_handler": "submenu1_url1",
	"title": "submenu1-1", 
	"status": "1", 
	"submenu": "0"
},{
	"click_handler": "submenu1_url2", 
	"title": "submenu1-2", 
	"status": "1",
	"submenu": "0"
},{
	"click_handler": "submenu1_url3", 
	"title": "submenu1-3", 
	"status": "1", 
	"submenu": "0"
}];

var submenu4 = [{
	"click_handler": "submenu4_url", 
	"title": "submenu4-1", 
	"status": "1", 
	"submenu": "0"
},{
	"click_handler": "submenu4_url2", 
	"title": "submenu4-2", 
	"status": "1", 
	"submenu": "0"
},{ 
	"click_handler": "submenu4_url3", 
	"title": "submenu4-3", 
	"status": "1", 
	"submenu": "submenu41"
}];

var submenu41 = [{
	"click_handler": "submenu41_url", 
	"title": "submenu41-1", 
	"status": "1", 
	"submenu": "0"
},{ 
	"click_handler": "submenu41_url2", 
	"title": "submenu41-2", 
	"status": "1",
	"submenu": "0"
},{
	"click_handler": "submenu41_url3", 
	"title": "submenu41-3", 
	"status": "1", 
	"submenu": "0"
}];
// End JSON data

var dataForContextMenu = '';

var myContextMenu = document.getElementById("context_menu");

var click_el1 = document.getElementById("click_el1");

createMenu(mainmenu);

myContextMenu.innerHTML = dataForContextMenu;


var menu = document.querySelector('.menu');

function showMenu(x, y) {
    menu.style.left = x + 'px';
    menu.style.top = y + 'px';
    menu.classList.add('show-menu');
}

function hideMenu() {
    menu.classList.remove('show-menu');
}


function onContextMenu(e) {
    e.preventDefault();
    showMenu(e.pageX, e.pageY);
    document.addEventListener('mousedown', onMouseDown, false);
}

function onMouseDown(e) {
    hideMenu();
    document.removeEventListener('mousedown', onMouseDown);
}

click_el1.addEventListener('contextmenu', onContextMenu, false);

function createMenu(menuData) {
    // формую меню з JSON
    dataForContextMenu += '<menu class="menu">';

    for (var i = 0; i < menuData.length; i++) {
        var status = '';
        if (menuData[i].status != 1) status = 'disabled';
        dataForContextMenu += '<li class="menu-item ' + status + '"> <button type="button" class="menu-btn"> <span class="menu-text">' + menuData[i].title + '</span> </button>';
        if (menuData[i].submenu != 0)   createMenu(eval(menuData[i].submenu));
        dataForContextMenu += '</li>';
    } 
    dataForContextMenu += '</menu>';
}
