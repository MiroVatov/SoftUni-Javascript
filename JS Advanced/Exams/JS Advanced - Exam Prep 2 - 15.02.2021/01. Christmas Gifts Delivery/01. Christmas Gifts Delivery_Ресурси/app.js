function solution() {

    let addGiftButton = document.querySelector('.card button');
    let addGiftInputValue = document.querySelector('.card input[type="text"]'); // .value
    let listOfGifts = document.querySelector('.card:nth-child(2)>ul');
    let sentGifts = document.querySelector('.card:nth-child(3)>ul');
    let discardedGifts = document.querySelector('.card:nth-child(4)>ul');

    addGiftButton.addEventListener('click', function (event) {
        event.preventDefault();
        let newListItem = document.createElement('li');
        newListItem.classList.add("gift");
        newListItem.textContent = addGiftInputValue.value;
        let sendButton = document.createElement("button");
        sendButton.id = "sendButton";
        sendButton.textContent = "Send";
        newListItem.appendChild(sendButton);
        let discardButton = document.createElement("button");
        discardButton.id = "discardButton";
        discardButton.textContent = "Discard";
        newListItem.appendChild(discardButton);
        listOfGifts.appendChild(newListItem);
        addGiftInputValue.value = "";

        sendButton.addEventListener('click', function (event) {
            let giftName = event.target.parentNode.textContent;
            giftName = giftName.split(/(?=[A-Z])/);
            let newListItem = document.createElement('li');
            newListItem.classList.add("gift");
            newListItem.textContent = giftName[0];
            sentGifts.appendChild(newListItem);
            event.target.parentNode.remove();
        });

        discardButton.addEventListener('click', function (event) {
            let giftName = event.target.parentNode.textContent;
            giftName = giftName.split(/(?=[A-Z])/);
            let newListItem = document.createElement('li');
            newListItem.classList.add("gift");
            newListItem.textContent = giftName[0];
            discardedGifts.appendChild(newListItem);
            event.target.parentNode.remove();
        })

        sortList(listOfGifts);

        function sortList() {
            let list, i, sortFlag, LiEle, sorted;
            list = listOfGifts;
            sortFlag = true;
            while (sortFlag) {
                sortFlag = false;
                LiEle = list.getElementsByTagName("li");
                for (i = 0; i < LiEle.length - 1; i++) {
                    sorted = false;
                    if (LiEle[i].innerHTML.toLowerCase() > LiEle[i + 1].innerHTML.toLowerCase()) {
                        sorted = true;
                        break;
                    }
                }
                if (sorted) {
                    LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
                    sortFlag = true;
                }
            }
        }
    });

}