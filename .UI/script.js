var user = 'Ivan Ivanov';
var tagsList = ["Полезно знать", "Финансы", "Политика", "Спорт", "Развлечения"];
var articles = [
    {
        id: '1',
        title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2001-02-27T23:00:00'),
        author: 'Иванов Иван',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: [tagsList[0], tagsList[3]]
    },
    {
        id: '2',
        title: 'news2',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2002-02-27T23:00:00'),
        author: 'Иванов Иван',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: [tagsList[0], tagsList[3]]
    },
    {
        id: '3',
        title: 'news3',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2003-02-27T23:00:00'),
        author: 'Иванов Иван',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: [tagsList[0], tagsList[3]]
    },
    {
        id: '4',
        title: 'news4',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2004-02-27T23:00:00'),
        author: 'Иванов Иван',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: [tagsList[0], tagsList[3]]
    },
    {
        id: '5',
        title: 'news5',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2005-02-27T23:00:00'),
        author: 'Иванов Иван',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: [tagsList[0], tagsList[3]]
    },
    {
        id: '6',
        title: 'news6',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2006-02-27T23:00:00'),
        author: 'Иванов Иван',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: [tagsList[0], tagsList[3]]
    },
    {
        id: '7',
        title: 'news7',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2007-02-27T23:00:00'),
        author: 'Иванов Иван',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: [tagsList[1], tagsList[2]]
    },
    {
        id: '8',
        title: 'news8',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2008-02-27T23:00:00'),
        author: 'Иванов Иван',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: [tagsList[1], tagsList[4]]
    },
    {
        id: '9',
        title: 'news9',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2009-02-27T23:00:00'),
        author: 'Иванов Иван',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: [tagsList[1], tagsList[4]]
    },
    {
        id: '10',
        title: 'news10',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2010-02-27T23:00:00'),
        author: 'Иванов Иван',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: [tagsList[1], tagsList[2]]
    },
    {
        id: '11',
        title: 'news11',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2011-02-27T23:00:00'),
        author: 'Иванов Иван',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: [tagsList[0], tagsList[3]]
    },
    {
        id: '12',
        title: 'news12',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2012-02-27T23:00:00'),
        author: 'Иванов Иван',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: [tagsList[0], tagsList[3]]
    },
    {
        id: '13',
        title: 'news13',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2013-02-27T23:00:00'),
        author: 'Иванов Иван',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: [tagsList[1], tagsList[2]]
    },
    {
        id: '14',
        title: 'news14',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2014-02-27T23:00:00'),
        author: 'Иванов Иван',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: [tagsList[1], tagsList[2]]
    },
    {
        id: '15',
        title: 'news15',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2015-02-27T23:00:00'),
        author: 'Иванов Иван',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: [tagsList[3], tagsList[4]]
    },
    {
        id: '16',
        title: 'news16',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2016-02-27T23:00:00'),
        author: 'Иванов Иван',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: [tagsList[3], tagsList[4]]
    },
    {
        id: '17',
        title: 'news17',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2017-02-27T23:00:00'),
        author: 'Иванов Иван',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: [tagsList[3], tagsList[4]]
    },
    {
        id: '18',
        title: 'news18',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2018-02-27T23:00:00'),
        author: 'Иванов Иван',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: [tagsList[3], tagsList[4]]
    },
    {
        id: '19',
        title: 'news19',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2019-02-27T23:00:00'),
        author: 'Иванов Иван',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: [tagsList[3], tagsList[4]]
    },
    {
        id: '20',
        title: 'news20',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2020-02-27T23:00:00'),
        author: 'Иванов Иван',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: [tagsList[3], tagsList[4]]
    }
];

