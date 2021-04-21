import Shape from "./shape.js";

class Ellipse extends Shape {
    constructor() {
        super('ellipse');
        this.major = 0;
        this.minor = 0;
    }
    getArea () {
        return Math.round(Math.PI * this.major * this.minor);
    }

    isValid () {
        return !!(this.minor && this.major);
    }
}

export default Ellipse;