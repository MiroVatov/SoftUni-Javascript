function getArticleGenerator(articles) {
    let divContent = document.querySelector('body div#content');
    let initialArray = articles;

        function showNext() {
            while ( initialArray.length > 0 ) {
                let articleElement = document.createElement('article');
                articleElement.textContent = initialArray.shift();
                divContent.appendChild(articleElement);
                break;
            }
        }

    return showNext;
}
