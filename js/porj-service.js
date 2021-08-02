'use strict'
const KEY = 'projDB'
var gProjs = [];

_createProjects();


function getProjs() {
    return gProjs;
}

function _createProjects() {
    var projects = loadFromStorage(KEY);
    if (!projects || !projects.length) {
        projects = [];
        projects.push(_createProject('Minesweeper', 'img/logos/minesweeper.png', 'Game', makeLorem(50), 'https://adircohen123.github.io/MinesweeperSprint1/', 'JS, HTML, CSS'))
        projects.push(_createProject('Pac-man', 'img/logos/pac-man-logo.jpg', 'Game', makeLorem(50), 'https://adircohen123.github.io/Pacman/'))
        projects.push(_createProject('Book-shop', 'img/logos/book-shop.jpg', 'Website', makeLorem(50), 'https://adircohen123.github.io/Book-shop/', 'JS, HTML, CSS'))
        projects.push(_createProject('Todos', 'img/logos/todos.jpg', 'Website', makeLorem(50), 'https://adircohen123.github.io/Todos-proj/', 'JS, HTML, CSS'))
        projects.push(_createProject('My Gallery', 'img/portfolio/04-full.jpg', 'Website', makeLorem(50), 'https://adircohen123.github.io/Galley-proj/', 'JS, HTML, CSS'))
        projects.push(_createProject('closet shop', 'img/portfolio/01-thumbnail.jpg', 'Website', makeLorem(50), 'https://adircohen123.github.io/Closet-proj/', 'JS, HTML, CSS'))
    }
    gProjs = projects;
    _saveProjsToStorage();

}

function _createProject(projName, img, title, desc, url, labels) {
    return {
        id: makeId(),
        name: projName,
        img,
        title,
        desc,
        url,
        publishedAt: getDate(),
        labels,
    }
}

function _saveProjsToStorage() {
    saveToStorage(KEY, gProjs)
}

function getProjById(projectID) {
    var project = gProjs.find(function(proj) {
        return projectID === proj.id
    })
    return project
}