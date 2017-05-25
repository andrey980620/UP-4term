//github: alexey-kozlenkov/clean_code

var content = document.getElementById("content");
var wrapper = document.getElementById("wrapper");
var newsParent = document.getElementById("news-field");
var loginButton = document.getElementById("login-button");
var fullView = document.getElementById("full-view");
var loginWindow;


newsParent.addEventListener("click", function () {
    var idFullView = (recognizeClicked(event.target).id);
    //template = document.getElementById("full-view");
    alert("id = " + idFullView);
    template = convertToFullView(articleControl.getArticle(idFullView));
    wrapper.appendChild(template);
});

function convertToFullView(article) {
    var fullView = fullView.cloneNode(true);

    fullView.id = article.id;
    fullView.querySelector('.date-full').innerHTML = article.createdAt;
    fullView.querySelector('.topic-full').innerHTML = article.title;
    fullView.querySelector('.summary-full').innerHTML = article.summary;
    fullView.querySelector('.author-full').innerHTML = article.author;
    return fullView;
}


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
        alert("should work but doesnt")

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


var total = articles.length;
var Pagination = pagination.init(total, renderer);

function renderer(skip, top) {
    var arts = articleControl.getArticles(skip, top);
    domFunctions.renderArticles(arts);
// {filterType:"Author", param:"Иван Иванов"}
}

loginButton.addEventListener("click", function () {
    loginWindow = document.getElementById("login-window");
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