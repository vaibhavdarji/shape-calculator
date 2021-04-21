import Shape from "./shape.js";

class Rectangle  extends Shape {
    constructor() {
        super('rectangle');
        this.length = 0;
        this.breadth = 0;
    }
    getArea () {
        return this.length * this.breadth;
    }

    isValid () {
        return !!(this.length  && this.breadth);
    }

    // onChangeInput = event => {
    //     this[event.target.name] = Number(event.target.value);
    // }

    // onKeyPress (event) {
    //     const evt = event || window.event;
    //     let key;

    //     // Handle paste
    //     if (evt.type === 'paste') {
    //         key = event.clipboardData.getData('text/plain');
    //     } else {
    //         // Handle key press
    //         key = String.fromCharCode(evt.keyCode || evt.which);
    //     }
    //     if(!/[0-9]|\./.test(key)) {
    //         evt.returnValue = false;
    //         if (evt.preventDefault) {
    //             evt.preventDefault();
    //         }
    //     }
    // }

    // render () {
    //     const div = document.createElement('div');
    //     for (let i = 0; i < 2; i++) {
    //         const input = document.createElement('input');
            
    //         input.className = 'text-dimension';
    //         input.name = i == 0 ? 'length': 'breadth';
    //         const label = document.createElement('label');
    //         label.htmlFor = i == 0 ? 'length': 'breadth';
    //         label.appendChild(document.createTextNode(i == 0 ? 'length : ': 'breadth : '));
    //         div.appendChild(label);
    //         div.appendChild(input);
    //         input.addEventListener('change', this.onChangeInput);
    //         input.addEventListener('keypress', this.onKeyPress);
    //     }
    //     return div;
    // }
}

export default Rectangle;