class Story {

    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`;
        } else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
        }
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error(`You can't like the same story twice!`);
        } else if (username === this.creator) {
            throw new Error(`You can't like your own story!`);
        } else {
            this._likes.push(username);
            return `${username} liked ${this.title}!`;
        }
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error(`You can't dislike this story!`);
        } else {
            let indexToRemove = this._likes.indexOf(username);
            this._likes.splice(indexToRemove, 1);
            return `${username} disliked ${this.title}`
        }
    }

    comment(username, content, id) {
        let result = this.checkIfIdInComments(id);
        if (result === undefined || id === undefined) {
            // TODO check how tos search the id in the comments array.
            let newComment = {
                commentId: this._comments.length + 1,
                username: username,
                content: content,
                "Replies": {}
            };
            this._comments.push(newComment);
            return `${username} commented on ${this.title}`;

        } else {

            let replyId = id + '.' + Number(Object.keys(this._comments[result].Replies).length + 1);
            this._comments[result].Replies[replyId] = {username, content};
            return `You replied successfully`;
        }
    }

    toString(sortingType) {
        let sortedArr;
        let data = '';
        if (sortingType === 'asc') {
            sortedArr = this._comments.sort((a, b) => a.commentId - b.commentId);
            data = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\n`;
            data += `Comments:\n`;
            if (this._comments.length === 0) {
            } else {
                for (let comment of sortedArr) {
                    data += `-- ${comment.commentId}. ${comment.username}: ${comment.content}\n`;
                    if (Object.keys(comment.Replies).length > 0) {
                        let sortedReplies = Object.entries(comment.Replies).sort((a, b) => a[0] - b[0]);
                        for (let [id, repData] of sortedReplies) {
                            data += `--- ${id}. ${repData.username}: ${repData.content}\n`;
                        }
                    }
                }
            }
            return data.trim();

        } else if (sortingType === 'desc') {
            sortedArr = this._comments.sort((a, b) => b.commentId - a.commentId);
            data = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\n`;
            data += 'Comments:\n';
            if (this._comments.length === 0) {
            } else {
                for (let comment of sortedArr) {
                    data += `-- ${comment.commentId}. ${comment.username}: ${comment.content}\n`;
                    if (Object.keys(comment.Replies).length > 0) {
                        let sortedReplies = Object.entries(comment.Replies).sort((a, b) => b[0] - a[0]);
                        for (let [id, repData] of sortedReplies) {
                            data += `--- ${id}. ${repData.username}: ${repData.content}\n`;
                        }
                    }
                }
            }
            return data.trim();

        } else if (sortingType === 'username') {
            sortedArr = this._comments.sort((a, b) => a.username.localeCompare(b.username));
            data = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\n`;
            data += 'Comments:\n';
            if (this._comments.length === 0) {
            } else {
                for (let comment of sortedArr) {
                    data += `-- ${comment.commentId}. ${comment.username}: ${comment.content}\n`;
                    if (Object.keys(comment.Replies).length > 0) {
                        let sortedReplies = Object.entries(comment.Replies).sort((a, b) => a[1].username.localeCompare(b[1].username));
                        for (let [id, repData] of sortedReplies) {
                            data += `--- ${id}. ${repData.username}: ${repData.content}\n`;
                        }
                    }
                }
            }
        }
        return data.trim();
    }

    checkIfIdInComments(id) {
        for (let commentIndex = 0; commentIndex < this._comments.length; commentIndex++) {
            if (this._comments[commentIndex].commentId === id) {
                return commentIndex;
            }
        }
        return undefined;
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.like("John"));
console.log(art.like("Arnold"));
console.log(art.like("Murphy"));
console.log(art.like("Jenny"));
console.log(art.like("Anny"));
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
art.like("Sammy");
art.comment("Zane", "Chiao", 1);
art.comment("Zane", "Chiao", 2);
console.log(art.toString('desc'));
console.log(art.toString('asc'));

