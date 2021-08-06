import { Card, Capsul, NameTypo, ValueTypo } from './mui_custom_styles'

export default function AnalyticsCard(props: any) {
    const { name, bgcolor, color, value } = props
    return (
        <Card>
            <Capsul color={bgcolor}>
                <props.icon />
            </Capsul>
            <div>
                <NameTypo>{name}</NameTypo>
                <ValueTypo color={color}>{value}</ValueTypo>
            </div>
        </Card>
    )
}