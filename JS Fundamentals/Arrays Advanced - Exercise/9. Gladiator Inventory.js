function gladiatorsInventory(input) {
    let gladiatorInventory = input.shift().split(' ');

    function buy(item) {
        gladiatorInventory.push(item);
        return gladiatorInventory;
    }


    while (input.length > 0){
        let command = input.shift();
        let action = command.split(' ');
        let currentAction = action.shift();

        switch (currentAction) {
            case "Buy":
                let itemToBuy = action.shift();
                if (! gladiatorInventory.includes(itemToBuy)) {
                    gladiatorInventory = buy(itemToBuy);
                }
                break;

            case "Trash":
            let itemToDelete = action.shift();

            if (gladiatorInventory.includes(itemToDelete)){
                let index = gladiatorInventory.indexOf(itemToDelete);
                gladiatorInventory.splice(index, 1);

            }
            break;

            case "Repair":
                let itemToRepair = action.shift();
                if (gladiatorInventory.includes(itemToRepair)){
                    let index = gladiatorInventory.indexOf(itemToRepair);
                    gladiatorInventory.splice(index, 1);
                    gladiatorInventory.push(itemToRepair);
                }
                break;

            case "Upgrade":
                let upgradeElement = action.shift().split('-');
                let searchedItem = upgradeElement[0];
                let secondItem = upgradeElement[1];
                if (gladiatorInventory.includes(searchedItem)){
                    let index = gladiatorInventory.indexOf(searchedItem);
                    let changedUpgradeItem = `${searchedItem}:${secondItem}`
                    gladiatorInventory.splice(index + 1, 0,  changedUpgradeItem);
                }


        }
    }
    return `${gladiatorInventory.join(' ')}`
}

console.log(gladiatorsInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']
));

console.log(gladiatorsInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']
));

console.log(gladiatorsInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']
));
