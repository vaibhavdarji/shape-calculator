import Shape from "./shape.js";
class Circle extends Shape {
    constructor() {
        super('circle');
        this.radius = 0;
    }
    getArea () {
        return Math.round( this.radius * this.radius * Math.PI);
    }
    isValid () {
        return !!this.radius;
    }
};

export default Circle;