var articleControl = (function () {


    function filterByParam(arts, filterConfig) {

        if (filterConfig.filterType = "None") {
            return arts;
        }
        else if (filterConfig.filterType == "Author") {
            return arts.filter(function (article) {
                return (article.author == filterConfig.param);
            });
        }
        else if (filterConfig.filterType == "Date") {
            return arts.filter(function (article) {
                return (article.createdAt == filterConfig.param);
            });
        }
        else if (filterConfig.filterType == "Tag") {
            return arts.filter(function (article) {
                return (article.tags.indexOf(filterConfig.param) != -1);
            });
        }
        else return arts;

    }

    function addTag(id, tag) {
        for (var i = 0; i < articles.length; i++) {
            if (articles[i].id == id)
                if ((tagsList.indexOf(tag) != -1) && (articles[i].tags.indexOf(tag) == -1)) {
                    articles[i].tags.splice(0, 0, tag);
                    return true;
                }
        }
        return false;
    }

    function removeTag(id, tag) {
        for (var i = 0; i < articles.length; i++) {
            if (articles[i].id == id)
                if (articles[i].tags.indexOf(tag) != -1) {
                    articles[i].tags.splice(articles[i].tags.indexOf(tag), 1);
                    return true;
                }
        }
        return false;
    }


    function sortByDate(articles) {
        var result = articles;
        result = result.sort(function (a, b) {
            if (a.createdAt - b.createdAt < 0) {
                return 1;
            } else {
                return -1;
            }
        });
        return result;
    }

    function getArticles(skip, top, filterConfig) {

        var result = JSON.parse(JSON.stringify(articles));
        if (filterConfig != undefined)
            result = filterByParam(result, filterConfig);
        // else result = articles;
        result = sortByDate(result);
        result.splice(0, skip);
        result.splice(top, Number.MAX_VALUE);
        return result;
    }

    function getArticle(id) {
        for (var i = 0; i < articles.length; i++) {
            if (articles[i].id == id)
                return articles[i];
        }
        return false;
    }

    function validateArticle(article) {
        if (article.id == null || typeof(article.id) != "string")
            return false;

        if (article.title == null || typeof(article.title) != "string") {
            return false;
        } else if (article.title.length > 100)  return false;

        if (article.summary == null || typeof(article.summary) != "string") {
            return false;
        } else if (article.summary > 200) return false;

        if (article.author == null || typeof(article.author) != "string")
            return false;

        if (article.content == null || typeof(article.content) != "string")
            return false;

        if (article.tags.length == 0) {
            return false;
        } else {
            for (var i = 0; i < article.tags.length; i++) {
                if (tagsList.indexOf(article.tags[i]) == -1)
                    return false;
            }
        }
        return true;
    }

    function addArticle(article) {
        if (validateArticle(article)) {
            for (var i = 0; i < articles.length; i++)
                if (articles[i].id == article.id) return false;
            articles.splice(0, 0, article);
            return true;
        } else return false;
    }

    function editArticle(id, article) {
        for (var i = 0; i < articles.length; i++) {
            if (articles[i].id == id) {
                var temp = articles[i];

                if (article.title != null)
                    temp.title = article.title;
                if (article.summary != null)
                    temp.summary = article.summary;
                if (article.createdAt != null)
                    temp.createdAt = article.createdAt;
                if (article.author != null)
                    temp.author = article.author;
                if (article.content != null)
                    temp.content = article.content;
                if (validateArticle(temp)) {
                    articles[i] = temp;
                    return true;
                } else return false;
            }
        }
        return false;
    }

    function removeArticle(id) {
        for (var i = 0; i < articles.length; i++) {
            if (articles[i].id == id) {
                articles.splice(i, 1);
                return true;
            }
        }
        return false;
    }


    function getArticlesCount() {
        return articles.length;
    }

    return {
        addTag: addTag,
        removeTag: removeTag,
        getArticle: getArticle,
        getArticles: getArticles,
        addArticle: addArticle,
        editArticle: editArticle,
        removeArticle: removeArticle,
        getArticlesCount: getArticlesCount
    };

})();
////        Задание 5       ////////////////////////////////////////////
var newsField = document.getElementById('news-field');
var newsTemplate = document.getElementById('news-box');
var domFunctions = (function () {
    function convertToBox(article) {
        var newsBox = newsTemplate.cloneNode(true);

        newsBox.id = article.id;
        newsBox.querySelector('.date').innerHTML = article.createdAt;
        newsBox.querySelector('.topic').innerHTML = article.title;
        newsBox.querySelector('.summary').innerHTML = article.summary;
        newsBox.querySelector('.author').innerHTML = article.author;
        return newsBox;
    }

    function newsFirstLoad() {
        for (var i = 0; i < articles.length; i++) {
            newsField.appendChild(convertToBox(articles[i]));
        }
    }

    function renderArticles(artArray) {
        for (var i = 0; i < artArray.length; i++) {
            newsField.appendChild(convertToBox(artArray[i]));
        }
    }

    function addNewsBox(article) {
        if (!articleControl.addArticle(article)) return false;
        newsField.appendChild(convertToBox(articleControl.getArticle(article.id)));
        return true;
    }

    function removeNewsBox(id) {
        if (!articleControl.removeArticle(id)) return false;
        newsField.removeChild(document.getElementById(id));
        return true;
    }

    function editNewsBox(id, article) {
        if (!articleControl.editArticle(id, article)) return false;
        newsField.replaceChild(convertToBox(articleControl.getArticle(id)), document.getElementById(id));
        return true;
    }

    function clearNewsField() {
        newsField.innerHTML = '';
    }

    return {
        newsFirstLoad: newsFirstLoad,
        renderArticles: renderArticles,
        addNewsBox: addNewsBox,
        editNewsBox: editNewsBox,
        removeNewsBox: removeNewsBox,
        clearNewsField: clearNewsField
    };

})();
document.getElementById('welcome').innerHTML = "Hello, " + user;


