function MyArray(...args) {

    for (let i = 0; i < args.length; i++) {
        this[i] = args[i];
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

    // if (this.length == 0) {
    //     return undefined;
    // }

    delete this[this.length - 1];


    return deletedItem;
};


MyArray.prototype.toString = function() {
    let str = '';
    for (let i = 0; i < this.length; i++) {
        if (i === this.length - 1) {
            str += `${this[i]}`;
        } else {
            str += `${this[i]},`
        }
    }

    return str;
}

let arr = new MyArray(1, 2, 3, 4, 5, [1, 2, 3], { 1: 2 }, '123');