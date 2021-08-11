// function extractText() {
//     let htmlList = document.querySelectorAll('#items li');
//     let result = document.getElementById('result');
//     let res = '';
//     for (const item of htmlList){
//         res += item.textContent.trim() + '\n';
//     }
//     result.textContent = res.trim();
// }

function extractText() {
  let itemNodes =
    document.querySelectorAll("ul#items li");
  let textarea =
    document.querySelector("#result");
  for (let node of itemNodes) {
    textarea.value += node.textContent + "\n";
  }
}