// domFunctions.newsFirstLoad();
//
// domFunctions.addNewsBox({
//     id: "ADDED1",
//     title: "ADDED1",
//     summary: "ADDED1",
//     createdAt: new Date(),
//     author: "ADDED1",
//     content: "ADDED1",
//     tags: ["Полезно знать"]
// });
// domFunctions.addNewsBox({
//     id: "ADDED2",
//     title: "ADDED2",
//     summary: "ADDED2",
//     createdAt: new Date(),
//     author: "ADDED2",
//     content: "ADDED2",
//     tags: ["Полезно знать"]
// });
//
// for (var i = 5; i < 15; i++) {
//     domFunctions.removeNewsBox(i.toString());
// }
// domFunctions.editNewsBox('2', {author: "ANONYMOUS", summary: "THIS WAS EDITED"});
////////////////////////////////////////////////////////////////////////


//
// var pagination = (function () {
//     var TOTAL; // всего статей
//     var PER_PAGE = 3; // статей на 1-ой странице
//     var CURRENT_PAGE = 1; // текущая страница
//     var SHOW_MORE_BUTTON;
//     var SHOW_MORE_CALLBACK; // функция, которую вызывать, когда произошел клик по кнопке
//
//     /*
//      Total: Всего статей в ArticleModel. (Надо будет еще учесть, что total меняется при применении фильтров)
//      showMoreCb: функция, которую надо вызвать при клике на кнопку "Показать Еще"
//      */
//     function init(total, showMoreCb) {
//         TOTAL = total;
//         SHOW_MORE_CALLBACK = showMoreCb;
//         SHOW_MORE_BUTTON = document.getElementById('test-pagination');
//         SHOW_MORE_BUTTON.addEventListener('click', handleShowMoreClick)
//
//         /* Не показывать кнопку если статей нет */
//         if (getTotalPages() <= CURRENT_PAGE) {
//             hideShowMoreButton();
//         }
//
//         /* Вернуть skip, top для начальной отрисовки статей */
//         return getParams();
//     }
//
//     function handleShowMoreClick() {
//         var paginationParams = nextPage();
//         SHOW_MORE_CALLBACK(paginationParams.skip, paginationParams.top);
//     }
//
//     function getTotalPages() {
//         return Math.ceil(TOTAL / PER_PAGE);
//     }
//
//     function nextPage() {
//         CURRENT_PAGE++;
//         if (getTotalPages() <= CURRENT_PAGE) {
//             hideShowMoreButton();
//         }
//
//         return getParams();
//     }
//
//     function getParams() {
//         return {
//             top: PER_PAGE,
//             skip: (CURRENT_PAGE - 1) * PER_PAGE
//         };
//     }
//
//     function hideShowMoreButton() {
//         SHOW_MORE_BUTTON.hidden = true;
//     }
//
//     return {
//         init: init
//     }
//
// }());
//
// pagination.init(articles.length,domFunctions.newsFirstLoad());


////////////////////////////////////////////////////////////////////////
//
// console.log("NORMAL TESTS:");
// console.log("Get first 5 articles, filter: Tag, Спорт");
// var sorted = articleControl.getArticles(0, 5, {filterType: "Tag", param: "Спорт"});
// for (var i = 0; i < sorted.length; i++) {
//     console.log(sorted[i])
// }
//
// console.log("Adding article:");
// console.log(articleControl.addArticle({
//     id: "ADD",
//     title: "Test",
//     summary: "Summary of article",
//     createdAt: new Date(),
//     author: "User",
//     content: "Sample text",
//     tags: ["Полезно знать"]
// }));
// console.log(articleControl.getArticle("ADD"));
//
// console.log("Removing 2 article:");
// console.log(articleControl.removeArticle('2'));
// for (var i = 0; i < 3; i++) {
//     console.log(articles[i]);
// }
//
// console.log("Editing 1 article:");
// console.log(articleControl.editArticle('1', {author: "А.П. Сидоров", summary: "Все очень плохо", content: "Сахар подорожал"}));
// console.log(articleControl.getArticle(1));
//
// console.log("Add tag for ADD article:");
// console.log(articleControl.addTag("ADD", "Спорт"));
// console.log(articleControl.getArticle("ADD").tags);
//
// console.log("Remove tag from ADD article:");
// console.log(articleControl.removeTag("ADD", "Полезно знать"));
// console.log(articleControl.getArticle("ADD").tags);
//
// console.log("NON VALID TESTS:");
//
// console.log("addTag(ADD,NewTag)")
// console.log(articleControl.addTag("ADD", "NewTag"));
//
// console.log("Try to edit with too long title");
// console.log(articleControl.editArticle('1', {title: "aaaaaaaaaa aaaaaaaaaa aaaaaaaaaa aaaaaaaaaa aaaaaaaaaa aaaaaaaaaa aaaaaaaaaa aaaaaaaaaa aaaaaaaaaa aaaaaaaaaa aaaaaaaaaa"}));
//
// console.log("Try to add bad article");
// console.log(articleControl.addArticle({
//     id: "Only id"
// }));


