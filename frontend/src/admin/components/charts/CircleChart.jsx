import { PieChart, Pie, ResponsiveContainer, Cell, Label } from 'recharts';
import { CircleData } from '../../contants/DataAdmin';

const CircleChart = () => {

const total = CircleData.reduce((sum, item) => sum + item.value, 0);
    return (
   <div className="w-full">
        <h3 className="text-white font-semibold p-2 pb-4 ">
            Browser Usage
        </h3>

        <ResponsiveContainer width="100%" height={350} >
            <PieChart>
                <Pie
                    data={CircleData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius="50%"
                    outerRadius='80%'
                /> 
                <Label
                    value={`${total} Visitor`}
                    position="center"
                    style={{ fontSize: 16, fontWeight: 600 }}
                />
            </PieChart>
        </ResponsiveContainer>
    </div>
  )
}

export default CircleChart
