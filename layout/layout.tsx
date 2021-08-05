import { RootContainer } from '../components/mui_custom_styles'
import Sidebar2 from '../components/sidebar2'

export default function Layout({ children }: any) {

    return (
        <RootContainer>
            <Sidebar2>
                {children}
            </Sidebar2>
        </RootContainer>
    )
}

