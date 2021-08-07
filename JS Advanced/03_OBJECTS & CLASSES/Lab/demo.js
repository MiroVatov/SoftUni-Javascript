let data = '{ "manager":{"firstName":"John","lastName":"Doe"} }';
let obj = JSON.parse(data);
console.log(obj.manager);