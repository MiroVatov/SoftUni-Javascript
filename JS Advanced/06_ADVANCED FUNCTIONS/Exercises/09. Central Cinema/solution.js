function solve() {

    let container = Array.from(document.getElementById('container').children);
    let movieNameInput = container[0];
    let hallNameInput = container[1];
    let ticketPrice = container[2];
    let onScreenButton = document.querySelector('#container button');

    let moviesOnScreenUl = document.querySelector('#movies>ul');
    onScreenButton.addEventListener('click', addListItem);

    const clearButton = document.querySelector('#archive>button');
    clearButton.addEventListener('click', () => {
        let archivedMovies = document.querySelectorAll('#archive ul li');
        if (archivedMovies.length > 0) {
            for (let movie of Array.from(archivedMovies)) {
                movie.remove();
            }
        }
    });

    function addListItem(event) {
        let createdListItem = createListItem(movieNameInput, hallNameInput, ticketPrice);
        if ( createdListItem !== undefined ){
            moviesOnScreenUl.appendChild(createdListItem);
            movieNameInput.value = "";
            hallNameInput.value = "";
            ticketPrice.value = "";
            event.preventDefault();
        }
        else {
            movieNameInput.value = "";
            hallNameInput.value = "";
            ticketPrice.value = "";
            event.preventDefault();
        }
    }

    function deleteMovieArchive(event) {
        let parentList = event.target.parentElement;
        parentList.remove();
    }

    function archiveMovie(event) {
        let inputPlaceholder = document.querySelector('#movies input[placeholder="Tickets Sold"]');

        if (inputPlaceholder.value !== "" && Number.isInteger(+inputPlaceholder.value)) {
            let archiveList = document.createElement('li');
            let movieName = event.target.parentElement.parentElement;
            let movieSpan = movieName.querySelector('span');
            let price = event.target.parentElement.querySelector('strong');
            let quantity = Number(inputPlaceholder.value);
            let archiveUl = document.querySelector('#archive>ul');
            let span = document.createElement('span');
            span.textContent = movieSpan.textContent;
            archiveList.appendChild(span);
            let strongElement = document.createElement('strong');
            strongElement.textContent = `Total amount: ${Number(quantity * price.textContent).toFixed(2)}`;
            let buttonDelete = document.createElement('button');
            buttonDelete.textContent = 'Delete';
            archiveList.appendChild(strongElement);
            archiveList.appendChild(buttonDelete);
            archiveUl.appendChild(archiveList);
            buttonDelete.addEventListener('click', deleteMovieArchive);
            movieName.remove();
        }
        else {
            inputPlaceholder.value = "";
        }

    }

    function createListItem(movieNameInput, hallNameInput, ticketPrice) {
        if (movieNameInput.value !== "" && hallNameInput.value !== "" && ticketPrice.value !== "" && Number.isInteger(+ticketPrice.value)) {
            let liItem = document.createElement('li');
            let spanItem = document.createElement('span');
            spanItem.textContent = movieNameInput.value;
            liItem.appendChild(spanItem);
            let strongElement = document.createElement('strong');
            strongElement.textContent = `Hall: ${hallNameInput.value}`;
            liItem.appendChild(strongElement);  // TODO find a way to append text HALL: to the strong element
            let div = document.createElement('div');
            let innerStrong = document.createElement('strong');
            innerStrong.textContent = Number(ticketPrice.value).toFixed(2);
            div.appendChild(innerStrong);
            let ticketsSoldPlaceholder = document.createElement('input');
            ticketsSoldPlaceholder.placeholder = "Tickets Sold";
            div.appendChild(ticketsSoldPlaceholder);
            let archiveButton = document.createElement('button')
            archiveButton.textContent = 'Archive';
            div.appendChild(archiveButton);
            liItem.appendChild(div);
            archiveButton.addEventListener('click', archiveMovie);
            return liItem;

        }
    }
}