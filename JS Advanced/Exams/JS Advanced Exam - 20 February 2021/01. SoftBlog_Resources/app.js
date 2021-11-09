function solve() {

    let articleAuthor = document.getElementById('creator'); // .value
    let articleTitle = document.getElementById('title'); // .value
    let category = document.getElementById('category'); // .value
    let articleContent = document.getElementById('content'); // .value

    let createButton = document.querySelector('button');
    let postsSection = document.querySelector('.site-content section');

    let archiveSectionOl = document.querySelector('.archive-section>ol');

    function createArticle(event) {
        event.preventDefault();

        if (articleTitle.value === "" | articleAuthor.value === "" || category.value === "" || articleContent.value === ""){
            return;
        }
        let article = document.createElement('article');
        article.innerHTML += `<h1>${articleTitle.value}</h1>`;
        article.innerHTML += `<p>Category:<strong>${category.value}</strong></p>`;
        article.innerHTML += `<p>Creator:<strong>${articleAuthor.value}</strong></p>`;
        article.innerHTML += `<p>${articleContent.value}</p>`;
        article.innerHTML += `<div class="buttons"><button class="btn delete">Delete</button><button class="btn archive">Archive</button></div>`;
        article.innerHTML += `</article>`;
        postsSection.appendChild(article);

        articleAuthor.value = "";
        articleTitle.value = "";
        category.value = "";
        articleContent.value = "";

        let archiveBtn = article.getElementsByClassName('btn archive')[0];
        let deleteBtn = article.getElementsByClassName('btn delete')[0];

        archiveBtn.addEventListener('click',  (event) => {
            let parent = event.target.parentNode.parentNode;
            let artTitle = parent.querySelector('article>h1');
            archiveSectionOl.innerHTML += `<li>${artTitle.textContent}</li>`;
            // archiveSectionOl.sort((a, b) => a.value.localeCompare(b.value));
            archiveBtn.remove();
        });

        deleteBtn.addEventListener('click', (event) => {
            let article = event.target.parentNode.parentNode;
            article.remove();
        })

    }

    createButton.addEventListener('click', createArticle);

}
