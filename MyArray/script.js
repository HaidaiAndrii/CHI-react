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
    let currentValue = initialValue;
    let index = 0;

    if (currentValue === undefined) {
        index = 1;
        currentValue = this[0];
    }

    for (index; index < this.length; index++) {
        currentValue = callback(currentValue, this[index], index, this);
    }

    return currentValue;
};

MyArray.prototype.sortFunction = (fElement, sElement) => {
    firstElement = toString(fElement);
    secondElement = toString(sElement);


    if (firstElement > secondElement) {
        return 1;
    }

    if (firstElement < secondElement) {
        return -1;
    }

    if (firstElement = secondElement) {
        return 0;
    }
}

MyArray.prototype.sort = function(callback = this.sortFunction) {
    for (let i = 1; i < this.length; i++) {

        for (let j = i; j > 0; j--) {

            if (callback(this[j], this[j - 1])) {
                const temp = this[j];
                this[j] = this[j - 1];
                this[j - 1] = temp;
            } else {
                break;
            }
        }
    }
    return this;
}

let arr = new MyArray(1, 2, 3, 4, 5);