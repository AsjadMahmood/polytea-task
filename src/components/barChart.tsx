
import { ResponsiveBar } from '@nivo/bar';
import data from '../../utils/data.json';

export const Bar = () =>
{
    return (
        <ResponsiveBar
            data={data.products}
            keys={["price"]}
            indexBy="title"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.4}
            valueScale={{ type: "linear" }}
            colors="#3182CE"
            animate={true}
            enableLabel={false}
            axisTop={null}
            axisRight={null}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "price",
                legendPosition: "middle",
                legendOffset: -40
            }}
        />
    );
};