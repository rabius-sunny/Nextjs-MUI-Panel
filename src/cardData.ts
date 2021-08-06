import { Person, Sales, Orders, Expense } from './utilities/icons'

interface card {
    name: string;
    value: number | string;
    color: string;
    icon: any;
}

const cardData: card[] = [
    {
        name: 'New Leds',
        value: 205,
        color: '#343434',
        icon: Person
    },
    {
        name: 'Sales',
        value: '$4021',
        color: '#343434',
        icon: Sales
    },
    {
        name: 'Orders',
        value: 80,
        color: '#343434',
        icon: Orders
    },
    {
        name: 'Expense',
        value: '$1200',
        color: '#343434',
        icon: Expense
    },
]

export default cardData