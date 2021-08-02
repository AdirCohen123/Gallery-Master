console.log('Starting up');

$(initPage)

function initPage() {
    renderProjs()
}

function renderProjs() {
    var projects = getProjs();
    var strHTML = projects.map(function(project) {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" onclick="renderDetails('${project.id}')" href="#portfolioModal">
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
    $('.projs-container').html(strHTML);
}

function renderDetails(projId) {
    var project = getProjById(projId)
    console.log('proj:', project);
    var strHtml = `
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
                                        <h2>${project.name} </h2>
                                        <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                        <img class="img-fluid d-block mx-auto details-img" src="${project.img}" alt="">
                                            <p>${project.desc}</p>
                                            <ul class="list-inline">
                                                <li>Date: ${makeDate(project.publishedAt)}</li>
                                                <li>Client: Coding Academy</li>
                                                <li>Category: ${project.labels}</li>
                                            </ul>                       
                                            <a class="link-to-web" href="${project.url}" target="_blank">To website</a>
                                            <button class="btn btn-primary" data-dismiss="modal" type="button">
                                                <i class="fa fa-times"></i>
                                                Close Project</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`
    $('#portfolioModal').html(strHtml);

}