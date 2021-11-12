window.addEventListener('load', solve);

function solve() {
    let addButton = document.getElementById('add');
    let tableBody = document.getElementById('furniture-list');

    let modelInfo = document.getElementById('model');
    let yearInfo = document.getElementById('year');
    let descriptionInfo = document.getElementById('description');
    let priceInfo = document.getElementById('price');

    addButton.addEventListener('click', function (event) {
        if ((modelInfo.value === "" || descriptionInfo.value === "" || yearInfo.value === "" || priceInfo.value === "") || (yearInfo.value <= 0 || priceInfo.value <= 0)) {
            return;
        }
        event.preventDefault();

        let trInfo = document.createElement('tr');
        trInfo.className = "info";
        let td1 = document.createElement('td');
        td1.textContent = modelInfo.value;
        let td2 = document.createElement('td');
        td2.textContent = Number(priceInfo.value).toFixed(2);
        trInfo.appendChild(td1);
        trInfo.appendChild(td2);
        let td3 = document.createElement('td');
        let moreInfoButton = document.createElement('button');
        moreInfoButton.className = "moreBtn";
        moreInfoButton.textContent = 'More Info';
        let buyButton = document.createElement('button');
        buyButton.className = "buyBtn";
        buyButton.textContent = 'Buy it';
        td3.appendChild(moreInfoButton);
        td3.appendChild(buyButton);
        trInfo.appendChild(td3);
        let trHide = document.createElement('tr');
        trHide.style.display = "none";
        trHide.className = "hide";
        let td4 = document.createElement('td');
        td4.textContent = `Year: ${yearInfo.value}`;
        let td5 = document.createElement('td');
        td5.colSpan = 3;
        td5.textContent = `Description: ${descriptionInfo.value}`;
        trHide.appendChild(td4);
        trHide.appendChild(td5);
        tableBody.appendChild(trInfo);
        tableBody.appendChild(trHide);

        modelInfo.value = "";
        yearInfo.value = "";
        priceInfo.value = "";
        descriptionInfo.value = "";

        moreInfoButton.addEventListener('click', function () {
            if (moreInfoButton.textContent === "More Info") {
                moreInfoButton.textContent = "Less Info";
                trHide.style.display = "contents";
            } else {
                moreInfoButton.textContent = "More Info";
                trHide.style.display = "none";
            }

        });

        buyButton.addEventListener('click', function () {
            let totalPrice = document.getElementsByClassName('total-price');
            let price = Number(totalPrice[0].textContent);
            price += Number(td2.textContent);
            totalPrice[0].textContent = price.toFixed(2);

            trInfo.innerHTML = "";
            trHide.innerHTML = "";

        });

    });
}
