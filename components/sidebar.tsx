import { Link, List, ListItem } from '@material-ui/core'

export default function Sidebar({ routes }: any) {

    return (
        <div>
            <List>
                {
                    routes.map((route: any, key: any) => (
                        <Link href={route.layout + route.path} key={key}>
                            <ListItem>
                                {route.name}
                            </ListItem>
                        </Link>
                    ))
                }
            </List>
        </div>
    )
}
