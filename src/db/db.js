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
        {title: "Pizza", price: 17.99, Image: {pizzaImg}},
        {title: "Salad", price: 5.09, Image: {saladImg}},
        {title: "Bottle of water", price: 2.32, Image: {waterImg}},
        {title: "Ice cream", price: 17.99, Image: {icreamImg}},
        {title: "Pizza", price: 17.99, Image: {icream1Img}},
        {title: "Kebab", price: 15.83, Image: {kebabImg}},
        {title: "Burger", price: 8.89, Image: {burgerImg}},
        {title: "Bottle of Coke", price: 5.89, Image: {cocaImg}},
    ]
}