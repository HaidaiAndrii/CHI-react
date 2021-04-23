function MyArray(...args) {

    for (let i = 0; i < args.length; i++) {
        if (args[i] != undefined) {
            this[i] = args[i];
        }
    }

    Object.defineProperty(this, 'length', {
        get: function() {
            return Object.keys(this).length;
        },
    });
}


MyArray.prototype.push = function(...args) {
    if (args) {
        for (let i = 0; i < args.length; i++) {
            this[this.length] = args[i];
        }
    }

    return (this.length);
}

MyArray.prototype.unshift = function(...args) {


    for (let j = args.length; j > 0; j--) {
        for (let i = this.length; i > 0; i--) {
            this[i] = this[i - 1];
        }
    }

    for (let i = 0; i < args.length; i++) {
        this[i] = args[i];
    }

    return this.length;
};

MyArray.prototype.map = function(callback) {
    if (typeof callback !== 'function') throw new Error(`${callback} is not a function`);
    let res = new MyArray();

    for (let i = 0; i < this.length; i++) {
        res[i] = callback(this[i], i, this);
    }

    return res;
}

MyArray.prototype.forEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }

    return undefined;
}

MyArray.prototype.filter = function(callback) {
    let res = new MyArray();
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            res[res.length] = this[i];
        }
    }

    return res;
}

MyArray.prototype.pop = function() {
    const deletedItem = this[this.length - 1];

    delete this[this.length - 1];

    return deletedItem;
};


MyArray.prototype.toString = function() {
    let str = '';
    for (let i = 0; i < this.length; i++) {

        i === this.length - 1 ? str += `${this[i]}` : str += `${this[i]},`;
    }

    return str;
}

MyArray.prototype.reduce = function(callback, initialValue) {
    if (typeof callback !== 'function') throw new Error(`${callback} is not a function`);

    let currentValue = initialValue;
    console.log(currentValue, 'cur');
    let index = 0;

    if (currentValue === undefined) {
        index = 1;
        currentValue = this[0];
    }

    for (index; index < this.length; index++) {
        currentValue = callback(currentValue, this[index], index, this);
        console.log(currentValue);
    }

    return currentValue;
};

MyArray.prototype.sort = function(callback) {
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    if (callback) {
        for (let i = 0; i < this.length - 1; i++) {
            for (let j = 0; j < this.length - 1; j++) {
                if (callback(this[j], this[j + 1]) > 0) {
                    let temp = this[j];
                    this[j] = this[j + 1];
                    this[j + 1] = temp;
                }
            }
        }
    } else {
        for (let i = 1; i < this.length; i++) {
            const current = this[i];
            let j = i;
            while (j > 0 && this[j - 1] > current) {
                this[j] = this[j - 1];
                j--;
            }
            this[j] = current;
        }
    }
    return this;
};


MyArray.prototype.from = function(array, callback, thisArg) {
    if (array === undefined) {
        return;
    }
    const newArray = new MyArray();
    let i = 0;
    if (typeof array[Symbol.iterator]) {
        for (let value of array) {
            if (callback) {
                newArray.push(callback.call(thisArg, value, i, array));
            } else {
                newArray.push(value);
            }
            i++;
        }
    }
    return newArray;
};

let arr = new MyArray(1, 2, 3, 4, 5, 'abc,', `asdas`, { 1: 'asda' });