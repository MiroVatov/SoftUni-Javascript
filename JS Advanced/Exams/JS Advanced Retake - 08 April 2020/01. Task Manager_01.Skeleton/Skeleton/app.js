function solve() {
    let [ addTaskSection, openSection, inProgressSection, completeSection ] = document.querySelectorAll('section');

    let addButton = document.getElementById('add');

    addButton.addEventListener('click', function (event) {
        event.preventDefault();

        let taskInput = document.getElementById('task');
        let descriptionInput = document.getElementById('description');
        let dueDateInput = document.getElementById('date');

        if (taskInput.value === "" || descriptionInput.value === "" || dueDateInput.value === "") {
            return;
        }

        let article = document.createElement('article');
        article.innerHTML += `<h3>${taskInput.value}</h3>`;
        article.innerHTML += `<p>Description: ${descriptionInput.value}</p>`;
        article.innerHTML += `<p>Due Date: ${dueDateInput.value}</p>`;
        let flexDiv = document.createElement('div');
        flexDiv.className = "flex";
        let startButton = document.createElement('button');
        startButton.className = "green";
        startButton.textContent = "Start";
        let endButton = document.createElement('button');
        endButton.className = "red";
        endButton.textContent = "Delete";
        flexDiv.appendChild(startButton);
        flexDiv.appendChild(endButton);
        article.appendChild(flexDiv)

        taskInput.value = "";
        descriptionInput.value = "";
        dueDateInput.value = "";

        let openSectionDiv = openSection.getElementsByTagName('div');
        openSectionDiv[1].appendChild(article);

        startButton.addEventListener('click', function (event) {
            let openSectionArticle = event.target.parentNode.parentNode;
            let inProgressDiv = inProgressSection.getElementsByTagName('div');
            let finishButton = document.createElement('button');
            finishButton.className = "orange";
            finishButton.textContent = "Finish";
            let flexDiv = event.target.parentNode;
            event.target.remove();
            flexDiv.appendChild(finishButton);
            inProgressDiv[1].appendChild(openSectionArticle);

            finishButton.addEventListener('click', function (event) {
                let inProgressArticle = event.target.parentNode.parentNode;
                let completeDiv = completeSection.getElementsByTagName('div');
                let flexDiv = event.target.parentNode;
                flexDiv.remove();
                completeDiv[1].appendChild(inProgressArticle);

            });

        });

        endButton.addEventListener('click', function (event) {
            let divToDelete = event.target.parentNode.parentNode;
            divToDelete.remove();
        });

    })  ;
}