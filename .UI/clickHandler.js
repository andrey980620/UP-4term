//github: alexey-kozlenkov/clean_code
"use strict";
var newsAdd = document.getElementById("news-add");
var newsEdit = document.getElementById("news-edit");
var newsDelete = document.getElementById("news-delete");
var newsSave = document.getElementById("news-save");

var wrapper = document.getElementById("wrapper");
var popup = document.getElementById("popup");
var newsParent = document.getElementById("news-field");
var loginButton = document.getElementById("login-button");
var loginWindow = document.getElementById("login-window");


function clearPopups() {
    popup.innerHTML = "";
    newsEdit.style.display = "none";
    newsDelete.style.display = "none";
    newsSave.style.display = "none";
}

newsAdd.addEventListener("click", fAdd);
newsEdit.addEventListener("click", fEdit);
newsDelete.addEventListener("click", fDelete);
newsSave.addEventListener("click", fSave)


var form = document.forms.filter;
var submitButton = form.elements.submit;
submitButton.addEventListener('click', handleSubmitClick);


function handleSubmitClick() {
    dom.clearNewsField();
    var dateFilter = new Date(document.getElementById("date-from").value);
    var authorFilter = document.getElementById("author").value;
    //console.log(dateFilter);
   // console.log(dateFilter.getTime());
    renderWithFilter({_date: dateFilter, author:authorFilter});
}

function fAdd() {
    clearPopups();

    var temp = document.getElementById("full-edit").cloneNode(true);

    temp.id = articlesData.length + 1;
    popup.appendChild(temp);
    newsSave.style.display = "block";

}
function fEdit() {
    newsEdit.style.display = "none";
    newsSave.style.display = "block";

    var news = popup.firstElementChild;
    var id = news.id;
    var template = dom.convertToEditView(articleControl.getArticle(id));
    popup.innerHTML = "";
    popup.appendChild(template);
}

function fSave() {
    var news = popup.firstElementChild;
    console.log(articleControl.addArticle({
        id: news.id,
        title: news.querySelector('.topic-full').value,
        summary: news.querySelector('.summary-full').value,
        createdAt: new Date(),
        author: user,
        content: news.querySelector('.content-full').value,
        tags: ["hi"]
    }));

    newsSave.style.display = "none";
    clearPopups();
    reloadPagination();
}

function fDelete() {
    var news = popup.firstElementChild;
    articleControl.removeArticle(news.id);

    clearPopups();
    reloadPagination();
}


newsParent.addEventListener("click", function () {
    clearPopups();
    var idFullView = (recognizeClicked(event.target).id);
    //alert("id = " + idFullView);
    var template = dom.convertToFullView(articleControl.getArticle(idFullView));
    popup.appendChild(template);
    newsEdit.style.display = "block";
    newsDelete.style.display = "block";
});


function recognizeClicked(node) {
    while (node.parentNode != newsParent)node = node.parentNode;
    return node;
}


var pagination = (function () {
    var TOTAL; // всего статей
    var PER_PAGE = 12; // статей на 1-ой странице
    var CURRENT_PAGE = 1; // текущая страница
    var SHOW_MORE_BUTTON;
    var SHOW_MORE_CALLBACK; // функция, которую вызывать, когда произошел клик по кнопке


    function init(total, showMoreCb) {
        TOTAL = total;
        SHOW_MORE_CALLBACK = showMoreCb;
        SHOW_MORE_BUTTON = document.getElementById('test-pagination');
        SHOW_MORE_BUTTON.addEventListener('click', handleShowMoreClick)
        SHOW_MORE_CALLBACK(0, PER_PAGE);

        if (getTotalPages() <= CURRENT_PAGE) {
            hideShowMoreButton();
        }
        return getParams();
    }

    function handleShowMoreClick() {
        var paginationParams = nextPage();
        SHOW_MORE_CALLBACK(paginationParams.skip, paginationParams.top);
        //alert("should work but doesnt")

    }

    function getTotalPages() {
        return Math.ceil(TOTAL / PER_PAGE);
    }

    function nextPage() {
        CURRENT_PAGE++;
        if (getTotalPages() <= CURRENT_PAGE) {
            hideShowMoreButton();
        }

        return getParams();
    }

    function getParams() {
        return {
            skip: (CURRENT_PAGE - 1) * PER_PAGE,
            top: PER_PAGE
        };
    }

    function hideShowMoreButton() {
        SHOW_MORE_BUTTON.hidden = true;
    }

    return {
        init: init
    }

}());

function reloadPagination() {
    newsField.innerHTML = "";
    pagination.init(articles.length, renderer);
}

reloadPagination();

function renderer(skip, top, filterConfig) {
    var arts = articleControl.getArticles(skip, top, filterConfig);
    dom.renderArticles(arts);
}
function renderWithFilter(filterConfig) {

    var total = articleControl.getArticlesCount(filterConfig);
    var paginationParams = pagination.init(total, function (skip, top) {
        renderer(skip, top, filterConfig);
    });

   // renderer(paginationParams.skip, paginationParams.top, filterConfig);
}

loginButton.addEventListener("click", function () {

    wrapper.appendChild(loginWindow);
    var enterButton = loginWindow.querySelector('.login-window-enter-button');
    enterButton.addEventListener("click", enterButtonClicked);
});


function enterButtonClicked() {
    authHandle();
    wrapper.removeChild(loginWindow);
    removeEventListener("click", enterButtonClicked);
}

function authHandle() {
    var inputUser = loginWindow.querySelector(".login-input").value;
    var inputPass = loginWindow.querySelector(".pass-input").value;

    if (checkLogin(inputUser, inputPass)) {
        user = inputUser;
        document.getElementById('welcome').innerHTML = "Hello, " + user;
        alert("OK");
    } else {
        alert("Неправильный пользователь");
    }
}

function checkLogin(log, pass) {
    if (log === 'admin' && pass === 'admin') {
        user = 'admin';
        return true;
    }
    return false;
}