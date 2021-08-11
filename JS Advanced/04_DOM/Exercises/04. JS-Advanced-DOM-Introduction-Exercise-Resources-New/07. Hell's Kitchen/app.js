function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    let textInput = document.querySelector('#inputs>textarea');
    let bestRestaurant = document.querySelector('div #bestRestaurant p');
    let bestRestaurantWorkers = document.querySelector('div #workers p');
    let bestSalary = -1_000_000;
    let finalRestaurant = '';
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

        function sumWorkersSalaries(salaries) {
            let sum = 0;
            for ( let salary of salaries) {
                sum += salary;
            }
            return sum;
        }

        for (let restaurantData of inputArray) {
            let restaurantObj = {};
            let [ restaurantName, workersData ] = restaurantData.split(' - ');
            workersData = workersData.split(', ');
            let restIndex = checkIfRestaurantExist(restaurants, restaurantName);

            if ( restIndex === undefined ) {
            restaurantObj[restaurantName] = {};
            restaurantObj[restaurantName]['salaries'] = [];

            } else {
                restaurantObj = restaurants[restIndex];
            }
                for ( let workData of workersData ){
                    let [ workerName, workerSalary ] = workData.split(' ');
                    restaurantObj[restaurantName][workerName] = +workerSalary;
                    restaurantObj[restaurantName]['salaries'].push(+workerSalary);
                }

                restaurantObj[restaurantName]['averageSalary'] = sumWorkersSalaries(restaurantObj[restaurantName].salaries) / restaurantObj[restaurantName]['salaries'].length;
                restaurantObj[restaurantName]['highestSalary'] = Math.max(...restaurantObj[restaurantName].salaries);
                if ( restIndex === undefined ) {
                    restaurants.push(restaurantObj);
                }
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
            delete obj[1].salaries;
            for ( let newData of Object.entries(obj[1]).sort(( a, b) => b[1] - a[1])){
                text += `Name: ${newData[0]} With Salary: ${+newData[1]} `;
            }
            bestRestaurantWorkers.textContent = text.trimRight();
        }
    }
}