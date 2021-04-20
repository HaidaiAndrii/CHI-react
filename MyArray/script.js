function MyArray() {

    for (let i = 0; i < arguments.length; i++) {
        this[i] = arguments[i];
    }


    this.length = arguments.length;

}

MyArray.prototype.push = function() {

    for (let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
        this.length++;
    }

    return this.length;
}


let some = new MyArray();