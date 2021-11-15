window.addEventListener('load', solve);


function solve() {

    const addButton = document.getElementById('add-btn');

    function generateImage() {
        let image = document.createElement('img');
        image.src = './static/img/img.png';
        return image;
    }

    addButton.addEventListener('click', function (event) {
        event.preventDefault();

        let genreInput = document.getElementById('genre');
        let nameOfSong = document.getElementById('name');
        let authorInput = document.getElementById('author');
        let dateInput = document.getElementById('date');

        if (genreInput.hasAttribute('placeholder') || nameOfSong.hasAttribute('placeholder') || authorInput.hasAttribute('placeholder') || dateInput.hasAttribute('placeholder')) {
            genreInput = document.getElementById('genre').placeholder;
            nameOfSong = document.getElementById('name').placeholder;
            authorInput = document.getElementById('author').placeholder;
            dateInput = document.getElementById('date').placeholder;
        } else {
            genreInput = document.getElementById('genre').value;
            nameOfSong = document.getElementById('name').value;
            authorInput = document.getElementById('author').value;
            dateInput = document.getElementById('date').value;
        }

        if (genreInput === "" || nameOfSong === "" || authorInput === "" || dateInput === "") {
            return;
        }

        let allHitsContainer = document.getElementsByClassName('all-hits-container');
        let divHitsInfo = document.createElement('div');
        divHitsInfo.className = "hits-info";
        allHitsContainer[0].appendChild(divHitsInfo);
        let image = generateImage();
        divHitsInfo.appendChild(image);
        divHitsInfo.innerHTML += `<h2>Genre: ${genreInput}</h2>`;
        divHitsInfo.innerHTML += `<h2>Name: ${nameOfSong}</h2>`;
        divHitsInfo.innerHTML += `<h2>Author: ${authorInput}</h2>`;
        divHitsInfo.innerHTML += `<h3>Date: ${dateInput}</h3>`;
        let saveButton = document.createElement('button');
        saveButton.className = "save-btn";
        saveButton.textContent = "Save song";
        let likeButton = document.createElement('button');
        likeButton.className = "like-btn";
        likeButton.textContent = "Like song";
        let deleteButton = document.createElement('button');
        deleteButton.className = "delete-btn";
        deleteButton.textContent = "Delete";
        divHitsInfo.appendChild(saveButton);
        divHitsInfo.appendChild(likeButton);
        divHitsInfo.appendChild(deleteButton);

        if (document.getElementById('genre').hasAttribute('placeholder')) {
            document.getElementById('genre').removeAttribute('placeholder');
            document.getElementById('name').removeAttribute('placeholder');
            document.getElementById('author').removeAttribute('placeholder');
            document.getElementById('date').removeAttribute('placeholder');

        } else {
            document.getElementById('genre').value = "";
            document.getElementById('name').value = "";
            document.getElementById('author').value = "";
            document.getElementById('date').value = "";
        }


        likeButton.addEventListener('click', function () {
            let totalLikesSection = document.querySelector('.likes>p');
            let likes = totalLikesSection.textContent.split(' ');
            let likesQuantity = likes.pop();
            likesQuantity++;
            likes.push(likesQuantity);
            totalLikesSection.textContent = likes.join(' ');
            likeButton.disabled = true;
        });

        saveButton.addEventListener('click', function (event) {
            let savedContainer = document.getElementsByClassName('saved-container');
            let divToSave = event.target.parentNode;
            event.target.nextSibling.remove();
            event.target.remove();
            savedContainer[0].appendChild(divToSave);
            event.parentNode.remove();

        });

        deleteButton.addEventListener('click', function (event) {
            event.target.parentNode.remove();
        });

    });

}