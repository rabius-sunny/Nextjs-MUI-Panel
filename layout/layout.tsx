import Sidebar from '../components/sidebar'
import routes from '../utilities/routes'

export default function Layout({ children }: any) {

    return (
        <div>
            <Sidebar
                routes={routes}
            />
            <div>{children}</div>
        </div>
    )
}

