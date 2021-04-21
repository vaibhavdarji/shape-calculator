import Rectangle from "./rectangle.js";
import Circle from "./circle.js";
import Square from "./square.js";
import Ellipse from "./ellipse.js";
import StepThree from "./step_three.js";


class StepTwo {
    constructor(shape) {
        this.shape = shape;
        this.title = document.querySelector("#heading");
        this.subTitle = document.querySelector("#sub-heading");
        this.mainContent = document.querySelector("#main-content");
        this.button = document.querySelector("#btn");
        this.cancelBtn = document.querySelector("#cancel");
    }

    renderTitle () {
        while(this.title.firstChild) {
            this.title.removeChild(this.title.firstChild);
        }
        this.title.appendChild(document.createTextNode("Step 2 : Insert your values"));
    }

    renderSubTitle () {
        while(this.subTitle.firstChild) {
            this.subTitle.removeChild(this.subTitle.firstChild);
        }
        this.subTitle.appendChild(document.createTextNode(`You have selected a ${this.shape}, please input the required variables.`))
    }

    drawShape () {

        switch (this.shape) {
            
            case 'circle':
                this.$shape = new Circle();
                break;
                // return new Circle();
            case 'square':
                this.$shape = new Square();
                break;
                // return new Square();
            case 'ellipse':
                this.$shape = new Ellipse();
                break;
                // return new Ellipsis();
            case 'rectangle':
            default:
                this.$shape = new Rectangle();
                break;
                // return new Rectangle();
        }
    }

    renderContent () {
        while(this.mainContent.firstChild) {
            this.mainContent.removeChild(this.mainContent.firstChild);
        }
        this.drawShape();
        this.mainContent.appendChild(this.$shape.render());
    }

    onNext = event => {
        if (!this.$shape.isValid()) {
            event.preventDefault();
            return;
        }
        this.button.removeEventListener('click', this.onNext);
        const nextStep = new StepThree(this.shape);
        nextStep.render(this.$shape.getArea());
    }

    renderButton () {
        while(this.button.firstChild) {
            this.button.removeChild(this.button.firstChild);
        }

        this.button.appendChild(document.createTextNode('Go to step 3'));

        this.button.addEventListener('click', this.onNext);
        this.cancelBtn.style.display = "";
    }

    render () {
        this.renderTitle();
        this.renderSubTitle();
        this.renderContent();
        this.renderButton();
    }
}

export default StepTwo;