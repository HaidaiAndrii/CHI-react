function MyArray() {

    for (let i = 0; i < arguments.length; i++) {
        this[i] = arguments[i];
    }

    Object.defineProperty(this, 'length', {
        get: function() {
            return Object.keys(this).length
        }
    });
}

MyArray.prototype.push = function() {

    for (let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
        this.length++;
    }

    return this.length;
}

MyArray.prototype.unshift = function() {


    for (let j = arguments.length; j > 0; j--) {
        for (let i = this.length; i > 0; i--) {
            this[i] = this[i - 1];
        }
    }

    for (let i = 0; i < arguments.length; i++) {
        this[i] = arguments[i];
    }

    return this.length;
};




let arr = new MyArray();