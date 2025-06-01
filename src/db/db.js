import pizzaImg from '../Images/pizza.png';
import saladImg from '../Images/salad.png';
import waterImg from '../Images/water.png';
import icreamImg from '../Images/icecream.png';
import icream1Img from '../Images/icecream1.png';
import kebabImg from '../Images/kebab.png';
import burgerImg from '../Images/burger.png';
import cocaImg from '../Images/coca.png';

export function getData() {
    return [
        {id: 1, title: "Pizza", price: 17.99, image: pizzaImg},
        {id: 2, title: "Salad", price: 5.09, image: saladImg},
        {id: 3, title: "Bottle of water", price: 2.32, image: waterImg},
        {id: 4, title: "Ice cream", price: 17.99, image: icreamImg},
        {id: 5, title: "Pizza", price: 17.99, image: icream1Img},
        {id: 6, title: "Kebab", price: 15.83, image: kebabImg},
        {id: 7, title: "Burger", price: 8.89, image: burgerImg},
        {id: 8, title: "Bottle of Coke", price: 5.89, image: cocaImg},
    ]
};