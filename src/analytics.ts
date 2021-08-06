import { Person, Sales, Orders, Expense } from './utilities/icons'
import theme from './theme'

interface card {
    name: string;
    value: number | string;
    bgcolor: string;
    icon: any;
    color: any;
}
const { primary, info, success, warning } = theme.palette
const cardData: card[] = [
    {
        name: 'New Leds',
        value: 205,
        bgcolor: '#F2F1FE',
        icon: Person,
        color: primary.main
    },
    {
        name: 'Sales',
        value: '$4021',
        bgcolor: '#C5DBFF',
        icon: Sales,
        color: info.main
    },
    {
        name: 'Orders',
        value: 80,
        bgcolor: '#BCDDB3',
        icon: Orders,
        color: success.main
    },
    {
        name: 'Expense',
        value: '$1200',
        bgcolor: '#FFF6E0',
        icon: Expense,
        color: warning.main
    },
]

export default cardData