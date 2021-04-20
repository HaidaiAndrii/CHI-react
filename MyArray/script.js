function MyArray() {

    for (let i = 0; i < arguments.length; i++) {
        this[i] = arguments[i];
    }
    Object.defineProperty(this, 'length', {
        get: function() {
            let count = 0;
            for (key in this) {
                count++;
            }
            return count - 1;
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

let arr = new MyArray();