import StepOne from "./step_one.js";
class StepThree {
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
        this.title.appendChild(document.createTextNode("Step 3 : Your Results"));
    }

    renderSubTitle () {
        while(this.subTitle.firstChild) {
            this.subTitle.removeChild(this.subTitle.firstChild);
        }
        this.subTitle.appendChild(document.createTextNode(`You have calculated the area of a ${this.shape}.`))
        const p = document.createElement('p');
        p.appendChild(document.createTextNode('Below is your result.'));
        this.subTitle.appendChild(p);
    }

    renderContent (result) {
        while(this.mainContent.firstChild) {
            this.mainContent.removeChild(this.mainContent.firstChild);
        }
        const h4 = document.createElement('h4');
        h4.appendChild(document.createTextNode(`The Area is ${result}`))
        this.mainContent.appendChild(h4);
    }

    onNext () {
        this.button.removeEventListener('click', this.onNext);
        new StepOne().render();
    }

    renderButton () {
        while(this.button.firstChild) {
            this.button.removeChild(this.button.firstChild);
        }

        this.button.appendChild(document.createTextNode('Start Over'));

        this.button.addEventListener('click', this.onNext);
        this.cancelBtn.style.display = "none";
    }

    render (result) {
        this.renderTitle();
        this.renderSubTitle();
        this.renderContent(result);
        this.renderButton();
    }
};

export default StepThree;