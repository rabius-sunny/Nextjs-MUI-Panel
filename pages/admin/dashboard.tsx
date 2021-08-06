import { Grid } from "@material-ui/core"
import AnalyticsCard from "../../src/components/analyticsCard"
import analytics from '../../src/analytics'

export default function Dashboard() {
    return (
        <div>
            <Grid container>
                {
                    analytics.map(item => (
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <AnalyticsCard
                                name={item.name}
                                value={item.value}
                                color={item.color}
                                bgcolor={item.bgcolor}
                                icon={item.icon}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}
