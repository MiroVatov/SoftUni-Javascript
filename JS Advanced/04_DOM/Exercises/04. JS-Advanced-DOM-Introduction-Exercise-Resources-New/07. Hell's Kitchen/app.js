function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    let textInput = document.querySelector('#inputs>textarea');
    let bestRestaurant = document.querySelector('div #bestRestaurant p');
    let bestRestaurantWorkers = document.querySelector('div #workers p');
    let bestSalary = -1_000_000;
    let finalRestaurant = '';
    let bestRestaurantStr = '';
    let restaurants = [];

    function onClick() {

        let inputArray = JSON.parse(textInput.value);

        function checkIfRestaurantExist(restaurants, restaurantName) {
            for ( let restaurant of restaurants ){
                for ( let key of Object.keys(restaurant))
                if (key === restaurantName ){
                    return restaurants.indexOf(restaurant);
                }
            }
            return undefined;
        }

        for (let restaurantData of inputArray) {
            let restaurantObj = {};
            let [ restaurantName, workersData ] = restaurantData.split(' - ');
            let sumSalaries = 0;
            let avgSalary = 0;

            workersData = workersData.split(', ');
            restaurantObj[restaurantName] = {};
            let salaries = [];


            for ( let workData of workersData ){
                let [ workerName, workerSalary ] = workData.split(' ');
                salaries.push(+workerSalary);
                restaurantObj[restaurantName][workerName] = +workerSalary;
                sumSalaries += +workerSalary;
            }
            avgSalary = sumSalaries / workersData.length;
            restaurantObj[restaurantName]['averageSalary'] = +avgSalary.toFixed(2);
            restaurantObj[restaurantName]['highestSalary'] = Math.max(...salaries);
            let restIndex = checkIfRestaurantExist(restaurants, restaurantName);
            if ( restIndex !== undefined ){
                restaurants.splice(restIndex, 1);
            }

            restaurants.push(restaurantObj);
        }

        function checkTheBestRestaurant(restaurants) {
            let restObj = {};
            for ( let res of restaurants ){
                for ( let inner of Object.entries(res)){
                    if ( inner[1].averageSalary > bestSalary ){
                        bestSalary = inner[1].averageSalary;
                        restObj = res;
                    }
                }
            }
            return restObj;
        }

        finalRestaurant = checkTheBestRestaurant(restaurants);

        bestRestaurant.textContent = '';
        bestRestaurantWorkers.textContent = ''
        for ( let obj of Object.entries(finalRestaurant) ){
            let text = '';
            bestRestaurant.textContent += `Name: ${obj[0]} Average Salary: ${obj[1].averageSalary.toFixed(2)} Best Salary: ${obj[1].highestSalary.toFixed(2)}`;
            delete obj[1].averageSalary;
            delete obj[1].highestSalary;
            for ( let newData of Object.entries(obj[1]).sort(( a, b) => b[1] - a[1])){
                text += `Name: ${newData[0]} With Salary: ${+newData[1]} `;
            }
            bestRestaurantWorkers.textContent = text.trimRight();
        }
    }
}