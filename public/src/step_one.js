import StepTwo from "./step_two.js";

class StepOne {
    constructor () {
        this.title = document.querySelector("#heading");
        this.subTitle = document.querySelector("#sub-heading");
        this.mainContent = document.querySelector("#main-content");
        this.button = document.querySelector("#btn");
        this.shape = 'rectangle';
    }

    renderTitle () {
        while(this.title.firstChild) {
            this.title.removeChild(this.title.firstChild);
        }
        this.title.appendChild(document.createTextNode("Step 1 : Select your shape"));
    }

    renderSubTitle () {
        while(this.subTitle.firstChild) {
            this.subTitle.removeChild(this.subTitle.firstChild);
        }
        this.subTitle.appendChild(document.createTextNode(`Please select the shape that you would like to calculate the area of and press the button "Go to step 2"`))
    }

    onChangeShape = (event) => {
        this.shape = event.target.value;
    }

    renderContent () {
        while(this.mainContent.firstChild) {
            this.mainContent.removeChild(this.mainContent.firstChild);
        }
        const ul = document.createElement('ul');
        const shapes = ['rectangle', 'circle', 'square', 'ellipse'];
        for (let i = 0; i < shapes.length; i++) {
            const li = document.createElement('li'),
                input  = document.createElement('input'),
                label = document.createElement('label');
            
            input.type = 'radio';
            input.name = 'shapes';
            input.value = shapes[i];
            if (shapes[i] === this.shape) {
                input.checked = true;
            }
            input.addEventListener('change', this.onChangeShape);

            label.htmlFor = shapes[i];
            label.appendChild(document.createTextNode(shapes[i]));
            li.appendChild(input);
            li.appendChild(label);
            ul.appendChild(li);
        }
        this.mainContent.appendChild(ul);
    }

    onNext = () => {
        this.button.removeEventListener('click', this.onNext);
        const nextStep = new StepTwo(this.shape);
        nextStep.render();
    }
    
    render () {
        this.renderTitle();
        this.renderSubTitle();
        this.renderContent();
        this.button.innerHTML = 'Go to step 2';
        document.querySelector("#cancel").style.display = "none";

        document.querySelector("#btn").addEventListener("click", this.onNext);
    }
};

export default StepOne;