function search() {
   let inputValue = document.getElementById('searchText').value;

   let listOfTowns = document.querySelectorAll('ul#towns li');
   let numberOfTownsFound = 0;

   for ( let i = 0; i < listOfTowns.length; i++ ){
       if ( listOfTowns[i].textContent.includes(inputValue) ){
           numberOfTownsFound++;
           listOfTowns[i].style.textDecoration = 'underline';
           listOfTowns[i].style.fontWeight = 'bold';
       }
   }
   let result = document.getElementById('result');
   result.textContent = `${numberOfTownsFound} matches found`;
}
