function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let table = document.querySelectorAll('tbody tr');
      let searchedText = document.getElementById('searchField').value.toLowerCase();
      for ( let i = 1; i < table.length; i++ ){
         for ( let j = 1; j < table[i].children.length; j++ ){
            if ( table[i].textContent.toLowerCase().includes( searchedText )){
               table[i].className= 'select';
               break;
            }
         }
      }
      document.querySelector('#searchField').value = null;
   }
}