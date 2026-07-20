// Stores a list of food items for the application.

class FoodSingleton {
    constructor() {
        this.foods = [
            { id: 1, name: "Pizza", price: 14.99 },
            { id: 2, name: "Burger", price: 11.99 },
            { id: 3, name: "Fries", price: 4.99 },
            { id: 4, name: "Salad", price: 8.99 },
            { id: 5, name: "Ice Cream", price: 5.99 }
        ];
    }

    // Returns the list of foods.
    getAll() {
        return this.foods;
    }
}

module.exports = new FoodSingleton();