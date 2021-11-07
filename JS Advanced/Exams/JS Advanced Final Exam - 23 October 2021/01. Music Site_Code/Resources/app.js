window.addEventListener('load', solve);


function solve() {

    const addButton = document.getElementById('add-btn');

    let likeButton;
    let saveButton;
    let deleteButton;

    function createButton() {
        return document.createElement('button');
    }

    function generateImage() {
        let image = document.createElement('img');
        image.src = './static/img/img.png';
        return image;
    }


    function addElementToDiv(event) {
        event.preventDefault();

        let image = generateImage();

        let genre;
        let paragraphGenre;
        genre = document.getElementById('genre');

        if (genre.hasAttribute('placeholder')) {
            paragraphGenre = document.createElement('p').textContent = genre.placeholder;
        } else {
            let placeHolder = document.createAttribute('placeholder');
            genre.setAttributeNode(placeHolder);
            let inputValue = document.getElementById('genre');
            genre.placeholder = inputValue.value;
            paragraphGenre = genre.placeholder;
        }


        let name;
        let paragraphName;
        name = document.getElementById('name');
        if (name.hasAttribute('placeholder')) {
            paragraphName = document.createElement('p').textContent = name.placeholder;
        } else {
            let placeHolder = document.createAttribute('placeholder');
            name.setAttributeNode(placeHolder);
            let inputValue = document.getElementById('name');
            name.placeholder = inputValue.value;
            paragraphName = name.placeholder;
        }

        let author;
        let paragraphAuthor;
        author = document.getElementById('author');
        if (author.hasAttribute('placeholder')) {
            paragraphAuthor = document.createElement('p').textContent = author.placeholder;

        } else {
            let placeHolder = document.createAttribute('placeholder');
            author.setAttributeNode(placeHolder);
            let inputValue = document.getElementById('author');
            author.placeholder = inputValue.value;
            paragraphAuthor = author.placeholder;
        }

        let date;
        let paragraphDate;
        date = document.getElementById('date');

        if (date.hasAttribute('placeholder')) {
            paragraphDate = document.createElement('p').textContent = date.placeholder;
        } else {
            let placeHolder = document.createAttribute('placeholder');
            date.setAttributeNode(placeHolder);
            let inputValue = document.getElementById('date');
            date.placeholder = inputValue.value;
            paragraphDate = date.placeholder;
        }

        if (paragraphDate !== "" && paragraphGenre !== "" && paragraphName !== "" && paragraphAuthor !== "") {
            let divHitsInfo = document.createElement('div');
            divHitsInfo.classList.add('hits-info');
            let divAllHitsContainer = document.getElementsByClassName('all-hits-container');
            divAllHitsContainer[0].appendChild(divHitsInfo);
            divHitsInfo.appendChild(image);
            divHitsInfo.innerHTML += `<h2>Genre: ${paragraphGenre}</h2>`;
            genre.value = "";
            divHitsInfo.innerHTML += `<h2>Name: ${paragraphName}</h2>`;
            name.value = "";
            divHitsInfo.innerHTML += `<h2>Author: ${paragraphAuthor}</h2>`;
            author.value = "";
            divHitsInfo.innerHTML += `<h3>Date: ${paragraphDate}</h3>`;
            date.value = "";

            document.getElementById('genre').removeAttribute('placeholder');
            document.getElementById('name').removeAttribute('placeholder');
            document.getElementById('author').removeAttribute('placeholder');
            document.getElementById('date').removeAttribute('placeholder');

            saveButton = createButton();
            likeButton = createButton();
            deleteButton = createButton();

            divHitsInfo.appendChild(saveButton);
            divHitsInfo.appendChild(likeButton);
            divHitsInfo.appendChild(deleteButton);
            saveButton.textContent = "Save song";
            saveButton.classList.add('save-btn');
            likeButton.textContent = "Like song";
            likeButton.classList.add('like-btn')
            deleteButton.textContent = "Delete";
            deleteButton.classList.add('delete-btn');
            likeButton.disabled = false;

        } else {

        }

        likeButton.addEventListener('click', addLikes);
        saveButton.addEventListener('click', saveSong);
        deleteButton.addEventListener('click', deleteSong);
    }

    addButton.addEventListener('click', addElementToDiv);

    // const hitsDiv = document.getElementsByClassName('all-hits-container');
    let likesNumber = 0;
    let totalLikes = 0;

    function addLikes() {
        let likesDivValue = document.querySelectorAll('.likes>p')[0];

        totalLikes = likesDivValue.textContent;
        likesNumber += 1
        likesDivValue.textContent = `Total Likes: ${likesNumber}`;
        likeButton.disabled = true;
    }

    function saveSong(event) {
        let saveContainerDiv = document.getElementsByClassName('saved-container');
        let divDataToMove = event.target.parentNode;

        divDataToMove.removeChild(likeButton);
        divDataToMove.removeChild(saveButton);
        saveContainerDiv[0].appendChild(divDataToMove);
    }

    function deleteSong(event) {
        let saveContainerDiv = document.getElementsByClassName('saved-container');
        let divDataToMove = event.target.parentNode;
        saveContainerDiv[0].removeChild(divDataToMove);

    }
}