class Hamburger {
    constructor (size = "small", stuff = "cheese", mayo = false, spices = false) {
        if (size === "small" || size === "big") {this.size = size } else { this.size = "small"}
        if (stuff === "cheese" || stuff === "salat" || stuff === "potato") {this.stuff = stuff } else { this.stuff = "cheese"}
        if (mayo === true) {this.mayo = mayo } else { this.mayo = false}
        if (spices === true) {this.spices = spices } else { this.spices = false}
        // Интересно конечно, есть ли более адекватный способ проверять входные параметры или нет? =)
    }
    addTopping(topping) {
        switch (topping) {
            case "mayo":
                this.mayo = true;
                break;
            case "spices":
                this.spices = true;
                break;
        }
    }
    removeTopping(topping) {
        switch (topping) {
            case "mayo":
                this.mayo = false;
                break;
            case "spices":
                this.spices = false;
                break;
        }
    }
    getToppings() {
        return "mayo"+ ", " + "spices";
    }
    getSize() {
        return this.size;
    }
    getStuff() {
        let nav = [];
        nav.push(this.stuff);
        if (this.mayo) {nav.push("mayo")}
        if (this.spices) {nav.push("spices")}
        return nav;
    }
    calcPrice() {
        let price = 0;
        if (this.size === "small") {price += 100} else {price += 50}
        if (this.stuff === "cheese") {price += 10}
        if (this.stuff === "salat") {price += 20}
        if (this.stuff === "potato") {price += 15}
        if (this.mayo) {price += 20}
        if (this.spices) {price += 15}
        return price
    }
    calcCcal() {
        let ccal = 0;
        if (this.size === "small") {ccal += 20} else {ccal += 40}
        if (this.stuff === "cheese") {ccal += 20}
        if (this.stuff === "salat") {ccal+= 5}
        if (this.stuff === "potato") {ccal += 10}
        if (this.mayo) {ccal += 5}
        if (this.spices) {ccal += 0}
        return ccal
    }
}

const yam = new Hamburger("small", "potato", true, false);
yam.addTopping("spices");
yam.removeTopping("spices");
yam.getToppings();
yam.getSize();
yam.getStuff();
yam.calcCcal();
yam.calcPrice();
// Методы для проверки