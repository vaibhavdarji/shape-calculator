import Shape from "./shape.js";

class Square extends Shape {
    constructor() {
        super('square');
        this.length = 0;
    }
    getArea () {
        return Math.round( this.length * this.length);
    }
    isValid () {
        return !!this.length;
    }
};

export default Square;