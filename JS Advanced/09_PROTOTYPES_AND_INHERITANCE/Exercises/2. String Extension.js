(function solve() {

        String.prototype.ensureStart = function (str) {
            if (this.startsWith(str)) {
                return this.toString();
            } else {
                return str + this;
            }
        }

        String.prototype.ensureEnd = function (str) {
            if (this.endsWith(str)) {
                return this.toString();
            } else {
                return this + str;
            }
        }

        String.prototype.isEmpty = function () {
            return !this.length;
        }

        String.prototype.truncate = function (n) {
            if (this.length < n) {
                return this + "";
            }
            let value = this;
            while (value.length > n) {
                const index = value.lastIndexOf(" ");
                if (index > -1) {
                    value = value.slice(0, index) + "...";
                } else {
                    value = n >= 4 ? this.slice(0, n - 3) + "..." : ".".repeat(n);
                }
            }
            return value + "";
        }

        String.format = function (string, ...params) {
            let newArr = string.split(' ');
            let index = 0;
            for (let i = 0; i < newArr.length - 1; i++) {
                if (/\d/g.test(newArr[i])) {
                    let result = Number(newArr[i].slice(1, -1));
                    if (result < params.length) {
                        newArr[i] = params[index];
                        index++;
                    } else {
                        newArr[i] = `${i}`;
                    }
                }
            }
            return newArr.join(' ');
        }

        let str = 'my string';

        str = str.ensureStart('my');
        console.log(str);
        str = str.ensureStart('hello ');
        console.log(str);

        // str = str.ensureEnd(' string');
        // console.log(str);
        // str = str.ensureEnd(' hello');
        // console.log(str);

        str = str.truncate(16);
        console.log(str);
        str = str.truncate(14);
        console.log(str);
        str = str.truncate(8);
        console.log(str);
        str = str.truncate(4);
        console.log(str);
        str = str.truncate(2);
        console.log(str);

        str = String.format('The {0} {1} fox',
            'quick', 'brown');
        console.log(str);

        str = String.format('jumps {0} {1}',
            'dog');
        console.log(str);

    }
)
();