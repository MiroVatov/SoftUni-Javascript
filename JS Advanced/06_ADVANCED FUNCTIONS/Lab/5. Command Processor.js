function solution() {
    let initialString = '';
    return {
        append: (string) => {
            initialString += string;

        },
        removeStart: (n) => {
            initialString = initialString.substring(n);

        },
        removeEnd: (n) => {
            initialString = initialString.substring(0, initialString.length - n);

        },
        print: () => {
            console.log(initialString);
        }
    }

}


let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();


let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
