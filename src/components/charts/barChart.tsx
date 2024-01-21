
import { ResponsiveBar } from '@nivo/bar';
import data from '../../../utils/data.json';

type PropType = {
    data: any
}

export const Bar = (props: PropType) =>
{
    return (
        <ResponsiveBar
            data={props.data}
            keys={["price"]}
            indexBy="title"
            // margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            // padding={0.4}
            // valueScale={{ type: "linear" }}
            // colors="#3182CE"
            animate={true}
            // enableLabel={false}
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