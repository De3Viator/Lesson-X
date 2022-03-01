
class Hamburger {
    constructor(size, ingridient, ...additionals) {
        this.price = 0;
        this.calories = 0;
        this.size = size;
        this.ingridient = ingridient;
        this.additionals = additionals;
        this.setSize();
        this.setIngridient();
        this.setAdditional();
        console.log(`Итоговая стоимость: ${this.price}, итоговые калории: ${this.calories}`)
    }

    setSize() {
        if(this.size === 'big') {
            this.price = 100;
            this.calories = 40;
        } else if (this.size === 'small') {
            this.price = 50;
            this.calories = 20;
        }
    }

    setIngridient() {
        if(this.ingridient === 'cheese') {
            this.price += 10;
            this.calories += 20;
        } else if(this.ingridient === 'salat') {
            this.price += 20;
            this.calories += 5;
        } else if(this.ingridient === 'potato') {
            this.price += 15;
            this.calories += 10;
        }
    }

    setAdditional() {
        this.additionals.forEach(additional => {
            if(additional === 'flavoring') {
                this.price += 15;
            } else if(additional === 'mayonnaise') {
                this.price += 20;
                this.calories += 5;
            }
        })
    }
}

const burger = new Hamburger('small','salat', 'flavoring');