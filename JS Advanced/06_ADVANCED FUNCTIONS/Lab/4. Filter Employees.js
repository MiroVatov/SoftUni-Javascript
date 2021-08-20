function solve(data, criteria) {
    let outputObj = {};
    let personInfo = JSON.parse(data);

    if ( criteria !== 'all' ) {
        let [ criteriaInfo, criteriaData ] = criteria.split('-');
        for (const personInfoElement of personInfo) {
            if (personInfoElement.hasOwnProperty(criteriaInfo) && personInfoElement[criteriaInfo] === criteriaData) {
                let fullName = personInfoElement.first_name + ' ' + personInfoElement.last_name;
                outputObj[fullName] = personInfoElement.email;
            }
        }
    } else {
        for (const personInfoElement of personInfo) {
            let fullName = personInfoElement.first_name + ' ' + personInfoElement.last_name;
                outputObj[fullName] = personInfoElement.email;
        }
    }

    let index = 0;
    for (let objData in outputObj) {
        console.log(`${index}. ${objData} - ${outputObj[objData]}`);
        index++;
    }
}


solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
);

solve(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson'
);