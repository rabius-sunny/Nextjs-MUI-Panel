
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
        layout: "/admin"
    },
    {
        name: "Data Table",
        path: "/data-table",
        layout: "/admin"
    }
]



export default routes