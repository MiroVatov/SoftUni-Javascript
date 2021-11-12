class ArtGallery {

    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {"picture": 200, "photo": 50, "item": 250};
        this.listOfArticles = [];
        this.guests = [];
        this.personalityPoints = {"Vip": 500, "Middle": 250};
    }

    addArticle(articleModel, articleName, quantity) {
        let articleIndex = this._checkIfArticleNameExists(articleModel.toLowerCase(), articleName);

        if (!this.possibleArticles.hasOwnProperty(articleModel.toLowerCase())) {
            throw new Error("This article model is not included in this gallery!");

        } else if (articleIndex === -1) {
            articleModel = articleModel.toLowerCase();
            this.listOfArticles.push({articleModel, articleName, quantity});

        } else {
            this.listOfArticles[articleIndex].quantity += Number(quantity);
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;

    }

    inviteGuest(guestName, personality) {
        let guestIndex = this._checkIfGuestAlreadyInvited(guestName);
        let newGuest;
        if (guestIndex !== -1) {
            throw new Error(`${guestName} has already been invited.`);
        }
        if (!this.personalityPoints.hasOwnProperty(personality)) {
            newGuest = {guestName, points: 50, purchaseArticle: 0};
            this.guests.push(newGuest);
        }

        newGuest = {guestName, point: this.personalityPoints[personality], purchaseArticle: 0};
        this.guests.push(newGuest);

        return `You have successfully invited ${guestName}!`;
    }

    _checkIfArticleNameExists(articleModel, articleName) {
        for (let i = 0; i < this.listOfArticles.length; i++) {
            let aName = this.listOfArticles[i].articleName;
            let aModel = this.listOfArticles[i].articleModel;
            if (aName === articleName && aModel === articleModel) {
                return i;
            }
        }
        return -1;
    }

    _checkIfGuestAlreadyInvited(guestName) {
        for (let i = 0; i < this.guests.length; i++) {
            let name = this.guests[i].guestName;
            if (name === guestName) {
                return i;
            }
        }
        return -1;
    }

    buyArticle(articleModel, articleName, guestName) {
        let articleIndex = this._checkIfArticleNameExists(articleModel, articleName);
        let guestIndex = this._checkIfGuestAlreadyInvited(guestName);

        if (articleIndex === -1){
            throw new Error(`This article is not found.`);

        } else if (this.listOfArticles[articleIndex].quantity === 0){
            return `The ${articleName} is not available.`;

        } else if (guestIndex === -1){
            return `This guest is not invited.`;
        }
        if (this.guests[guestIndex].points < this.possibleArticles[articleModel]){
            return `You need to more points to purchase the article.`;
        }
        this.guests[guestIndex].points -= this.possibleArticles[articleModel];
        this.guests[guestIndex].purchaseArticle += 1;
        this.listOfArticles[articleIndex].quantity -= 1;
        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
    }

    showGalleryInfo(criteria) {
        let data;
        if (criteria === "article"){
            data = `Articles information:\n`;
            for (let article of this.listOfArticles){
                data += `${article.articleModel} - ${article.articleName} - ${article.quantity}\n`
            }
        } else if(criteria === "guest"){
            data = `Guests information:\n`
            for (let guest of this.guests){
                data += `${guest.guestName} - ${guest.purchaseArticle}\n`;
            }
        }

        return data.trim();
    }
}


const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
