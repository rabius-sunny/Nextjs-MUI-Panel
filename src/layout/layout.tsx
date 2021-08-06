import { RootContainer } from '../../components/mui_custom_styles'
import Sidebar from '../../components/sidebar'

export default function Layout({ children }: any) {

    return (
        <RootContainer>
            <Sidebar>
                {children}
            </Sidebar>
        </RootContainer>
    )
}

