function create(words) {
     const mainDiv = document.getElementById('content');

     for ( let el of words ){
         let article = createArticle(el);
         mainDiv.appendChild(article);
     }

     function createArticle(text) {
        const pEl = elementCreation('p', text);
        pEl.style.display = 'none';

        const divEl = elementCreation('div', pEl);
        divEl.addEventListener('click', () => {
            pEl.style.display = '';
        });

        return divEl;
     }

     function elementCreation(type, content) {
         const result = document.createElement(type);

         if ( type === 'p'){
             result.textContent = content;
         } else {
             result.appendChild(content);
         }
         return result;
     }
}

