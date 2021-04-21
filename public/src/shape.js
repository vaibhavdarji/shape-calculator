
const INPUTS = {
    'rectangle': ['length', 'breadth'],
    'circle': ['radius'],
    'square': ['length'],
    'ellipse': ['major', 'minor']
}

class Shape {
    constructor (shape = 'rectangle') {
        this.shape = shape;
    }

    onChangeInput = event => {
        this[event.target.name] = Number(event.target.value);
    }

    onKeyPress (event) {
        const evt = event || window.event;
        let key;

        // Handle paste
        if (evt.type === 'paste') {
            key = event.clipboardData.getData('text/plain');
        } else {
            // Handle key press
            key = String.fromCharCode(evt.keyCode || evt.which);
        }
        if(!/[0-9]|\./.test(key)) {
            evt.returnValue = false;
            if (evt.preventDefault) {
                evt.preventDefault();
            }
        }
    }

    getInputs () {
        return INPUTS[this.shape];
    }

    render () {
        const div = document.createElement('div');
        const inputs = INPUTS[this.shape];
        for (let i = 0; i < inputs.length;i++) {
            const input = document.createElement('input');
            input.className = 'text-dimension';
            input.name = inputs[i];
            const label = document.createElement('label');
            label.htmlFor = inputs[i];
            label.appendChild(document.createTextNode(inputs[i] + ' : '));
            div.appendChild(label);
            div.appendChild(input);
            input.addEventListener('change', this.onChangeInput);
            input.addEventListener('keypress', this.onKeyPress);
        }
        return div;
    }
}

export default Shape;