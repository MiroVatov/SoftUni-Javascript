function listOfProducts(arr) {
    let sortedArray = arr.sort();
    for (let i = 0; i < sortedArray.length; i++){
        let element = arr[i];
        console.log(`${i + 1}.${element}`)
    }
}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);