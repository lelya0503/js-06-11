class Hamburger {
    constructor(size, stuffing) {
        this._size = size;
        this._stuffing = stuffing;
        this._topping = []
    }
    getSize() {
        return this._size
    }
    getStuffing() {
        return this._stuffing
    }
    addTopping(topping) {
        if (!this._topping.includes(topping)) {
            return this._topping.push(topping);
        };

    }
    removeTopping(topping) {
        return this._topping = this._topping.filter(item => item !== topping)
    }
    getToppings() {
        return this._topping
    }
    getSizeCal() {
        this.sizeCal = 0

        switch (this.getSize()) {
            case 'small':
                this.sizeCal = 20;
                break;
            case 'large':
                this.sizeCal = 40;
                break;

        }
        return this.sizeCal
    }
    getStuffingCal() {
        this.stuffingCal = 0

        switch (this.getStuffing()) {
            case 'cheese':
                this.stuffingCal = 20;
                break;
            case 'potate':
                this.stuffingCal = 10;
                break;
            case 'salad':
                this.stuffingCal = 5;
                break;
        }
        return this.stuffingCal
    }
    getStuffingPrice() {
        this.stuffingPrice = 0

        switch (this.getStuffing()) {
            case 'cheese':
                this.stuffingPrice = 10;
                break;
            case 'potate':
                this.stuffingPrice = 10;
                break;
            case 'salad':
                this.stuffingPrice = 15;
                break;
        }
        return this.stuffingPrice
    }
    getSizePrice() {
        this.sizePrice = 0
        switch (this.getSize()) {
            case 'small':
                this.sizePrice = 50;
                break;
            case 'large':
                this.sizePrice = 100;
                break;
        }
        return this.sizePrice
    }
    getToppingPrice() {
        this.toppingPrice = 0
        this._topping.map(item => {
            switch (item) {
                case 'space':
                    this.toppingPrice += 15;
                    break;
                case 'mo':
                    this.toppingPrice += 20;
                    break;
            }
        })
        return this.toppingPrice
    }
    getToppingCal() {
        this.toppingCal = 0
        this._topping.map(item => {
            switch (item) {
                case 'space':
                    this.toppingCal += 0;
                    break;
                case 'mo':
                    this.toppingCal += 20;
                    break;
            }
        })
        return this.toppingCal
    }
    getCal() {
        return this.cal = this.getSizeCal() + this.getStuffingCal() + this.getToppingCal()
    }
    getPrice() {
        return this.cal = this.getSizePrice() + this.getStuffingPrice() + this.getToppingPrice()
    }
    getAllInfo() {
        return `Ваш бургер стоит ${this.getPrice()} рублей и содержит ${this.getCal()} каллорий`
    }

}

let bur = new Hamburger('large', 'cheese')
bur.addTopping('space')
bur.addTopping('space')
bur.addTopping('mo')
bur.addTopping('mo')
bur.removeTopping('space')
console.log(bur.getAllInfo())