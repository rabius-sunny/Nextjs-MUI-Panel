import { Dashboard, Table, Security, Reminder, Memo, Gesture, Employees, Weather, Board, Monitorize } from './icons'
interface route {
    name: string;
    path: string;
    layout: string;
    icon?: any;
}

const routes: route[] = [
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: Dashboard,
        layout: "/admin"
    },
    {
        name: "Table",
        path: "/data-table",
        icon: Table,
        layout: "/admin"
    },
    {
        name: "Security",
        path: "/security",
        icon: Security,
        layout: "/admin"
    },
    {
        name: "Reminder",
        path: "/reminder",
        icon: Reminder,
        layout: "/admin"
    },
    {
        name: "Memo",
        path: "/memo",
        icon: Memo,
        layout: "/admin"
    },
    {
        name: "Gesture",
        path: "/gesture",
        icon: Gesture,
        layout: "/admin"
    },
    {
        name: "Employees",
        path: "/employees",
        icon: Employees,
        layout: "/admin"
    },
    {
        name: "Weather",
        path: "/weather",
        icon: Weather,
        layout: "/admin"
    },
    {
        name: "Board",
        path: "/board",
        icon: Board,
        layout: "/admin"
    },
    {
        name: "Monitorize",
        path: "/monitorize",
        icon: Monitorize,
        layout: "/admin"
    },
]



export default routes