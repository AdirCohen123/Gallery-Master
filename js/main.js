console.log('Starting up');
const KEY = 'projDB'
var gProjs = [];
_createProjects();
console.log(gProjs);

$(initPage)

function initPage() {
    renderProjs()
}



function renderProjs() {
    var projects = getProjs();
    var strHTML = projects.map(function(project) {
        renderDetails(project.id);
        return `<div class="col-md-4 col-sm-6 portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${project.id}">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="${project.img}">
                     </a>
                    <div class="portfolio-caption">
                        <h4>${project.name}</h4>
                        <p class="text-muted">${project.title}</p>
                     </div>
                </div>`
    })
    document.querySelector('.projs-container').innerHTML = strHTML;
}


function renderDetails(projectID) {
    var project = getProjById(projectID)
    console.log(project.name);
    var strHTML =
        `<div class="portfolio-modal modal fade" id="portfolioModal${projectID}" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-dismiss="modal">
                        <div class="lr">
                            <div class="rl"></div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 mx-auto">
                                <div class="modal-body">
                                    <!-- Project Details Go Here -->
                                    <h2>${project.name} </h2>
                                    <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img class="img-fluid d-block mx-auto" src="${project.img}" alt="">
                                        <p>${project.desc}</p>
                                        <ul class="list-inline">
                                            <li>Date: ${makeDate(project.publishedAt)}</li>
                                            <li>Client: Coding Academy</li>
                                            <li>Category: JS, HTML, CSS</li>
                                        </ul>
                                        <button class="btn btn-primary" data-dismiss="modal" type="button">
                                            <i class="fa fa-times"></i>
                                            Close Project</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
    document.querySelector('.details-container').innerHTML = strHTML;

}

function getProjById(projectID) {
    var project = gProjs.find(function(proj) {
        return projectID === proj.id
    })
    return project
}

function getProjs() {
    return gProjs;
}

function _createProjects() {
    var projects = loadFromStorage(KEY);
    if (!projects || !projects.length) {
        projects = [];
        projects.push(_createProject('Minesweeper', 'img/logos/minesweeper.png', 'Game', makeLorem(50), 'https://adircohen123.github.io/MinesweeperSprint1/'))
    }
    gProjs = projects;
    _saveProjsToStorage();

}


function _createProject(projName, img, title, desc, url) {
    return {
        id: makeId(),
        name: projName,
        img: img,
        title,
        desc: desc,
        url: url,
        publishedAt: getDate()
    }
}

function _saveProjsToStorage() {
    saveToStorage(KEY, gProjs)
}